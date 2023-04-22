import React from "react";
import "./styles.css";
import classNames from "classnames";

export function UnreadDot({
  border = "white",
  className,
}: {
  border?: string;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center",
        "absolute h-3.5 w-3.5 z-10 cursor-pointer",
        "hover:text-pink-600 active:scale-[1.2] transition-all",
        {
          "text-white": border === "white",
          "text-pink-600": border === "pink",
        },
        className
      )}
    >
      <div className="w-2.5 h-2.5 rounded-md border-2 border-current shadow-md bg-pink-600"></div>
    </div>
  );
}
