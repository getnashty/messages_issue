import classNames from "classnames";
import React, { ReactElement } from "react";

export function Spreadsheet({
  className,
  alt = "Spreedsheet",
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
        "Svg__spreadsheet"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6.75C5.5 6.05964 6.05964 5.5 6.75 5.5H17.25C17.9404 5.5 18.5 6.05964 18.5 6.75V7.5H14.75H9.25H5.5V6.75ZM14 9H10V11H14V9ZM15.5 11V9H18.5V11H15.5ZM14 12.5H10V15H14V12.5ZM15.5 15V12.5H18.5V15H15.5ZM14 16.5H10V18.5H14V16.5ZM15.5 18.5V16.5H18.5V17.25C18.5 17.9404 17.9404 18.5 17.25 18.5H15.5ZM14.75 20H17.25C18.7688 20 20 18.7688 20 17.25V6.75C20 5.23122 18.7688 4 17.25 4H6.75C5.23122 4 4 5.23122 4 6.75V17.25C4 18.7688 5.23122 20 6.75 20H9.25H14.75ZM5.5 9H8.5V11H5.5V9ZM5.5 12.5H8.5V15H5.5V12.5ZM5.5 16.5H8.5V18.5H6.75C6.05964 18.5 5.5 17.9404 5.5 17.25V16.5Z"
      />
    </svg>
  );
}
