import classNames from "classnames";
import React, { ReactElement } from "react";

export function Broadcast({
  className,
  alt = "Broadcast",
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
        "Svg__Broadcast"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M12.5 10C12.5 10.2761 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.72386 12.5 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.24993 13.2499C7.21088 11.5624 7.33603 8.49988 9.25002 6.74988"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.7673 13.25C16.8063 11.5625 16.6812 8.5 14.7672 6.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.25 12.75H11.75L9.75 19.25H14.25L12.25 12.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.24999 15.2501C3.91407 11.9141 3.92971 8.07812 7.24994 4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.7539 15.2501C20.0898 11.9141 20.0742 8.07812 16.754 4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
