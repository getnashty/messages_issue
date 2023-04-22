import classNames from "classnames";
import React, { ReactElement } from "react";

export function Flag({
  className,
  alt = "Flag",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__flag")}
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
        d="M5.75 19.25L5.75 13.25M5.75 13.25L5.75 5.75C5.75 5.75 8.5 3.5 12 5.75C15.5 8 18.25 5.75 18.25 5.75L18.25 13.25C18.25 13.25 15.5 15.5 12 13.25C8.5 11 5.75 13.25 5.75 13.25Z"
      ></path>
    </svg>
  );
}
