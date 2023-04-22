import classNames from "classnames";
import React, { ReactElement } from "react";

export function PaperPlane({
  className,
  alt = "Paper Plane",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "stroke-current",
        "Svg",
        "Svg__paperPlane"
      )}
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
        d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15.5V12.75"
      ></path>
    </svg>
  );
}
