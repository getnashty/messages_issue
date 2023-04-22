import classNames from "classnames";
import React, { ReactElement } from "react";

export function Logout({
  className,
  alt = "Logout",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__logout")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 4C5.23122 4 4 5.23122 4 6.75V17.25C4 18.7688 5.23122 20 6.75 20H15.25C15.6642 20 16 19.6642 16 19.25C16 18.8358 15.6642 18.5 15.25 18.5H6.75C6.05964 18.5 5.5 17.9404 5.5 17.25V6.75C5.5 6.05964 6.05964 5.5 6.75 5.5H15.25C15.6642 5.5 16 5.16421 16 4.75C16 4.33579 15.6642 4 15.25 4H6.75ZM15.2004 8.23966C15.4823 7.93613 15.9568 7.91855 16.2603 8.20041L19.7603 11.4504C19.9132 11.5923 20 11.7914 20 12C20 12.2086 19.9132 12.4077 19.7603 12.5496L16.2603 15.7996C15.9568 16.0814 15.4823 16.0639 15.2004 15.7603C14.9186 15.4568 14.9361 14.9823 15.2397 14.7004L17.3401 12.75H10.75C10.3358 12.75 10 12.4142 10 12C10 11.5858 10.3358 11.25 10.75 11.25H17.3401L15.2397 9.29959C14.9361 9.01774 14.9186 8.54319 15.2004 8.23966Z"
      />
    </svg>
  );
}
