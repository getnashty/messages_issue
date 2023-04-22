import classNames from "classnames";
import React, { ReactElement } from "react";

export function Plus({
  className,
  alt = "Plus",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__plus")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 5.75C12.75 5.33579 12.4142 5 12 5C11.5858 5 11.25 5.33579 11.25 5.75V11.25H5.75C5.33579 11.25 5 11.5858 5 12C5 12.4142 5.33579 12.75 5.75 12.75H11.25V18.25C11.25 18.6642 11.5858 19 12 19C12.4142 19 12.75 18.6642 12.75 18.25V12.75H18.25C18.6642 12.75 19 12.4142 19 12C19 11.5858 18.6642 11.25 18.25 11.25H12.75V5.75Z"
      />
    </svg>
  );
}
