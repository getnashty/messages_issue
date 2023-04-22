import classNames from "classnames";
import React, { ReactElement } from "react";

export function FlowChart({
  className,
  alt = "Flow Chart",
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
        "Svg__flowChart"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M16.75 15V14C16.75 12.8954 15.8546 12 14.75 12H9.25C8.14543 12 7.25 12.8954 7.25 14V15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4.75"
        y="15.25"
        width="5.5"
        height="4"
        rx="1"
        strokeWidth="1.5"
      />
      <rect x="8.75" y="4.75" width="6.5" height="4" rx="1" strokeWidth="1.5" />
      <rect
        x="13.75"
        y="15.25"
        width="5.5"
        height="4"
        rx="1"
        strokeWidth="1.5"
      />
      <line x1="12" y1="12" x2="12" y2="9" strokeWidth="2" />
    </svg>
  );
}
