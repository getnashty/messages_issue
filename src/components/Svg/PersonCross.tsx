import classNames from "classnames";
import React, { ReactElement } from "react";

export function PersonCross({
  className,
  alt = "PersonCross",
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
        "Svg__personCross"
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
        strokeWidth="1.5"
        d="M15.75 4.75 17.5 6.5m0 0 1.75 1.75M17.5 6.5l1.75-1.75M17.5 6.5l-1.75 1.75M11.25 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-6.5 7.25c0-2.75.85-4.5 4.25-4.5s4.25 1.75 4.25 4.5h-2v3a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2v-3h-2Z"
      ></path>
    </svg>
  );
}
