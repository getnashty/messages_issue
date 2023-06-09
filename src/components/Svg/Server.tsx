import classNames from "classnames";
import React, { ReactElement } from "react";

export function Server({
  className,
  alt = "Server",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__server")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H5.75C5.19771 10.25 4.75 9.80228 4.75 9.25V5.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H5.75C5.19771 19.25 4.75 18.8023 4.75 18.25V14.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.25 5V10"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.25 14V19"
      ></path>
    </svg>
  );
}
