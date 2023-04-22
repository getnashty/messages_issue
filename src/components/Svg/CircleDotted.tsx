import classNames from "classnames";
import React, { ReactElement } from "react";

export function CircleDotted({
  className,
  alt = "Circle Dotted",
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
        "Svg__circleDotted"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <circle
        cx="12"
        cy="12"
        r="7.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 3.5"
      />
    </svg>
  );
}
