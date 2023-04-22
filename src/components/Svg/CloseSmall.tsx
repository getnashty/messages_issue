import classNames from "classnames";
import React, { ReactElement } from "react";

export function CloseSmall({
  className,
  alt = "Close Small",
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
        "Svg__closeSmall"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.20938 9.26983C7.92228 8.97125 7.93159 8.49647 8.23017 8.20938C8.52875 7.92228 9.00353 7.93159 9.29063 8.23017L11.875 10.9179L14.4594 8.23017C14.7465 7.93159 15.2213 7.92228 15.5198 8.20938C15.8184 8.49647 15.8277 8.97125 15.5406 9.26983L12.9155 12L15.5406 14.7302C15.8277 15.0287 15.8184 15.5035 15.5198 15.7906C15.2213 16.0777 14.7465 16.0684 14.4594 15.7698L11.875 13.0821L9.29063 15.7698C9.00353 16.0684 8.52875 16.0777 8.23017 15.7906C7.93159 15.5035 7.92228 15.0287 8.20938 14.7302L10.8345 12L8.20938 9.26983Z"
      />
    </svg>
  );
}
