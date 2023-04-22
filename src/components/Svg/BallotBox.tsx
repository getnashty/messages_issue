import classNames from "classnames";
import React, { ReactElement } from "react";

export function BallotBox({
  className,
  alt = "BallotBox",
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
        "Svg__ballotBox"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M5.61955 5.59794C5.6946 5.11011 6.11435 4.75 6.60792 4.75H17.3921C17.8857 4.75 18.3054 5.11011 18.3805 5.59794L19.25 11.25H4.75L5.61955 5.59794Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.75 11.25H19.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V11.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10 7.75H14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
