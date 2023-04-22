import classNames from "classnames";
import React, { ReactElement } from "react";

export function AtSign({
  className,
  alt = "At Sign",
  strokeWidth = 1.5,
}: {
  className?: string;
  alt?: string;
  strokeWidth?: number;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__atSign")}
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <circle
        cx="12"
        cy="12"
        r="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      ></circle>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"
      ></path>
    </svg>
  );
}
