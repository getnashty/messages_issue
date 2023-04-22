import classNames from "classnames";
import React, { ReactElement } from "react";

export function ReplyArrow({
  className,
  alt = "Reply Arrow",
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
        "stroke-current",
        "Svg",
        "Svg__replyArrow",
        {
          "fill-current": fill,
        }
      )}
      fill={fill ? undefined : "none"}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M4.75 11L11.25 4.75V9.25C19.25 9.25 19.25 15 19.25 19.25C17 13 11.25 12.75 11.25 12.75V17.25L4.75 11Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
