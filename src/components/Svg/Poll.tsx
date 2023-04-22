import classNames from "classnames";
import React, { ReactElement } from "react";

export function Poll({
  className,
  alt = "Poll",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__poll")}
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
        d="M12.75 7h6.5m-6.5 10h6.5M7 9.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm0 10a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
      ></path>
    </svg>
  );
}
