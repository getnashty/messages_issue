import classNames from "classnames";
import React, { ReactElement } from "react";

export function Search({
  className,
  alt = "Search",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__search")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M17.75 17.75L14.6466 14.6466L17.75 17.75ZM5.75 10.9224C5.75 8.06577 8.06577 5.75 10.9224 5.75C13.7791 5.75 16.0948 8.06577 16.0948 10.9224C16.0948 13.7791 13.7791 16.0948 10.9224 16.0948C8.06577 16.0948 5.75 13.7791 5.75 10.9224Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
