import classNames from "classnames";
import React, { ReactElement } from "react";

export function CirclePlus2({
  className,
  alt = "Circle Plus2",
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
        "Svg__circlePlus2"
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
        d="M12.25 4.75H12A7.25 7.25 0 1 0 19.25 12v-.25m-2.25-7V7m0 0v2.25M17 7h2.25M17 7h-2.25"
      ></path>
    </svg>
  );
}
