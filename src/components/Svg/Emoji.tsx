import classNames from "classnames";
import React, { ReactElement } from "react";

export function Emoji({
  className,
  alt = "Emoji",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__emoji")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.75 12.75C7.75 12.75 9 15.25 12 15.25C15 15.25 16.25 12.75 16.25 12.75"
      ></path>
      <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
      <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
    </svg>
  );
}
