import classNames from "classnames";
import React, { ReactElement } from "react";

export function Tickets({
  className,
  alt = "Tickers",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__tickers")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M8.25 10.6999L8.25 5.76197C8.25 5.28585 8.69772 4.8999 9.25 4.8999H10.5457C11.0094 4.8999 11.3981 5.183 11.6111 5.53809C12.1514 6.43912 12.2422 7.05507 13.5 7.05507C14.7578 7.05507 14.8486 6.43912 15.3889 5.53809C15.6019 5.183 15.9906 4.8999 16.4543 4.8999H17.75C18.3023 4.8999 18.75 5.28585 18.75 5.76197V16.5378C18.75 17.0139 18.3023 17.3999 17.75 17.3999H16.4543C16.242 17.3999 16.0455 17.3406 15.8743 17.2422"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 19.1499L5.25 11.6499C5.25 11.0976 5.69772 10.6499 6.25 10.6499H7.54566C8.00939 10.6499 8.39813 10.9783 8.61107 11.3902C9.15136 12.4354 9.2422 13.1499 10.5 13.1499C11.7578 13.1499 11.8486 12.4354 12.3889 11.3902C12.6019 10.9783 12.9906 10.6499 13.4543 10.6499H14.75C15.3023 10.6499 15.75 11.0976 15.75 11.6499V19.1499"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="7.5"
        y1="19.1499"
        x2="8"
        y2="19.1499"
      />
      <line
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="10.25"
        y1="19.1499"
        x2="10.75"
        y2="19.1499"
      />
      <line
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="13"
        y1="19.1499"
        x2="13.5"
        y2="19.1499"
      />
    </svg>
  );
}
