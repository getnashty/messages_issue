import classNames from "classnames";
import React, { ReactElement } from "react";

export function Shipment({
  className,
  alt = "Shipment",
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
        "Svg__shipment"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M17.2502 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.63478C4.75 9.22174 4.87788 8.81884 5.11606 8.48141L7.75 4.75H16.2502L18.8842 8.48141C19.1224 8.81884 19.2502 9.22174 19.2502 9.63478V17.25C19.2502 18.3546 18.3548 19.25 17.2502 19.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5 9.25H19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 5V9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
