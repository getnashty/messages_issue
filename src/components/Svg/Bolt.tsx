import classNames from "classnames";
import React, { ReactElement } from "react";

export function Bolt({
  className,
  alt = "Bolt",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__bolt")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M10.75 13.25H6.75L13.25 4.75V10.75H17.25L10.75 19.25V13.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
