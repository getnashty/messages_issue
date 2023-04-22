import classNames from "classnames";
import React, { ReactElement } from "react";

export function ChatBubble({
  className,
  alt = "ChatBubble",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "stroke-current",
        "Svg",
        "Svg__chatBubble"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M12 18.2499C15.5 18.2499 19.25 16.4999 19.25 11.9999C19.25 7.49988 15.5 5.74988 12 5.74988C8.5 5.74988 4.75 7.49988 4.75 11.9999C4.75 13.0297 4.94639 13.9155 5.29123 14.6692C5.50618 15.1391 5.62675 15.6572 5.53154 16.165L5.26934 17.5634C5.13974 18.2546 5.74527 18.8602 6.43651 18.7306L9.64388 18.1292C9.896 18.0819 10.1545 18.086 10.4078 18.1262C10.935 18.2098 11.4704 18.2499 12 18.2499Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
