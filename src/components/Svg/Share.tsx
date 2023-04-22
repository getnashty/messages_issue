import classNames from "classnames";
import React, { ReactElement } from "react";

export function Share({
  className,
  alt = "Share",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__share")}
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
        d="M8.25 10.75h-.5a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-.5M12 14.25v-9.5m0 0-2.25 2.5M12 4.75l2.25 2.5"
      ></path>
    </svg>
  );
}
