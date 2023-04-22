import classNames from "classnames";
import React, { ReactElement } from "react";

export function InputField({
  className,
  alt = "Input Field",
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
        "Svg__inputField"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M15.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H15.75M8.25 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H8.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 4.75H13.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 19.25H13.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 5V19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
