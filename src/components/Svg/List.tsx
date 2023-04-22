import classNames from "classnames";
import React, { ReactElement } from "react";

export function List({
  className,
  alt = "List",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__list")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 6H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10C6.5 10.2761 6.27614 10.5 6 10.5C5.72386 10.5 5.5 10.2761 5.5 10C5.5 9.72386 5.72386 9.5 6 9.5C6.27614 9.5 6.5 9.72386 6.5 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 10H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 14C6.5 14.2761 6.27614 14.5 6 14.5C5.72386 14.5 5.5 14.2761 5.5 14C5.5 13.7239 5.72386 13.5 6 13.5C6.27614 13.5 6.5 13.7239 6.5 14Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 14H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 18H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
