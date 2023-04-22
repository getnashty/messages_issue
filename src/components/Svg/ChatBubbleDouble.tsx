import classNames from "classnames";
import React, { ReactElement } from "react";

export function ChatBubbleDouble({
  className,
  alt = "ChatBubbleDouble",
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
        "Svg__chatBubble"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M9.99151 14.5101C12.7865 14.5101 15.233 12.9956 15.233 9.63003C15.233 6.26449 12.7865 4.75 9.99151 4.75C7.19653 4.75 4.75 6.26449 4.75 9.63003C4.75 10.8662 5.08005 11.8526 5.6362 12.606C5.83794 12.8793 5.79543 13.5163 5.63421 13.8153C5.24836 14.5309 5.97738 15.315 6.76977 15.1333C7.3629 14.9974 7.98504 14.8134 8.5295 14.5666C8.72883 14.4762 8.94893 14.4398 9.16641 14.4644C9.43657 14.4949 9.7123 14.5101 9.99151 14.5101Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2342 10.2888C18.9752 11.108 19.4097 12.2466 19.358 13.7271C19.3149 14.9625 18.9506 15.9368 18.3685 16.6703C18.1573 16.9364 18.1776 17.5745 18.3283 17.8789C18.6889 18.6075 17.933 19.3657 17.1474 19.1565C16.5594 19 15.944 18.7944 15.4085 18.5287C15.2125 18.4314 14.9938 18.3874 14.7756 18.4043C14.5045 18.4254 14.2284 18.431 13.9494 18.4212C12.6386 18.3755 11.4162 17.9991 10.5 17.2649"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
