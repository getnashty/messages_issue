import classNames from "classnames";
import React, { ReactElement } from "react";

export function Notebook({
  className,
  alt = "Notebook",
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
        "Svg__notebook"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M16.2502 18.25H7.75C6.64543 18.25 5.75 17.3546 5.75 16.25V6.75C5.75 5.64543 6.64543 4.75 7.75 4.75H16.2502C17.3548 4.75 18.2502 5.64543 18.2502 6.75V16.25C18.2502 17.3546 17.3548 18.25 16.2502 18.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 8.75L13.75 8.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 11.75L13.75 11.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 4.75V19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
