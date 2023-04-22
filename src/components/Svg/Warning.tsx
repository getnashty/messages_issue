import classNames from "classnames";
import React, { ReactElement } from "react";

export function Warning({
  className,
  alt = "Warning",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__warning")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1205 6.19308C12.6597 5.27305 11.3466 5.27285 10.8855 6.19268L5.62247 16.6897L4.95202 16.3536L5.62247 16.6897C5.20573 17.5209 5.81006 18.5 6.73989 18.5H17.2611C18.1907 18.5 18.795 17.5213 18.3787 16.6902L13.1206 6.19309L13.1205 6.19308ZM9.54457 5.52038C10.5592 3.49668 13.4478 3.49725 14.4617 5.52127L14.4617 5.52128L19.7199 16.0183C20.6358 17.8468 19.3063 20 17.2611 20H6.73989C4.69427 20 3.36472 17.846 4.28157 16.0174L9.54457 5.52038ZM12 9C12.5523 9 13 9.44771 13 10V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V10C11 9.44771 11.4477 9 12 9ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
      />
    </svg>
  );
}
