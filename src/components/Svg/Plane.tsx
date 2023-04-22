import classNames from "classnames";
import React, { ReactElement } from "react";

export function Plane({
  className,
  alt = "Plane",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__plane")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M10 8.40685C10 7.34599 10.4214 6.32857 11.1716 5.57843L12 4.75L12.8284 5.57843C13.5786 6.32857 14 7.34599 14 8.40685V10.23L19.25 12.75V14.0773C19.25 14.6926 18.6996 15.1619 18.092 15.0647L14 14.41V17.5556L15.25 18.25V19.25H8.75V18.25L10 17.625V14.41L5.90799 15.0647C5.30041 15.1619 4.75 14.6926 4.75 14.0773V12.75L10 10.23V8.40685Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
