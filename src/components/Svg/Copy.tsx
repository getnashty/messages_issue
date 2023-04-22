import classNames from "classnames";
import React, { ReactElement } from "react";

export function Copy({
  className,
  alt = "Copy",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__Copy")}
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
        d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
      ></path>
      <rect
        width="10.5"
        height="10.5"
        x="8.75"
        y="8.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        rx="2"
      ></rect>
    </svg>
  );
}
