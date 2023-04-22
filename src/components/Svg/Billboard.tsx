import classNames from "classnames";
import React, { ReactElement } from "react";

export function Billboard({
  className,
  alt = "Billboard",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__billboard")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 5C7.22386 5 7 5.22386 7 5.5V6H6.75C5.23122 6 4 7.23122 4 8.75V14.25C4 15.7688 5.23122 17 6.75 17H7V18.5C7 18.7761 7.22386 19 7.5 19H8.5C8.77614 19 9 18.7761 9 18.5V17H15V18.5C15 18.7761 15.2239 19 15.5 19H16.5C16.7761 19 17 18.7761 17 18.5V17H17.25C18.7688 17 20 15.7688 20 14.25V8.75C20 7.23122 18.7688 6 17.25 6H17V5.5C17 5.22386 16.7761 5 16.5 5H15.5C15.2239 5 15 5.22386 15 5.5V6H9V5.5C9 5.22386 8.77614 5 8.5 5H7.5ZM5.5 8.75C5.5 8.05964 6.05964 7.5 6.75 7.5H17.25C17.9404 7.5 18.5 8.05964 18.5 8.75V14.25C18.5 14.9404 17.9404 15.5 17.25 15.5H6.75C6.05964 15.5 5.5 14.9404 5.5 14.25V8.75Z"
      />
    </svg>
  );
}
