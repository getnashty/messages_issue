import classNames from "classnames";
import React, { ReactElement } from "react";

export function Italic({
  className,
  alt = "Italic",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__italic")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M14 4.75H11.75M14 4.75H16.25M14 4.75L10 19.25M10 19.25H7.75M10 19.25H12.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
