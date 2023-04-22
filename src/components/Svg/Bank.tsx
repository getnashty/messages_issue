import classNames from "classnames";
import React, { ReactElement } from "react";

export function Bank({
  className,
  alt = "Bank",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__bank")}
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
        d="M18.25 11.5V19.25M5.75 19.25V11.5M9.75 19.25V11.5M14.25 19.25V11.5"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 4.75L19.25 11.25H4.75L12 4.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 19.25H19.25"
      ></path>
    </svg>
  );
}
