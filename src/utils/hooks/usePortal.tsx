import React, { ReactNode } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

export function usePortal(domId: string) {
  const containerEle = React.useRef(document.createElement("div"));

  useEffect(() => {
    //Grab the parent to insert the new element into
    const parent = document.getElementById(domId);

    //Add the new element to the parent
    parent?.appendChild(containerEle.current);

    //Cleanup on unmount
    return () => {
      containerEle.current.remove();
    };
  }, [domId]);

  const renderPortal = (content: ReactNode) => {
    const target = containerEle.current;
    return ReactDOM.createPortal(content, target);
  };

  return { renderPortal };
}
