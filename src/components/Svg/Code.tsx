import classNames from "classnames";
import React, { ReactElement } from "react";

export function Code({
  className,
  alt = "Code",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__Code")}
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
        d="m15.75 8.75 3.5 3.25-3.5 3.25m-7.5-6.5L4.75 12l3.5 3.25m5-9.5-2.5 12.5"
      ></path>
    </svg>
  );
}
