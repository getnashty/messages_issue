import classNames from "classnames";
import React, { ReactElement } from "react";

export function Calendar({
  className,
  alt = "Calendar",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__calendar")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V6H6.75C5.23122 6 4 7.23122 4 8.75V17.25C4 18.7688 5.23122 20 6.75 20H17.25C18.7688 20 20 18.7688 20 17.25V8.75C20 7.23122 18.7688 6 17.25 6H16.75V4.75C16.75 4.33579 16.4142 4 16 4C15.5858 4 15.25 4.33579 15.25 4.75V6H8.75V4.75ZM15.25 8.25V7.5H8.75V8.25C8.75 8.66421 8.41421 9 8 9C7.58579 9 7.25 8.66421 7.25 8.25V7.5H6.75C6.05964 7.5 5.5 8.05964 5.5 8.75V17.25C5.5 17.9404 6.05964 18.5 6.75 18.5H17.25C17.9404 18.5 18.5 17.9404 18.5 17.25V8.75C18.5 8.05964 17.9404 7.5 17.25 7.5H16.75V8.25C16.75 8.66421 16.4142 9 16 9C15.5858 9 15.25 8.66421 15.25 8.25ZM7.75 10C7.33579 10 7 10.3358 7 10.75C7 11.1642 7.33579 11.5 7.75 11.5H16.25C16.6642 11.5 17 11.1642 17 10.75C17 10.3358 16.6642 10 16.25 10H7.75Z"
      />
    </svg>
  );
}
