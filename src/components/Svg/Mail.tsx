import classNames from "classnames";
import React, { ReactElement } from "react";

export function Mail({
  className,
  alt = "Mail",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__mail")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.63759 6.50499C6.67462 6.50169 6.71211 6.5 6.75 6.5H17.25C17.2879 6.5 17.3254 6.50169 17.3624 6.50499L12 11.2487L6.63759 6.50499ZM5.52111 7.52002C5.50725 7.59456 5.5 7.67143 5.5 7.75V16.25C5.5 16.9404 6.05964 17.5 6.75 17.5H17.25C17.9404 17.5 18.5 16.9404 18.5 16.25V7.75C18.5 7.67143 18.4928 7.59456 18.4789 7.52001L12.4969 12.8117C12.2132 13.0628 11.7868 13.0628 11.5031 12.8117L5.52111 7.52002ZM6.75 5C5.23122 5 4 6.23122 4 7.75V16.25C4 17.7688 5.23122 19 6.75 19H17.25C18.7688 19 20 17.7688 20 16.25V7.75C20 6.23122 18.7688 5 17.25 5H6.75Z"
      />
    </svg>
  );
}
