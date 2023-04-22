import classNames from "classnames";
import React, { ReactElement } from "react";

export function Flag2({
  className,
  alt = "Flag2",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__flag2")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 5.75V19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.25 15.25V5.75C19.25 5.75 18.5 6.25 16 6.25C13.5 6.25 12 4.75 9 4.75C6 4.75 4.75 5.75 4.75 5.75V15.25C4.75 15.25 6.5 14.25 9 14.25C11.5 14.25 13.5 16.25 16 16.25C18.5 16.25 19.25 15.25 19.25 15.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
