import classNames from "classnames";
import React, { ReactElement } from "react";

export function Sidebar({
  className,
  alt = "Sidebar",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__sidebar")}
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
        d="M12.75 4.75h4.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-4.5m-8-2V6.75a2 2 0 0 1 2-2h2.5v14.5h-2.5a2 2 0 0 1-2-2Z"
      ></path>
    </svg>
  );
}
