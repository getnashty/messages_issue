import classNames from "classnames";
import React, { ReactElement } from "react";

export function Pencil({
  className,
  alt = "Pencil",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__pencil")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 19.25L9 18.25L18.9491 8.30083C19.3397 7.9103 19.3397 7.27714 18.9491 6.88661L17.1134 5.05083C16.7228 4.6603 16.0897 4.6603 15.6991 5.05083L5.75 15L4.75 19.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.0234 7.03906L17.0234 10.0391"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
