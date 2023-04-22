import classNames from "classnames";
import React, { ReactElement } from "react";

export function Check({
  className,
  alt = "Check",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__check")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.94972 15.9919L5.59101 12.6332C5.29812 12.3403 4.82324 12.3403 4.53035 12.6332C4.23746 12.9261 4.23746 13.401 4.53035 13.6939L8.40283 17.5664C8.40816 17.572 8.4136 17.5776 8.41914 17.5832C8.67542 17.8395 9.07103 17.8715 9.36214 17.6793C9.36734 17.6758 9.37251 17.6723 9.37764 17.6688C9.41366 17.6437 9.44798 17.6151 9.4801 17.583C9.48254 17.5805 9.48495 17.5781 9.48735 17.5756L19.7328 7.33013C20.0257 7.03723 20.0257 6.56236 19.7328 6.26947C19.44 5.97657 18.9651 5.97657 18.6722 6.26947L8.94972 15.9919Z"
      />
    </svg>
  );
}
