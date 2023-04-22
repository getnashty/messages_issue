import classNames from "classnames";
import React, { ReactElement } from "react";

export function Chart({
  className,
  alt = "Chart",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__chart")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6.75C5.5 6.05964 6.05964 5.5 6.75 5.5H17.25C17.9404 5.5 18.5 6.05964 18.5 6.75V17.25C18.5 17.9404 17.9404 18.5 17.25 18.5H6.75C6.05964 18.5 5.5 17.9404 5.5 17.25V6.75ZM6.75 4C5.23122 4 4 5.23122 4 6.75V17.25C4 18.7688 5.23122 20 6.75 20H17.25C18.7688 20 20 18.7688 20 17.25V6.75C20 5.23122 18.7688 4 17.25 4H6.75ZM9.5 9.75C9.5 9.33579 9.16421 9 8.75 9C8.33579 9 8 9.33579 8 9.75V15.25C8 15.6642 8.33579 16 8.75 16C9.16421 16 9.5 15.6642 9.5 15.25V9.75ZM15.25 9C15.6642 9 16 9.33579 16 9.75V15.25C16 15.6642 15.6642 16 15.25 16C14.8358 16 14.5 15.6642 14.5 15.25V9.75C14.5 9.33579 14.8358 9 15.25 9ZM12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75V15.25C11.25 15.6642 11.5858 16 12 16C12.4142 16 12.75 15.6642 12.75 15.25V12.75Z"
      />
    </svg>
  );
}
