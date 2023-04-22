import classNames from "classnames";
import React, { ReactElement } from "react";

export function Chevron({
  className,
  alt = "Chevron",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__chevron")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.20584 10.1637C8.52961 9.86308 9.03579 9.88183 9.33643 10.2056L12.0002 13.0743L14.664 10.2056C14.9646 9.88183 15.4708 9.86308 15.7946 10.1637C16.1183 10.4644 16.1371 10.9705 15.8364 11.2943L12.5864 14.7943C12.4351 14.9573 12.2227 15.05 12.0002 15.05C11.7777 15.05 11.5653 14.9573 11.414 14.7943L8.16396 11.2943C7.86332 10.9705 7.88207 10.4644 8.20584 10.1637Z"
      />
    </svg>
  );
}
