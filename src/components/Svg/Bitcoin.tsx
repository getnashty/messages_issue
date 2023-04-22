import classNames from "classnames";
import React, { ReactElement } from "react";

export function Bitcoin({
  className,
  alt = "Bitcoin",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__bitcoin")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M8.75 6.75V12M8.75 6.75H14.3655C17.2189 6.75 18.2926 10.4845 15.875 12M8.75 6.75H6.75M8.75 12V17.25M8.75 12H15.875M8.75 17.25H14.3655C17.2189 17.25 18.2926 13.5155 15.875 12M8.75 17.25H6.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 6.5V4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.25 6.5V4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.25 19.25V17.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 19.25V17.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
