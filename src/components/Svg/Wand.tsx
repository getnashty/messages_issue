import classNames from "classnames";
import React, { ReactElement } from "react";

export function Wand({
  className,
  alt = "Wand",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__wand")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M5.04509 16.705L16.707 5.04302C17.0976 4.65249 17.7307 4.65249 18.1213 5.04301L18.957 5.8788C19.3476 6.26933 19.3476 6.90249 18.957 7.29302L7.29509 18.955C6.90457 19.3455 6.2714 19.3455 5.88088 18.955L5.04509 18.1192C4.65457 17.7287 4.65457 17.0955 5.04509 16.705Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15 7L17 9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
