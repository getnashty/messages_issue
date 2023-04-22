import { useLayoutEffect, useState } from "react";

export function useWindowSize(debounce = 0) {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  let resize: NodeJS.Timeout;
  useLayoutEffect(() => {
    function updateSize() {
      clearTimeout(resize);
      resize = setTimeout(
        () => setSize([window.innerWidth, window.innerHeight]),
        debounce
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
