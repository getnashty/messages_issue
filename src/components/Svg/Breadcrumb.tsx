import classNames from "classnames";
import React, { ReactElement } from "react";

export function Breadcrumb({
  className,
  alt = "Breadcrumb",
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
        "Svg__breadcrumb"
      )}
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path d="M10 15L13.5 12L10 9" />
    </svg>
  );
}
