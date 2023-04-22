import classNames from "classnames";
import React, { ReactElement } from "react";

export function ListArrow({
  className,
  alt = "ListArrow",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__listArrow")}
      width="100%"
      viewBox="0 0 10 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path d="M5.88462 6.58077C5.43419 7.13974 4.56581 7.13974 4.11538 6.58077L0.242488 1.77465C-0.337489 1.05491 0.188361 -3.58309e-07 1.12711 -3.58309e-07L8.87289 -3.58309e-07C9.81164 -3.58309e-07 10.3375 1.05492 9.75751 1.77465L5.88462 6.58077Z" />
    </svg>
  );
}
