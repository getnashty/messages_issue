import { useSelectionContainer } from "@air/react-drag-to-select";
import { Message } from "components/Community/Message";
import { MessageInput } from "components/Community/MessageInput";
import { FollowOutput, Virtuoso, VirtuosoHandle } from "react-virtuoso";

import classNames from "classnames";
import { ChatBubbleDouble } from "components/Svg/ChatBubbleDouble";
import { constants } from "consts";
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { findLastIndex } from "utils/arrays";
import usePrevious from "utils/hooks/usePrevious";
import { useWindowSize } from "utils/hooks/useWindowSize";
import "./styles.css";

const MESSAGE_INPUT_HEIGHT = 52;

export interface MessageData {
  id: number;
  userId: number;
  text: string | number;
  name: string;
  replyMessageId?: number;
}

export interface MessagesProps {
  allowExportToThread?: boolean;
  archiveEnabled?: boolean;
  children?: ReactNode;
  className?: string;
  data?: MessageData[];
  defaultHeaderHeight?: number;
  disableSubThreads?: boolean;
  inlineSubThreads?: boolean;
  listId?: string | number;
  messageActionsEnabled?: boolean;
  messageBookmarksEnabled?: boolean;
}

export function Messages({
  allowExportToThread = false,
  archiveEnabled = false,
  children,
  className,
  defaultHeaderHeight = 0,
  data = [],
  disableSubThreads = false,
  inlineSubThreads,
  listId,
  messageActionsEnabled = false,
  messageBookmarksEnabled = false,
}: MessagesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>();
  const virtuoso = useRef<VirtuosoHandle>(null);
  const [headerHeight, setHeaderHeight] = useState(defaultHeaderHeight);
  const [footerHeight, setFooterHeight] = useState(MESSAGE_INPUT_HEIGHT);
  const [autoFocusId, setAutoFocusId] = useState<number>(0);
  const [isDragging, setDragging] = useState(false);
  const [selectionBox, setSelectionBox] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [selectedMessages, selectMessage] = useState<number[]>([]);
  const [collapsedMessages, setCollapsedMessages] = useState<number[]>([]);
  const [messages, setMessages] = useState<MessageData[]>(data);
  const [messagesWithoutCollapsed, setMessagesWithoutCollapsed] = useState<
    MessageData[]
  >([]);
  const [followOutput, setFollowOutput] = useState<FollowOutput>("smooth");
  const previousListId = usePrevious(listId);
  const previousInlineSubThreads = usePrevious(inlineSubThreads);
  const [windowWidth] = useWindowSize();
  const { DragSelection } = useSelectionContainer({
    isEnabled: allowExportToThread,
    onSelectionStart: () => {
      selectMessage([]);
      setDragging(true);
    },
    onSelectionEnd: () => setDragging(false),
    onSelectionChange: box => setSelectionBox(box),
    shouldStartSelecting: target => {
      if (target instanceof HTMLElement) {
        let el = target;
        // Stop as soon as there is no parent
        // or the element has enableselect
        while (el.parentElement && !el.dataset.enableselect) {
          el = el.parentElement;
        }
        return el.dataset.enableselect === "true";
      }
      return false;
    },
    selectionProps: {
      style: {
        zIndex: 100000,
      },
    },
  });

  /*
   *********************************************
   **                                         **
   **    Put data into messages               **
   **                                         **
   *********************************************
   */
  useEffect(() => {
    if (listId !== previousListId) {
      setMessages([]);
    } else if (data.length > messages.length) {
      setMessages(data);
    }
  }, [data, listId, previousListId, messages.length]);

  /*
   *********************************************
   **                                         **
   **    No auto scroll when changing         **
   **    thread type                          **
   **                                         **
   *********************************************
   */
  useEffect(() => {
    if (inlineSubThreads !== previousInlineSubThreads) {
      setFollowOutput(false);
    } else if (!followOutput) {
      setFollowOutput("smooth");
    }
  }, [followOutput, inlineSubThreads, previousInlineSubThreads]);

  /*
   *********************************************
   **                                         **
   **    Set headerHeight after it renders    **
   **                                         **
   *********************************************
   */
  useEffect(() => {
    if (headerRef.current) {
      const { height } = headerRef.current.getBoundingClientRect();
      // give a little padding under the header
      if (height + 30 !== headerHeight) {
        setHeaderHeight(height + 30);
      }
    }
  }, [headerHeight, headerRef, listId]);

  /*
   *********************************************
   **                                         **
   **    When user scrolls with mouse         **
   **    reset autofocus to primary input     **
   **                                         **
   *********************************************
   */
  useEffect(() => {
    window.addEventListener("wheel", resetAutoFocus);
    return () => window.removeEventListener("wheel", resetAutoFocus);
  });

  /*
   *********************************************
   **                                         **
   **    Create an array of messages          **
   **    without collapsed replies            **
   **                                         **
   *********************************************
   */
  useEffect(() => {
    const collapsedRemoved = messages.filter(
      ({ replyMessageId }) =>
        !replyMessageId ||
        (!collapsedMessages.includes(replyMessageId) && inlineSubThreads)
    );
    // Reset collapsed messages if using popout
    if (!inlineSubThreads && collapsedMessages.length > 0) {
      setCollapsedMessages([]);
    }
    setMessagesWithoutCollapsed(collapsedRemoved);
  }, [messages, collapsedMessages, inlineSubThreads]);

  /*
   *********************************************
   **                                         **
   **    The Footer (Message input)           **
   **    can grow as the words wrap           **
   **                                         **
   *********************************************
   */
  const onSetFooterHeight = useCallback(
    height => {
      if (height !== footerHeight) {
        setFooterHeight(height);

        // Keep us scrolled to the bottom while entering text
        // We want to scroll after the height has been applied
        setTimeout(() => {
          virtuoso.current?.scrollToIndex(messagesWithoutCollapsed.length - 1);
        });
      }
    },
    [setFooterHeight, footerHeight, messagesWithoutCollapsed.length]
  );

  const handleScrollerRef = useCallback(ref => {
    innerRef.current = ref;
  }, []);

  const resetAutoFocus = useCallback(() => {
    if (autoFocusId !== 0) {
      setAutoFocusId(0);
    }
  }, [setAutoFocusId, autoFocusId]);

  const toggleMessageVisibility = useCallback(
    id => {
      if (inlineSubThreads) {
        const uniqueMessages = new Set(collapsedMessages);
        setFollowOutput(false);
        if (uniqueMessages.has(id)) {
          uniqueMessages.delete(id);
        } else {
          uniqueMessages.add(id);
        }
        setCollapsedMessages(Array.from(uniqueMessages.values()));

        // Reset followOutput after
        // messages have re-rendered
        setTimeout(() => {
          setFollowOutput("smooth");
        });
      }
    },
    [windowWidth, collapsedMessages, messages, inlineSubThreads]
  );

  const addMessage = useCallback(
    ({ value }: { value: string | number }) => {
      setMessages([
        ...messages,
        {
          text: value,
          id: messages.length > 0 ? messages[messages.length - 1].id + 1 : 1,
          userId: 52,
          name: "Joe Shmoe",
        },
      ]);
      setAutoFocusId(0);
    },
    [messages, setMessages]
  );

  const onAddReply = useCallback(
    ({ value, replyMessageId }) => {
      const lastIndex = findLastIndex(
        messages,
        ({ replyMessageId: rId }: MessageData) => rId === replyMessageId
      );
      if (lastIndex >= 0) {
        // insert new message after
        const newMessages = [...messages];
        newMessages.splice(lastIndex + 1, 0, {
          text: value,
          id: 15,
          userId: 52,
          name: "Joe Shmoe",
          replyMessageId,
        });
        setMessages(newMessages);
      } else {
        const replyIndex = messages.findIndex(
          ({ id }) => id === replyMessageId
        );
        // insert new message after
        const newMessages = [...messages];
        newMessages.splice(replyIndex + 1, 0, {
          text: value,
          id: 15,
          userId: 52,
          name: "Joe Shmoe",
          replyMessageId,
        });
        setMessages(newMessages);
      }
      setAutoFocusId(replyMessageId);
    },
    [messages, setMessages]
  );

  function calculateReplies(idx: number, count: number): number {
    const msg = messages[idx] as MessageData;
    const nextMsg = messages[idx + 1] as MessageData;

    if (msg && msg.replyMessageId) {
      // Increment count by 1
      // since this message is a reply
      if (nextMsg && nextMsg.replyMessageId === msg.replyMessageId) {
        // check the next message
        return calculateReplies(idx + 1, count + 1);
      } else {
        return count + 1;
      }
    } else {
      return count;
    }
  }

  function Row({ index }: { index: number }) {
    const messageRef = useRef<HTMLDivElement>(null);
    const parentHeight = innerRef.current?.parentElement?.clientHeight || 0;
    const canScroll = parentHeight < (innerRef.current?.scrollHeight || 0);
    const message = messagesWithoutCollapsed[index] as MessageData;
    const previousMessage = messagesWithoutCollapsed[index - 1] as MessageData;
    const nextMessage = messagesWithoutCollapsed[index + 1] as MessageData;
    const allMessagesIndex = messages.findIndex(({ id }) => id === message.id);
    const totalReplies = message.replyMessageId
      ? 0
      : calculateReplies(allMessagesIndex + 1, 0);
    const hasReplies = totalReplies > 0;
    const showSpeaker =
      previousMessage?.userId !== message.userId ||
      (!!previousMessage?.replyMessageId && !message.replyMessageId) ||
      hasReplies ||
      previousMessage?.id === message.replyMessageId;
    const isEndOfGroup =
      (nextMessage?.userId !== message?.userId &&
        !nextMessage?.replyMessageId) ||
      (!!message?.replyMessageId && !nextMessage?.replyMessageId);
    const isCollapsed =
      !!hasReplies && !inlineSubThreads
        ? true
        : message.replyMessageId
        ? collapsedMessages.includes(message.replyMessageId)
        : collapsedMessages.includes(message.id);
    const autoFocusReplyInput =
      !!isEndOfGroup && autoFocusId === message.replyMessageId;

    const deselectMessage = useCallback(() => {
      const messageSelected = selectedMessages.indexOf(message.id) >= 0;
      if (messageSelected) {
        const unselectIndex = selectedMessages.indexOf(message.id);
        const newSelectedMessages = [...selectedMessages];
        newSelectedMessages.splice(unselectIndex, 1);
        selectMessage(newSelectedMessages);
      }
    }, [message.id]);

    /*
     *********************************************
     **                                         **
     **    On component mount, if the input     **
     **    is in focus, but is offscreen,       **
     **    scroll until input is onscreen       **
     **                                         **
     *********************************************
     */
    useEffect(() => {
      if (
        messageRef.current?.clientHeight &&
        !!message.replyMessageId &&
        autoFocusReplyInput
      ) {
        const { top } = messageRef.current.getBoundingClientRect();
        if (top > parentHeight - 40) {
          virtuoso?.current?.scrollBy({
            top: top - parentHeight + 40,
          });
        }
      }
    });

    /*
     *********************************************
     **                                         **
     **    Click and drag to select messages    **
     **    Export selected messages as          **
     **    new thread document                  **
     **                                         **
     *********************************************
     */
    useEffect(() => {
      const messageBox = messageRef.current?.getBoundingClientRect();
      const messageSelected = selectedMessages.indexOf(message.id) >= 0;

      if (isDragging && messageBox) {
        // First Case
        // Drag window starts before message, and ends on top of message
        if (
          selectionBox.top < messageBox.top &&
          selectionBox.top + selectionBox.height > messageBox.top
        ) {
          if (!messageSelected) {
            selectMessage([...selectedMessages, message.id]);
          }
          // Second Case
          // Drag window starts on message
        } else if (
          selectionBox.top > messageBox.top &&
          selectionBox.top < messageBox.bottom
        ) {
          if (!messageSelected) {
            selectMessage([...selectedMessages, message.id]);
          }
        } else if (messageSelected) {
          const unselectIndex = selectedMessages.indexOf(message.id);
          const newSelectedMessages = [...selectedMessages];
          newSelectedMessages.splice(unselectIndex, 1);
          selectMessage(newSelectedMessages);
        }
      }
    }, [message.id]);

    return (
      <Message
        actionsEnabled={messageActionsEnabled}
        bookmarksEnabled={messageBookmarksEnabled}
        deselectMessage={deselectMessage}
        disableReplies={disableSubThreads}
        messageRef={messageRef}
        className={classNames({
          "mr-[18px]": canScroll,
          "mr-[24px]": !canScroll,
        })}
        autoFocusReplyInput={autoFocusReplyInput}
        showSpeaker={showSpeaker}
        isCollapsed={isCollapsed}
        isEndOfGroup={isEndOfGroup}
        isReply={!!message.replyMessageId}
        name={message.name}
        onAddReply={({ value }) =>
          onAddReply({
            value,
            replyMessageId: message.replyMessageId || message.id,
          })
        }
        onToggleVisibility={
          hasReplies || message.replyMessageId
            ? () => {
                const mId = message.replyMessageId || message.id;
                const replyIndex = messagesWithoutCollapsed.findIndex(
                  ({ id }) => id === mId
                );
                toggleMessageVisibility(mId);
                // Scroll to message on the next tick
                // after the collapse or expand has occured
                if (inlineSubThreads) {
                  setTimeout(() => {
                    if (virtuoso.current && replyIndex) {
                      virtuoso.current.scrollToIndex({
                        index: replyIndex + 1,
                        align: "center",
                      });
                    }
                  });
                }
              }
            : undefined
        }
        selected={selectedMessages.indexOf(message.id) >= 0}
        text={message.text}
        totalReplies={totalReplies}
      />
    );
  }

  function Header() {
    return <div style={{ height: headerHeight }} />;
  }

  function Footer() {
    return <div style={{ height: footerHeight }} />;
  }

  return (
    <div
      className={classNames("flex flex-col flex-1 relative z-40", className)}
    >
      {children}
      <div
        className="flex-1 relative -mr-[3px] messagesScrollWrapper"
        data-enableselect
      >
        <DragSelection />
        <Virtuoso
          ref={virtuoso}
          scrollerRef={handleScrollerRef}
          followOutput={followOutput}
          className="scrollContainerBars"
          alignToBottom
          style={{ height: "100%" }}
          totalCount={messagesWithoutCollapsed.length}
          itemContent={idx => <Row index={idx} />}
          components={{ Footer, Header }}
          initialTopMostItemIndex={messagesWithoutCollapsed.length - 1}
        />
        {messagesWithoutCollapsed.length === 0 && (
          <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
            <ChatBubbleDouble className="w-60 text-gray-200/60 hover:-rotate-12 transition-all messagesEmptyGraphic" />
          </div>
        )}
      </div>
      <MessageInput
        placeholder="Message thread, or /asksupa..."
        archiveEnabled={archiveEnabled}
        onSetHeight={onSetFooterHeight}
        autoFocus={autoFocusId === 0}
        className={classNames("absolute bottom-0 left-0 right-5")}
        onSubmit={addMessage}
      />
    </div>
  );
}
