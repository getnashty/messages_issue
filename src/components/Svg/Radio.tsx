import classNames from "classnames";
import React, { ReactElement } from "react";

export function Radio({
  className,
  alt = "Radio",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__radio")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M4.75 10.75C4.75 9.64543 5.64543 8.75 6.75 8.75H17.25C18.3546 8.75 19.25 9.64543 19.25 10.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V10.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.25 14C12.25 15.2426 11.2426 16.25 10 16.25C8.75736 16.25 7.75 15.2426 7.75 14C7.75 12.7574 8.75736 11.75 10 11.75C11.2426 11.75 12.25 12.7574 12.25 14Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.75 12.75H16.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.75 8.75L15.25 4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.75 15.25H16.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
