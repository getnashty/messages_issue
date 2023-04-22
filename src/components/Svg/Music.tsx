import classNames from "classnames";
import React, { ReactElement } from "react";

export function Music({
  className,
  alt = "Music",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__music")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <circle
        cx="7"
        cy="17"
        r="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.25 17V6.75C9.25 5.64543 10.1454 4.75 11.25 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14"
      ></path>
      <circle
        cx="17"
        cy="14"
        r="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
    </svg>
  );
}
