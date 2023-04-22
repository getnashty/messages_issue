import classNames from "classnames";
import React, { ReactElement } from "react";

export function Folder({
  className,
  alt = "Folder",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__folder")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 4C5.23122 4 4 5.23122 4 6.75V7.75V11V17.25C4 18.7688 5.23122 20 6.75 20H17.25C18.7688 20 20 18.7688 20 17.25V9.75C20 8.23122 18.7688 7 17.25 7H14.0816L13.227 5.43322C12.7451 4.54965 11.819 4 10.8127 4H6.75ZM12.3729 7L11.9101 6.15145L11.91 6.15138C11.6911 5.74989 11.2702 5.5 10.8127 5.5H6.75C6.05964 5.5 5.5 6.05964 5.5 6.75V7H12.3729ZM5.5 8.5V11V17.25C5.5 17.9404 6.05964 18.5 6.75 18.5H17.25C17.9404 18.5 18.5 17.9404 18.5 17.25V9.75C18.5 9.05964 17.9404 8.5 17.25 8.5H5.5Z"
      />
    </svg>
  );
}
