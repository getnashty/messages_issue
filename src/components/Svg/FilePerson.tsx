import classNames from "classnames";
import React, { ReactElement } from "react";

export function FilePerson({
  className,
  alt = "File Person",
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
        "Svg__filePerson"
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
        d="M12.75 4.75h-5a2 2 0 0 0-2 2v2.5m7-4.5v3.5a2 2 0 0 0 2 2h3.5m-5.5-5.5 5.5 5.5m-4.5 9h2.5a2 2 0 0 0 2-2v-7m-13.5 9s1.25-1.5 2.75-1.5 2.75 1.5 2.75 1.5m-2.75-4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
      ></path>
    </svg>
  );
}
