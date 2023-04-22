import classNames from "classnames";
import React, { ReactElement } from "react";

export function TriangleSolid({
  className,
  alt = "Triangle Solid",
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
        "Svg__triangleSolid"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4457 5.52145C13.4332 3.49704 10.5478 3.49667 9.53473 5.52086L4.29826 16.0179C3.38432 17.8444 4.70874 19.9999 6.75357 19.9999H17.2543C19.2988 19.9999 20.6234 17.8454 19.7102 16.0188L14.4457 5.52145Z"
      />
    </svg>
  );
}
