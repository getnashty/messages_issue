import classNames from "classnames";
import { Checkmark } from "components/Svg/Checkmark";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { useOutsideClickHandler } from "utils/hooks/useOutsideClickHandler";
import { EditorRef, MessageInput, deserialize } from "../MessageInput";
import { MessageAvatar } from "./MessageAvatar";
import "./styles.css";

export function Message({
  actionsEnabled,
  autoFocusReplyInput = false,
  bookmarksEnabled,
  className,
  deselectMessage = undefined,
  disableReplies = false,
  isCollapsed = false,
  messageRef,
  name,
  onAddReply,
  onToggleVisibility,
  voting = true,
  selected = false,
  showSpeaker = true,
  isEndOfGroup = true,
  isReply = false,
  text: textRaw,
  totalReplies = 0,
}: {
  actionsEnabled: boolean;
  autoFocusReplyInput?: boolean;
  bookmarksEnabled: boolean;
  className?: string;
  deselectMessage?: () => void;
  disableReplies?: boolean;
  isCollapsed?: boolean;
  name: string;
  messageRef?: RefObject<HTMLDivElement>;
  onAddReply?: ({ value }: { value: string | number }) => void;
  onToggleVisibility?: () => void;
  voting?: boolean;
  selected?: boolean;
  showSpeaker?: boolean;
  isEndOfGroup?: boolean;
  isReply?: boolean;
  text?: string | number;
  totalReplies?: number;
}) {
  const inputRef = useRef<HTMLFormElement>(null);
  const editorRef = useRef<EditorRef>(null);
  const inputEditingRef = useRef<HTMLFormElement>(null);
  const [text, setTextState] = useState(textRaw);
  const [hovered, setHover] = useState(false);
  const [isEditing, setEditingState] = useState(false);
  const [showReplyInput, setReplyInputVisibility] = useState(
    isReply && isEndOfGroup
  );
  const hasReplies = totalReplies > 0;
  const onSetEditing = useCallback(
    editing => {
      if (isEditing !== editing) {
        setEditingState(editing);
      }
    },
    [isEditing]
  );
  const onSetHover = useCallback(
    value => {
      if (hovered !== value) {
        setHover(value);
      }
    },
    [setHover, hovered]
  );

  // Hide editing form on outside click...
  // we want it to be outside click, so buttons inside can still be used
  // TODO
  // we should pass in cancel class names to allow tooltip interaction
  useOutsideClickHandler({
    refs: [inputEditingRef],
    enabled: isEditing,
    cb: () => onSetEditing(false),
    cancelClassNames: ["tooltip"],
  });

  if (
    isCollapsed &&
    ((isReply && !hasReplies) || (!isReply && !showSpeaker && !hasReplies))
  ) {
    return <div className="h-0" />;
  }

  return (
    <div
      ref={messageRef}
      className={classNames(
        "flex pl-2 pr-4 relative rounded-lg messageContainer",
        {
          "pt-2 pb-1.5": showSpeaker && !isEndOfGroup && !isCollapsed,
          "py-2": (showSpeaker && isEndOfGroup) || (hasReplies && isCollapsed),
          "py-1.5": !showSpeaker && !isEndOfGroup,
          "pt-1.5 pb-2": !showSpeaker && isEndOfGroup,
          "bg-gray-200/40 messageContainer__tooltipOpen": hovered && !selected,
          "hover:bg-gray-200/40": !selected,
          "bg-indigo-100/30 shadow-border-top-i text-indigo-100": selected,
        },
        className
      )}
    >
      {selected && (
        <div
          onClick={deselectMessage}
          className={classNames(
            "bg-indigo-100 absolute right-0 top-0 h-6 w-6",
            "rounded-tr-lg rounded-bl-lg flex items-center justify-center",
            "text-indigo-600",
            "cursor-pointer hover:bg-indigo-200 active:text-white active:bg-indigo-600"
          )}
        >
          <Checkmark className={classNames("w-6")} />
        </div>
      )}
      <div
        data-enableselect={false}
        className={classNames("w-9 flex flex-col flex-shrink-0")}
      >
        {showSpeaker && !isReply && (
          <MessageAvatar unreadMessages={name === "Amanda Nash"} />
        )}
        {(hasReplies || isReply) && (
          <div
            className={classNames(
              "flex flex-col flex-1 messageContainer__expander",
              {
                "cursor-pointer": hasReplies || isReply,
              }
            )}
            onClick={hasReplies || isReply ? onToggleVisibility : undefined}
          >
            <div
              className={classNames(
                "self-center absolute w-0.5 bg-slate-300/60 flex-1 rounded-b",
                {
                  "top-4": hasReplies && !isReply,
                  "top-0": isReply && !hasReplies,
                  "bottom-0": !isEndOfGroup && !isCollapsed,
                  "bottom-8": isEndOfGroup && !isCollapsed,
                  "bottom-3": isCollapsed,
                }
              )}
            />
            {(isEndOfGroup || isCollapsed) && (
              <div
                className={classNames(
                  "self-center absolute h-2 w-2 rounded-full bg-slate-300",
                  {
                    "bottom-8": !isCollapsed,
                    "bottom-3": isCollapsed,
                  }
                )}
              />
            )}
          </div>
        )}
      </div>
      {isReply && (
        <div className={classNames("ml-2 w-9 flex flex-col flex-shrink-0")}>
          {showSpeaker && (
            <MessageAvatar unreadMessages={name === "Amanda Nash"} />
          )}
        </div>
      )}
      <div className={classNames("ml-2 flex flex-col flex-1")}>
        {isEditing ? (
          <MessageInput
            defaultValue={deserialize(
              new DOMParser().parseFromString(`${text}`, "text/html")
            )}
            inputRef={inputEditingRef}
            onBlur={() => {
              if (!isReply) {
                setReplyInputVisibility(false);
              }
            }}
            onSubmit={({ value }) => {
              setTextState(value);
              onSetEditing(false);
            }}
            autoFocus={true}
            shrinkBeforeTyping={false}
            className={classNames(
              "relative mt-0.5 mb-1 transition-all",
              {
                "-ml-11": isReply && isEndOfGroup,
                "text-gray-900": selected,
              },
              "messageInput__edit"
            )}
            placeholder="Reply..."
          />
        ) : (
          <>
            {showSpeaker && (
              <div
                data-enableselect={false}
                className={classNames("flex items-baseline")}
              >
                <p
                  className={classNames(
                    "cursor-pointer text-sm font-bold antialiased text-black",
                    "hover:text-indigo-600 active:text-indigo-800"
                  )}
                >
                  {name}
                </p>
                <span className="ml-2 text-xs text-gray-400/90 font-normal">
                  7:32 PM
                </span>
              </div>
            )}
            {text ? (
              <p
                className="max-w-lg text-sm text-slate-800 hover:text-slate-900"
                dangerouslySetInnerHTML={{ __html: `${text}` }}
              />
            ) : (
              <p className="max-w-lg text-sm text-slate-800 hover:text-slate-900">
                Phasellus leo metus, dapibus at enim venenatis, vulputate
                malesuada lorem. Aenean posuere egestas nunc lobortis pulvinar.
                Ut quis urna in dolor varius faucibus luctus quis metus. Vivamus
                in euismod libero, non sodales sapien. Donec justo eros,
                sagittis id erat ac, elementum suscipit augue. Morbi auctor,
                nulla in vulputate facilisis, diam ante faucibus sem, a
                porttitor odio arcu id ante. Aenean vitae hendrerit lectus, vel
                lacinia felis. Quisque nec pulvinar augue. Pellentesque est
                massa, mattis in eleifend at, pretium tempor velit.
              </p>
            )}
          </>
        )}
        {isCollapsed && (
          <div
            data-enableselect={false}
            onClick={onToggleVisibility}
            className={classNames(
              "mt-1 text-xs flex items-center self-start cursor-pointer"
            )}
          >
            <p className="self-start text-indigo-600 font-semibold hover:text-slate-900">
              {totalReplies > 1
                ? `${totalReplies} replies`
                : `${totalReplies} reply`}
            </p>
            <p className="ml-2 text-gray-500 hover:text-gray-900">
              Last reply today at 2:39 PM
            </p>
          </div>
        )}
        {showReplyInput && (
          <MessageInput
            editorRef={editorRef}
            inputRef={inputRef}
            onBlur={() => {
              if (!isReply) {
                setReplyInputVisibility(false);
              }
            }}
            onSubmit={
              onAddReply ? ({ value }) => onAddReply({ value }) : undefined
            }
            autoFocus={autoFocusReplyInput}
            shrinkBeforeTyping
            className={classNames(
              "relative mt-3 mb-1 transition-all",
              {
                "-ml-11": isReply && isEndOfGroup,
                "text-gray-900": selected,
              },
              "messageInput__reply"
            )}
            placeholder="Reply..."
          />
        )}
      </div>
    </div>
  );
}
