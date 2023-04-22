import classNames from "classnames";
import React, { ReactElement } from "react";

export function Leaf({
  className,
  alt = "Leaf",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__leaf")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 13C4.75 7.4 19.25 4.75 19.25 4.75C19.25 4.75 18.25 19.25 12 19.25C8 19.25 4.75 17 4.75 13Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.75 19.25C4.75 19.25 8 14 12.25 11.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
