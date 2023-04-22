import classNames from "classnames";
import React, { ReactElement } from "react";

export function Information({
  className,
  alt = "Information",
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
        "Svg__information"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 13V15"
      ></path>
      <circle cx="12" cy="9" r="1" stroke="none" fill="currentColor"></circle>
      <circle
        cx="12"
        cy="12"
        r="7.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
    </svg>
  );
}
