import classNames from "classnames";
import React, { ReactElement } from "react";

export function MapPin({
  className,
  alt = "Map Pin",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__MapPin")}
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
        d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
      ></path>
      <circle
        cx="12"
        cy="11"
        r="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
    </svg>
  );
}
