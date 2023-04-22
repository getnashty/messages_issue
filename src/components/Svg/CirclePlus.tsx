import classNames from "classnames";
import React, { ReactElement } from "react";

export function CirclePlus({
  className,
  alt = "CirclePlus",
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
        "Svg__circlePlus"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
        strokeWidth="1.70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.75003V15.25"
        strokeWidth="1.70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 12H8.75"
        strokeWidth="1.70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
