import classNames from "classnames";
import React, { ReactElement } from "react";

export function Play({
  className,
  alt = "Play",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "stroke-current fill-current",
        "Svg",
        "Svg__play"
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
        d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
      ></path>
    </svg>
  );
}
