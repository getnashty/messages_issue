import classNames from "classnames";
import React, { ReactElement } from "react";

export function SubscriptionWallet({
  className,
  alt = "Subscription Wallet",
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
        "Svg__subscriptionWallet"
      )}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M12.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H6.75C5.64543 7.75 4.75 8.64543 4.75 9.75V10.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 7.25V6.75C17.25 5.64543 16.3546 4.75 15.25 4.75H8.75C7.64543 4.75 6.75 5.64543 6.75 6.75V7.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 12.5H8C6.20507 12.5 4.75 13.9551 4.75 15.75C4.75 17.5449 6.20507 19 8 19C8.64759 19 9.24326 18.8264 9.75 18.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14.75L10 12.75L8 10.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
