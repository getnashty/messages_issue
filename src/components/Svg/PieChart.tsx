import classNames from "classnames";
import React, { ReactElement } from "react";

export function PieChart({
  className,
  alt = "Pie Chart",
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
        "Svg__pieChart"
      )}
      width="100%"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.75 5V10.25C11.75 11.3546 12.6454 12.25 13.75 12.25H19"
      ></path>
    </svg>
  );
}
