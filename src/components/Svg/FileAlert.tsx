import classNames from "classnames";
import React, { ReactElement } from "react";

export function FileAlert({
  className,
  alt = "File Alert",
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
        "Svg__fileAlert"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M12.75 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H12.25M12.75 4.75L18.25 10.25H14.75C13.6454 10.25 12.75 9.35457 12.75 8.25V4.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.75 18.5C16.3358 18.5 16 18.8358 16 19.25C16 19.6642 16.3358 20 16.75 20V18.5ZM16.76 20C17.1742 20 17.51 19.6642 17.51 19.25C17.51 18.8358 17.1742 18.5 16.76 18.5V20ZM16.75 20H16.76V18.5H16.75V20Z" />
      <path
        d="M16.75 13.75V16.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
