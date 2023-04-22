import classNames from "classnames";
import React, { ReactElement } from "react";

export function Car({
  className,
  alt = "Car",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__Car")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M18.2502 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V12.75C4.75 11.6454 5.64543 10.75 6.75 10.75H17.2502C18.3548 10.75 19.2502 11.6454 19.2502 12.75V16.25C19.2502 16.8023 18.8025 17.25 18.2502 17.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.5 14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14C7.5 13.7239 7.72386 13.5 8 13.5C8.27614 13.5 8.5 13.7239 8.5 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.5 14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14C15.5 13.7239 15.7239 13.5 16 13.5C16.2761 13.5 16.5 13.7239 16.5 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.2502 10.75H5.75L6.47147 6.4212C6.6322 5.45683 7.46657 4.75 8.44425 4.75H15.556C16.5337 4.75 17.368 5.45683 17.5288 6.4212L18.2502 10.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.75 17.75V19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.25 17.75V19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
