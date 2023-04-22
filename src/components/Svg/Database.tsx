import classNames from "classnames";
import React, { ReactElement } from "react";

export function Database({
  className,
  alt = "Database",
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
        "Svg__database"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M19.25 7C19.25 8.10457 15.866 9.25 12 9.25C8.13401 9.25 4.75 8.10457 4.75 7C4.75 5.89543 8.13401 4.75 12 4.75C15.866 4.75 19.25 5.89543 19.25 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.25 12C19.25 13.1046 15.866 14.25 12 14.25C8.13401 14.25 4.75 13.1046 4.75 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.25 7V17C19.25 18.1046 15.866 19.25 12 19.25C8.13401 19.25 4.75 18.1046 4.75 17V7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
