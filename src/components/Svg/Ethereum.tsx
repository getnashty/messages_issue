import classNames from "classnames";
import React, { ReactElement } from "react";

export function Ethereum({
  className,
  alt = "Ethereum",
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
        "Svg__ethereum"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M5.75 10L12 4.75L18.25 10M5.75 10L12 19.25L18.25 10M5.75 10L12 12.25L18.25 10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
