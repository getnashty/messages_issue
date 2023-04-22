import classNames from "classnames";
import React, { ReactElement } from "react";

export function Bookmark({
  className,
  alt = "Bookmark",
  fill = false,
}: {
  className?: string;
  alt?: string;
  fill?: boolean;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        {
          "fill-current": fill,
          "stroke-current": !fill,
        },
        "Svg",
        "Svg__bookmark"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ? undefined : "none"}
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
      ></path>
    </svg>
  );
}
