import classNames from "classnames";
import React, { ReactElement } from "react";

export function Speaker({
  className,
  alt = "Speaker",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__speaker")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M15.75 10.75C15.75 10.75 16.25 11.2342 16.25 11.9999C16.25 12.7656 15.75 13.25 15.75 13.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.75 7.75C17.75 7.75 19.25 9 19.25 11.9988C19.25 14.9975 17.75 16.25 17.75 16.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.25 4.75L8.5 8.75H5.75C5.19772 8.75 4.75 9.19772 4.75 9.75V14.25C4.75 14.8023 5.19772 15.25 5.75 15.25H8.5L13.25 19.25V4.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
