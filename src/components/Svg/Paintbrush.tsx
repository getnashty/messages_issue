import classNames from "classnames";
import React, { ReactElement } from "react";

export function Paintbrush({
  className,
  alt = "Paintbrush",
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
        "Svg__paintbrush"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M12.7888 8.7361L16.1972 5.32785C16.9167 4.60838 18.0539 4.57914 18.7374 5.26256C19.4208 5.94598 19.3915 7.08325 18.6721 7.80273L15.2374 11.2374"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.6665 11.6665L12.3335 8.33347C11.5847 7.58468 10.382 7.54934 9.59053 8.25287L8.75 9L15 15.25L15.7471 14.4095C16.4507 13.618 16.4153 12.4153 15.6665 11.6665Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9 10L4.75 12.75L11.25 19.25L14 15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7 15L8.25 13.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
