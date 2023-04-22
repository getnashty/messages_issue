import classNames from "classnames";
import React, { ReactElement } from "react";

export function CursorText({
  className,
  alt = "CursorText",
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
        "Svg__cursorText"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M17 18.25V5.75M17 18.25C17 19.25 14.75 19.25 14.75 19.25M17 18.25C17 19.25 19.25 19.25 19.25 19.25M17 5.75C17 4.75 14.75 4.75 14.75 4.75M17 5.75C17 4.75 19.25 4.75 19.25 4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.75 12.25H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.75 16.25L8 7.75L11.25 16.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6 13.25H10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
