import classNames from "classnames";
import React, { ReactElement } from "react";

export function MeterFull({
  className,
  alt = "Meter Full",
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
        "Svg__meterFull"
      )}
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M5.75 8.75C5.75 7.64543 6.64543 6.75 7.75 6.75H16.25C17.3546 6.75 18.25 7.64543 18.25 8.75V15.25C18.25 16.3546 17.3546 17.25 16.25 17.25H7.75C6.64543 17.25 5.75 16.3546 5.75 15.25V8.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 9.75V14.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.75V14.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 9.75V14.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
