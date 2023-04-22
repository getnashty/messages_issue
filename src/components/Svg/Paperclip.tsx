import classNames from "classnames";
import React, { ReactElement } from "react";

export function Paperclip({
  className,
  alt = "Paperclip",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "stroke-current",
        "Svg",
        "Svg__paperclip"
      )}
      width="100%"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M19.4496 11.9511L13.3335 17.8601C11.4156 19.7131 8.30597 19.7131 6.38804 17.8601C4.46306 16.0003 4.47116 12.9826 6.4061 11.1325L12.0503 5.70078C13.3626 4.43293 15.4902 4.43292 16.8025 5.70075C18.1196 6.97324 18.114 9.038 16.7901 10.3039L11.0824 15.7858C10.374 16.4702 9.22538 16.4702 8.51694 15.7858C7.80849 15.1013 7.80849 13.9916 8.51695 13.3071L13.2435 8.74069"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
