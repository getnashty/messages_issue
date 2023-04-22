import classNames from "classnames";
import React, { ReactElement } from "react";

export function Locked({
  className,
  alt = "Locked",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__locked")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75008 10.5V10.3427C7.75008 8.78147 7.65615 7.04125 8.74654 5.9239C9.36837 5.2867 10.3746 4.75 12.0001 4.75C13.6256 4.75 14.6318 5.2867 15.2536 5.9239C16.344 7.04125 16.2501 8.78147 16.2501 10.3427V10.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
