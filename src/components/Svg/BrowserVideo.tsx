import classNames from "classnames";
import React, { ReactElement } from "react";

export function BrowserVideo({
  className,
  alt = "BrowserVideo",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "fill-current",
        "Svg",
        "Svg__browserVideo"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 5.5C6.05964 5.5 5.5 6.05964 5.5 6.75V7.5H18.5V6.75C18.5 6.05964 17.9404 5.5 17.25 5.5H6.75ZM18.5 9H5.5V17.25C5.5 17.9404 6.05964 18.5 6.75 18.5H17.25C17.9404 18.5 18.5 17.9404 18.5 17.25V9ZM4 6.75C4 5.23122 5.23122 4 6.75 4H17.25C18.7688 4 20 5.23122 20 6.75V17.25C20 18.7688 18.7688 20 17.25 20H6.75C5.23122 20 4 18.7688 4 17.25V6.75ZM14.3484 13.9305C14.676 13.7369 14.676 13.2631 14.3484 13.0695L10.7544 10.9458C10.4211 10.7488 10 10.9891 10 11.3762V15.6238C10 16.0109 10.4211 16.2512 10.7544 16.0542L14.3484 13.9305Z"
      />
    </svg>
  );
}
