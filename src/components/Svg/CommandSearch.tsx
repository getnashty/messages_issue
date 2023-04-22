import classNames from "classnames";
import React, { ReactElement } from "react";

export function CommandSearch({
  className,
  alt = "Command Search",
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
        "Svg__commandSearch"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M4.75 6.5C4.75 5.5335 5.5335 4.75 6.5 4.75C7.4665 4.75 8.25 5.5335 8.25 6.5V8.25H6.5C5.5335 8.25 4.75 7.4665 4.75 6.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 6.5C15.75 5.5335 16.5335 4.75 17.5 4.75C18.4665 4.75 19.25 5.5335 19.25 6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H15.75V6.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 17.5C4.75 16.5335 5.5335 15.75 6.5 15.75H8.25V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25C5.5335 19.25 4.75 18.4665 4.75 17.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 15.75H8.25V8.25H15.75V9.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.445 17.445L19.25 19.25M17.445 17.445C16.9293 17.9607 16.2293 18.25 15.5 18.25C14.7707 18.25 14.0712 17.9603 13.5555 17.4445C13.0397 16.9288 12.75 16.2293 12.75 15.5C12.75 14.7707 13.0397 14.0712 13.5555 13.5555C14.0712 13.0397 14.7707 12.75 15.5 12.75C16.2293 12.75 16.9288 13.0397 17.4445 13.5555C17.9603 14.0712 18.25 14.7707 18.25 15.5C18.25 16.2293 17.9607 16.9293 17.445 17.445Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
