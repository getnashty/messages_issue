import classNames from "classnames";
import React, { ReactElement } from "react";

export function Terminal({
  className,
  alt = "Terminal",
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
        "Svg__terminal"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <rect
        width="14.5"
        height="14.5"
        x="4.75"
        y="4.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        rx="2"
      ></rect>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 10.75L11.25 13L8.75 15.25"
      ></path>
    </svg>
  );
}
