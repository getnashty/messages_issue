import classNames from "classnames";
import React, { ReactElement } from "react";

export function SquarePlus({
  className,
  alt = "Square Plus",
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
        "Svg__squarePlus"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M17.2502 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.2502C18.3548 4.75 19.2502 5.64543 19.2502 6.75V17.25C19.2502 18.3546 18.3548 19.25 17.2502 19.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 8.75V15.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.25 12L8.75 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
