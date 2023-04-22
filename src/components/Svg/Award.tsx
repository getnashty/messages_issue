import classNames from "classnames";
import React, { ReactElement } from "react";

export function Award({
  className,
  alt = "Award",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__award")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M17.25 10C17.25 12.8995 14.8995 15.25 12 15.25C9.10051 15.25 6.75 12.8995 6.75 10C6.75 7.10051 9.10051 4.75 12 4.75C14.8995 4.75 17.25 7.10051 17.25 10Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.75 14.75L7.75 19.25L12 17.75L16.25 19.25L15.25 14.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
