import classNames from "classnames";
import React, { ReactElement } from "react";

export function ChartIncrease({
  className,
  alt = "Chart Increase",
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
        "Svg__chartIncrease"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M7.75 16.25C14.1389 16.25 16 11.6875 16 8.5V5.75M16 5.75L13.75 8.25M16 5.75L18.25 8.25M4.75 4.75V19.25H19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
