import classNames from "classnames";
import React, { ReactElement } from "react";

export function Alert2({
  className,
  alt = "Alert2",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__alert2")}
      width="100%"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75V14.25ZM12.01 15.75C12.4242 15.75 12.76 15.4142 12.76 15C12.76 14.5858 12.4242 14.25 12.01 14.25V15.75ZM12 15.75H12.01V14.25H12V15.75Z"
        fill="currentColor"
      />
      <path
        d="M4.24353 13.2435C3.55675 12.5567 3.55675 11.4433 4.24353 10.7565L10.7721 4.22792C11.4589 3.54112 12.5724 3.54114 13.2591 4.22792L19.7877 10.7565C20.4745 11.4433 20.4745 12.5567 19.7877 13.2435L13.2591 19.7721C12.5724 20.4589 11.4589 20.4589 10.7721 19.7721L4.24353 13.2435Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.75V12.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
