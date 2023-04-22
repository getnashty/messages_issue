import classNames from "classnames";
import React, { ReactElement } from "react";

export function CreditCard({
  className,
  alt = "CreditCard",
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
        "Svg__creditCard"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 7.75C5.5 7.05964 6.05964 6.5 6.75 6.5H17.25C17.9404 6.5 18.5 7.05964 18.5 7.75V9.5H5.5V7.75ZM5.5 11V16.25C5.5 16.9404 6.05964 17.5 6.75 17.5H17.25C17.9404 17.5 18.5 16.9404 18.5 16.25V11H5.5ZM6.75 5C5.23122 5 4 6.23122 4 7.75V16.25C4 17.7688 5.23122 19 6.75 19H17.25C18.7688 19 20 17.7688 20 16.25V7.75C20 6.23122 18.7688 5 17.25 5H6.75ZM7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H10.25C10.6642 13.5 11 13.8358 11 14.25C11 14.6642 10.6642 15 10.25 15H7.75C7.33579 15 7 14.6642 7 14.25ZM15.75 13.5C15.3358 13.5 15 13.8358 15 14.25C15 14.6642 15.3358 15 15.75 15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H15.75Z"
      />
    </svg>
  );
}
