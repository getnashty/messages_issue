import classNames from "classnames";
import React, { ReactElement } from "react";

export function Flag3({
  className,
  alt = "Flag3",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__flag3")}
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
        d="M4.75 15.25V5.75C4.75 5.75 6 4.75 9 4.75C12 4.75 13.5 6.25 16 6.25C18.5 6.25 19.25 5.75 19.25 5.75L15.75 10.5L19.25 15.25C19.25 15.25 18.5 16.25 16 16.25C13.5 16.25 11.5 14.25 9 14.25C6.5 14.25 4.75 15.25 4.75 15.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
