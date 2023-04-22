import classNames from "classnames";
import React, { ReactElement } from "react";

export function Map({
  className,
  alt = "Map",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__Map")}
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
        d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
      ></path>
    </svg>
  );
}
