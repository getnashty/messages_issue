import classNames from "classnames";
import React, { ReactElement } from "react";

export function Room({
  className,
  alt = "Room",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__room")}
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M6.54656 6.56525L8.20715 5.73495C9.40332 5.13686 10.7826 5.01782 12.0636 5.4021L16.9339 6.86319C18.3086 7.2756 19.25 8.5409 19.25 9.97612V12V14.5279C19.25 15.7589 18.5545 16.8842 17.4534 17.4348L15.7928 18.2651C14.5967 18.8631 13.2174 18.9822 11.9364 18.5979L7.06612 17.1368C5.69142 16.7244 4.75 15.4591 4.75 14.0239V12V9.47214C4.75 8.24113 5.44551 7.11577 6.54656 6.56525Z"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 15.5L9.65546 13.6531C9.87752 13.5544 10.1279 13.54 10.3599 13.6125L18 16"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 6V13" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M15.4102 10.5345L15.41 14.8654C15.41 14.9325 15.3453 14.9805 15.2812 14.9612L13.8212 14.5214C13.7789 14.5087 13.75 14.4698 13.75 14.4257V9.76433C13.75 9.75737 13.7569 9.75254 13.7634 9.75494L15.2464 10.2998C15.3448 10.336 15.4102 10.4297 15.4102 10.5345Z"
        strokeWidth="1.8"
      />
    </svg>
  );
}
