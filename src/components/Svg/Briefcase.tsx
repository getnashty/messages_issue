import classNames from "classnames";
import React, { ReactElement } from "react";

export function Briefcase({
  className,
  alt = "Briefcase",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__briefcase")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 6.75012C9.5 6.05977 10.0596 5.50012 10.75 5.50012H13.25C13.9404 5.50012 14.5 6.05976 14.5 6.75012V7.00012H9.5V6.75012ZM8 7.00012V6.75012C8 5.23134 9.23122 4.00012 10.75 4.00012H13.25C14.7688 4.00012 16 5.23135 16 6.75012V7.00012H17.25C18.7688 7.00012 20 8.23135 20 9.75012V17.2501C20 18.7689 18.7688 20.0001 17.25 20.0001H6.75C5.23122 20.0001 4 18.7689 4 17.2501V9.75012C4 8.23134 5.23122 7.00012 6.75 7.00012H8ZM14.5 8.50012H9.5V18.5001H14.5V8.50012ZM16 18.5001V8.50012H17.25C17.9404 8.50012 18.5 9.05976 18.5 9.75012V17.2501C18.5 17.9405 17.9404 18.5001 17.25 18.5001H16ZM8 18.5001H6.75C6.05964 18.5001 5.5 17.9405 5.5 17.2501V9.75012C5.5 9.05977 6.05964 8.50012 6.75 8.50012H8V18.5001Z"
      />
    </svg>
  );
}
