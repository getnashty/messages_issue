import classNames from "classnames";
import React, { ReactElement } from "react";

export function FileCheck({
  className,
  alt = "FileCheck",
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
        "Svg__fileCheck"
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
        d="M12.75 4.75h-5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h3.5m1.5-14.5v3.5a2 2 0 0 0 2 2h3.5m-5.5-5.5 5.5 5.5m0 0v1m1 3.5s-1.929 2.09-2.893 4.5l-1.607-1.929"
      ></path>
    </svg>
  );
}
