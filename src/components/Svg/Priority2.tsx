import classNames from "classnames";
import React, { ReactElement } from "react";

export function Priority2({
  className,
  alt = "Priority2",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__priority2")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <circle cx="12" cy="12" r="8" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}
