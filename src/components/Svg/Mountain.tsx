import classNames from "classnames";
import React, { ReactElement } from "react";

export function Mountain({
  className,
  alt = "Mountain",
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
        "Svg__mountain"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M13.25 19.25H4.75L7.14611 13.3302C7.8205 11.664 10.1795 11.664 10.8539 13.3302L13.25 19.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.75 19.25H19.25L13 4.75L9.5 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
