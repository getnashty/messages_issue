import classNames from "classnames";
import React, { ReactElement } from "react";

export function OrderedList({
  className,
  alt = "Ordered List",
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
        "Svg__orderedList"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 6.25L6.25 4.75V10.25M6.25 10.25H4.75M6.25 10.25H7.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 18.25H5.6562C4.9255 18.25 4.5182 17.4359 4.9058 16.8574C4.9535 16.7861 5.0211 16.7311 5.0925 16.6836L6.8924 15.486C6.9638 15.4384 7.0312 15.3832 7.0799 15.3126C7.5253 14.6678 7.0713 13.75 6.2526 13.75H4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 6H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 12H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 18H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
