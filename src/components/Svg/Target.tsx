import classNames from "classnames";
import React, { ReactElement } from "react";

export function Target({
  className,
  alt = "Target",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__target")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <circle
        cx="12"
        cy="12"
        r="7.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="12"
        cy="12"
        r="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="12"
        cy="12"
        r="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
    </svg>
  );
}
