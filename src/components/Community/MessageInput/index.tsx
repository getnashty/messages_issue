import classNames from "classnames";
import { PaperPlane } from "components/Svg/PaperPlane";
import escapeHtml from "escape-html";
import React, {
  KeyboardEvent,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BaseEditor,
  Descendant,
  Editor,
  Range,
  Text,
  Transforms,
  createEditor,
} from "slate";
import { withHistory } from "slate-history";
import { jsx } from "slate-hyperscript";
import {
  Editable,
  ReactEditor,
  Slate,
  useFocused,
  useSelected,
  withReact,
} from "slate-react";
import usePrevious from "utils/hooks/usePrevious";
import "./styles.css";

const DEFAULT_NAMES = [
  { label: "Jane Smith", value: "jsm1" },
  { label: "Alan Carlson", value: "acr" },
  { label: "Jason Horman", value: "dff" },
  { label: "Shane Smith", value: "5" },
  { label: "Allison Hamilton", value: "d" },
  { label: "Eliza Morrin", value: "1" },
];

export interface EditorRef {
  focus: () => void;
}
type CustomElement = {
  type: "paragraph" | "mention";
  children: CustomText[];
  attributes?: any;
};
type MentionProps = {
  type: "mention";
  character: string;
  children: CustomText[];
  attributes?: any;
};
type CustomText = { text: string; bold?: boolean; type?: "mention" | "text" };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const Mention = (props: any) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <span
      {...props.attributes}
      contentEditable={false}
      data-cy={`mention-${props.element.character.replace(" ", "-")}`}
      className={classNames("bg-green-100 text-sm p-1 rounded", {
        "shadow-border shadow-indigo-600": selected && focused,
      })}
    >
      {props.children}@{props.element.character}
    </span>
  );
};

const Element = (props: any) => {
  switch (props.element.type) {
    case "mention":
      return <Mention {...props} />;
    default:
      return <p {...props.attributes}>{props.children}</p>;
  }
};

const withMentions = (editor: Editor): Editor => {
  const { isInline, isVoid } = editor;

  editor.isInline = element => {
    return element.type === "mention" ? true : isInline(element);
  };

  editor.isVoid = element => {
    return element.type === "mention" ? true : isVoid(element);
  };

  return editor;
};

const insertMention = (editor: Editor, character: string) => {
  const mention: MentionProps = {
    type: "mention",
    character,
    children: [{ text: "" }],
  };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

export const deserialize = (el: Document, markAttributes = {}): any => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", markAttributes, el.textContent);
  } else if (
    el.nodeType !== Node.ELEMENT_NODE &&
    el.nodeType !== Node.DOCUMENT_NODE
  ) {
    return null;
  }

  const nodeAttributes = { ...markAttributes } as any;

  // define attributes for text nodes
  switch (el.nodeName) {
    case "STRONG":
      nodeAttributes.bold = true;
  }

  const children = Array.from(el.childNodes)
    .map(node => deserialize(node as any, nodeAttributes))
    .flat();

  // Not sure why this is in the example
  if (children.length === 0) {
    //children.push(jsx("text", nodeAttributes, ""));
  }

  switch (el.nodeName) {
    case "BODY":
      return jsx("fragment", {}, children);
    case "BR":
      return "\n";
    case "BLOCKQUOTE":
      return jsx("element", { type: "quote" }, children);
    case "P":
      return jsx("element", { type: "paragraph" }, children);
    // case "A":
    //   return jsx(
    //     "element",
    //     { type: "link", url: el.getAttribute("href") },
    //     children
    //   );
    default:
      return children;
  }
};

const serialize = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  const children = node.children.map((n: any) => serialize(n)).join("");

  switch (node.type) {
    case "mention":
      return `<span
      class="bg-green-100 hover:bg-green-200 active:bg-green-300/80 cursor-pointer text-sm p-0.5 rounded messageMention"
    >@${node.character}</span>`;
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragraph":
      return `<p>${children}</p>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};

const serializeText = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    return string;
  }

  const children = node.children.map((n: any) => serializeText(n)).join("");

  switch (node.type) {
    case "mention":
      return "mention";
    default:
      return children;
  }
};

export function MessageInput({
  editorRef,
  inputRef,
  defaultValue = initialValue,
  autoFocus = true,
  archiveEnabled = false,
  className,
  onBlur,
  onSetHeight,
  onSubmit,
  placeholder = "Message thread...",
  shrinkBeforeTyping = false,
}: {
  archiveEnabled?: boolean;
  defaultValue?: Descendant[];
  editorRef?: RefObject<EditorRef>;
  inputRef?: RefObject<HTMLFormElement>;
  autoFocus?: boolean;
  types?: string[];
  className?: string;
  onBlur?: () => void;
  onSubmit?: ({ value }: { value: string | number }) => void;
  onSetHeight?: (height: number) => void;
  placeholder?: string;
  shrinkBeforeTyping?: boolean;
}) {
  const defaultInputRef = useRef<HTMLFormElement>(null);
  const ref = inputRef || defaultInputRef;
  const [target, setTarget] = useState<Range | null | undefined>();
  const [index, setIndex] = useState(0);
  const [lastKeyDownEvent, setLastKeyDownEvent] = useState<KeyboardEvent>();
  const [search, setSearch] = useState("");
  const [inputValue, setValue] = useState("");
  const editor = useMemo(
    () => withMentions(withReact(withHistory(createEditor()))),
    []
  );

  const renderElement = useCallback(props => <Element {...props} />, []);
  const filterNames = useCallback(
    searchTerm =>
      DEFAULT_NAMES.filter(({ label }: { label: string }) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    []
  );
  const filteredNames = filterNames(search);
  const previousFocus = usePrevious(autoFocus);
  const setInputValue = useCallback(
    val => {
      setValue(val);
    },
    [inputValue, setValue]
  );
  const updateHeight = useCallback(() => {
    if (ref.current && onSetHeight) {
      const { height } = ref.current.getBoundingClientRect();
      onSetHeight(height + 4);
    }
  }, [ref, ref.current, onSetHeight]);
  const submitForm = useCallback(() => {
    if (onSubmit) {
      onSubmit({ value: inputValue });
      setValue("");
      Transforms.deselect(editor);
      editor.children = initialValue;
      updateHeight();
      Transforms.select(editor, {
        focus: { offset: 0, path: [0, 0] },
        anchor: {
          offset: 0,
          path: [0, 0],
        },
      });
    }
  }, [onSubmit, inputValue, setValue]);

  // Generate offsets for custor tooltip menu
  // overrides offset positioning
  const getOffsets = useCallback(
    tgt => {
      let xOffset = 0;
      let yOffset = 0;
      if (tgt && ref.current) {
        const domRange = ReactEditor.toDOMRange(editor, tgt);
        const { left, top } = domRange.getBoundingClientRect();
        if (ref.current) {
          const { left: parentLeft, top: parentTop } =
            ref?.current.getBoundingClientRect();
          xOffset = left - parentLeft - 22;
          yOffset = parentTop - top + 10;
        }
      }

      return { xOffset, yOffset };
    },
    [ref]
  );

  // Create mention using index
  // which is used in the cursor menu
  const createMentionFromIndex = useCallback(() => {
    if (target) {
      Transforms.select(editor, target);
      const selectedName = filteredNames[index].label;
      insertMention(editor, selectedName);
      setTarget(null);
      setLastKeyDownEvent(undefined);
      ReactEditor.focus(editor);
    }
  }, [target, editor, filteredNames, index]);

  // Wire up editor ref
  useImperativeHandle(editorRef, () => ({
    focus: () => ReactEditor.focus(editor),
  }));

  // Autofocus on mount
  useEffect(() => {
    // Call after render
    setTimeout(() => {
      // TODO could also do a previous value check
      if (autoFocus) {
        // const node = ReactEditor.toDOMNode(editor, editor);
        // node.focus();
        ReactEditor.focus(editor);
      }
    });
  }, []);

  // Focus on autoFocus change
  useEffect(() => {
    if (!previousFocus && autoFocus) {
      setTimeout(() => {
        ReactEditor.focus(editor);
      });
    }
  }, [previousFocus, autoFocus]);

  return (
    <form
      data-enableselect={false}
      className={classNames(
        "bg-white border-2 border-gray-300/50",
        "flex flex-col overflow-hidden pl-4",
        "rounded-[10px] min-h-[3rem] z-10",
        "justify-center flex-shrink-0",
        "focus-within:border-indigo-600 focus-within:border-2",
        {
          "pr-[8.3125rem]": inputValue,
          "pr-[4.25rem]": !inputValue,
          "w-full": inputValue && shrinkBeforeTyping,
          "w-72": !inputValue && shrinkBeforeTyping,
        },
        "messageInput",
        className
      )}
      ref={ref}
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submitForm();
      }}
    >
      <Slate
        editor={editor}
        value={defaultValue}
        onChange={value => {
          const { selection, operations } = editor;

          const isAstChange = operations.some(
            op => "set_selection" !== op.type
          );
          if (isAstChange) {
            const htmlVal = value.map(node => serialize(node)).join("");
            const stringVal = value.map(node => serializeText(node)).join("");

            // We don't want to send up html blocks with no text
            // so check against serialized strings before setting val
            const newInputValue = stringVal.length > 0 ? htmlVal : "";
            setInputValue(newInputValue);
          }

          if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection);
            const wordBefore = Editor.before(editor, start, {
              unit: "word",
            });
            const before = wordBefore && Editor.before(editor, wordBefore);
            const beforeRange = before && Editor.range(editor, before, start);
            const beforeText =
              beforeRange && Editor.string(editor, beforeRange);
            const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/);
            const after = Editor.after(editor, start);
            const afterRange = Editor.range(editor, start, after);
            const afterText = Editor.string(editor, afterRange);
            const afterMatch = afterText.match(/^(\s|$)/);

            // SHOW MENTION MENU
            if (beforeMatch && afterMatch) {
              const newSearchTerm = beforeMatch[1];
              if (filterNames(newSearchTerm).length > 0) {
                setTarget(beforeRange);
                setSearch(beforeMatch[1]);
                setIndex(0);
                return;
              } else {
                // Hide when no matches
                setTarget(null);
              }
            } else if (lastKeyDownEvent?.key === "@") {
              // Show tooltip on @
              const newTarget = {
                anchor: {
                  offset: start.offset - 1 > 0 ? start.offset - 1 : 0,
                  path: start.path,
                },
                focus: {
                  ...start,
                },
              };
              setSearch("");
              setIndex(0);
              setTarget(newTarget);
              return;
            }
          }

          // Do Not Show Mention Menu
          if (target) {
            setTarget(null);
          }
        }}
      >
        <Editable
          tabIndex={autoFocus ? 1 : 0}
          className={classNames(
            "w-full py-3 max-h-80 overflow-scroll rounded-[10px] outline-none text-sm messageInput__editor"
          )}
          renderElement={renderElement}
          onBlur={onBlur}
          onKeyUp={updateHeight}
          onKeyDown={e => {
            e.stopPropagation();

            // Save last event so we can
            // use it to show the tooltip
            // in the slate onChange
            setLastKeyDownEvent(e);

            if (target) {
              switch (e.key) {
                case "ArrowDown":
                  e.preventDefault();
                  if (filteredNames.length > index + 1) {
                    setIndex(index + 1);
                  } else {
                    setIndex(0);
                  }
                  break;
                case "ArrowUp":
                  e.preventDefault();
                  if (index === 0) {
                    setIndex(filteredNames.length - 1);
                  } else {
                    setIndex(index - 1);
                  }
                  break;
                case "ArrowLeft":
                case "ArrowRight":
                  e.preventDefault();
                  break;
                case "Tab":
                case "Enter":
                  e.preventDefault();
                  createMentionFromIndex();
                  break;
                case "Space":
                case "Escape":
                  e.preventDefault();
                  setTarget(null);
                  break;
              }
            }
            if (e.key === "Enter" && e.shiftKey === false) {
              e.preventDefault();
              submitForm();
            }
          }}
          placeholder={placeholder}
        />
      </Slate>
      <div className="absolute right-2 bottom-2 z-10 flex items-end">
        <div
          className={classNames(
            "group mr-1 z-10 rounded-md h-7 w-7 flex items-center justify-center",
            "bg-emerald-100 hover:bg-emerald-600",
            "active:scale-90 transition-all",
            {
              "opacity-0 -mr-7 pointer-events-none": !inputValue,
              "cursor-pointer": inputValue,
            },
            "messageInputActionButton messageInputActionButton__send"
          )}
        >
          <PaperPlane className="w-5 text-emerald-600 group-hover:text-white rotate-90" />
        </div>
      </div>
    </form>
  );
}
