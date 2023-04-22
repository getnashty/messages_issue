import classNames from "classnames";
import React, { ReactElement } from "react";

export function Performance({
  className,
  alt = "Performance",
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
        "Svg__performance"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 18.5V4H5.5V17.2653L7.31362 16.0562L7.7602 13.3767C7.8283 12.9681 8.21472 12.6921 8.6233 12.7602L10.9628 13.1501L11.7789 10.294C11.8709 9.97198 12.1651 9.75 12.5 9.75H15.1893L17.4393 7.5H15.75C15.3358 7.5 15 7.16421 15 6.75C15 6.33579 15.3358 6 15.75 6H19.25C19.6642 6 20 6.33579 20 6.75V10.25C20 10.6642 19.6642 11 19.25 11C18.8358 11 18.5 10.6642 18.5 10.25V8.56066L16.0303 11.0303C15.8897 11.171 15.6989 11.25 15.5 11.25H13.0657L12.2211 14.206C12.1164 14.5728 11.753 14.8025 11.3767 14.7398L9.1165 14.3631L8.7398 16.6233C8.70571 16.8278 8.58851 17.009 8.41603 17.124L6.35208 18.5H20V20H5.5H4V18.5Z"
      />
    </svg>
  );
}
