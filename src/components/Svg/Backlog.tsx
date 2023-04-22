import classNames from "classnames";
import React, { ReactElement } from "react";

export function Backlog({
  className,
  alt = "Backlog",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__backlog")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M6.5 6.75C6.75 5.5 7.39543 4.75 8.5 4.75H15.5C16.6046 4.75 17.25 5.5 17.5 6.75L19.25 17.25C19.5 18.5 18.3546 19.25 17.25 19.25H6.75004C5.64547 19.25 4.50001 18.5 4.75004 17.25L6.5 6.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12.75L8.57025 11.312C8.53295 11.0136 8.76564 10.75 9.06639 10.75H14.9336C15.2344 10.75 15.4671 11.0136 15.4297 11.312L15.25 12.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.75L9.40532 8.37127C9.32642 8.05569 9.5651 7.75 9.89039 7.75H14.1096C14.4349 7.75 14.6736 8.05569 14.5947 8.37127L14.5 8.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16.75L7.50334 15.4256C7.38076 15.0987 7.6224 14.75 7.9715 14.75H16.0285C16.3776 14.75 16.6192 15.0987 16.4967 15.4256L16 16.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
