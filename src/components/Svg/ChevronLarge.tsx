import classNames from "classnames";
import React, { ReactElement } from "react";

export function ChevronLarge({
  className,
  alt = "ChevronLarge",
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
        "Svg__chevronLarge"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48528 3.00007L16.2635 10.7782L16.9706 11.4854L16.2635 12.1925L8.48528 19.9706L7.77817 19.2635L15.5563 11.4854L7.77817 3.70718L8.48528 3.00007Z"
      />
    </svg>
  );
}
