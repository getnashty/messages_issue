import classNames from "classnames";
import React, { ReactElement } from "react";

export function QuestionMark2({
  className,
  alt = "Question Mark2",
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
        "Svg__questionMark2"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.249 7a4.25 4.25 0 1 1 5.678 5.789C12.943 13.29 12 14.145 12 15.25M12 19v.25"
      ></path>
    </svg>
  );
}
