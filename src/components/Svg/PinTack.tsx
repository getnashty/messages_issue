import classNames from "classnames";
import React, { ReactElement } from "react";

export function PinTack({
  className,
  alt = "Pin Tack",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__pinTack")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 7.75L7.75 4.75H16.25L15.25 7.75V10C18.25 11 18.25 14.25 18.25 14.25H5.75C5.75 14.25 5.75 11 8.75 10V7.75Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 14.5V19.25"
      ></path>
    </svg>
  );
}
