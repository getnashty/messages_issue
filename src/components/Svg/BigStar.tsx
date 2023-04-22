import classNames from "classnames";
import React, { ReactElement } from "react";

export function BigStar({
  className,
  alt = "BigStar",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__bigStar")}
      width="100%"
      viewBox="0 0 110 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        opacity="0.0305716"
        d="M55 85.9174L82.4869 102.176C86.8237 104.741 92.1729 100.929 91.0223 96.0988L83.726 65.4515L108.016 44.8284C111.843 41.581 109.797 35.4168 104.752 34.9993L72.7788 32.3428L60.2717 3.41956C58.2969 -1.13985 51.7031 -1.13985 49.7283 3.41956L37.2212 32.3428L5.24812 34.9993C0.203229 35.4168 -1.84349 41.581 1.98443 44.8284L26.274 65.4515L18.9777 96.0988C17.8271 100.929 23.1763 104.741 27.5131 102.176L55 85.9174Z"
        fill="url(#paint0_linear_1340_16710)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1340_16710"
          x1="-1.16099e-06"
          y1="25"
          x2="150"
          y2="103"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2741" />
          <stop offset="0.0729167" stopColor="#252A3A" stopOpacity="0.927083" />
          <stop offset="1" stopColor="#242C47" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
