import classNames from "classnames";
import React, { ReactElement } from "react";

export function ChatDocument({
  className,
  alt = "Chat Document",
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
        "Svg__chatDocument"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M10.25 7.25V6.75C10.25 5.65 11.15 4.75001 12.25 4.75H19.25C20.35 4.75 21.25 5.65 21.25 6.75V15.75C21.25 16.8546 20.3546 17.75 19.25 17.75H15.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 11.75H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.75H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 14.75H18.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99151 19.5101C10.7865 19.5101 13.233 17.9956 13.233 14.63C13.233 11.2645 10.7865 9.75 7.99151 9.75C5.19653 9.75 2.75 11.2645 2.75 14.63C2.75 15.8662 3.08005 16.8526 3.6362 17.606C3.83794 17.8793 3.79543 18.5163 3.63421 18.8153C3.24836 19.5309 3.97738 20.315 4.76977 20.1333C5.3629 19.9974 5.98504 19.8134 6.5295 19.5666C6.72883 19.4762 6.94893 19.4398 7.16641 19.4644C7.43657 19.4949 7.7123 19.5101 7.99151 19.5101Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
