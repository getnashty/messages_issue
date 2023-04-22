import classNames from "classnames";
import React, { ReactElement } from "react";

export function Timer({
  className,
  alt = "Timer",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__timer")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M18.25 13C18.25 16.4518 15.4518 19.25 12 19.25C8.54822 19.25 5.75 16.4518 5.75 13C5.75 9.54822 8.54822 6.75 12 6.75C15.4518 6.75 18.25 9.54822 18.25 13Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.5 8.5L17.25 7.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 6.5V4.75M12 4.75H9.75M12 4.75H14.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 9.75V13.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
