import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "./useWindowSize";

type Dependencies = any[];

export function useCanScroll(dependencies?: Dependencies) {
  const deps = dependencies || [];
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [canScroll, setScroll] = useState(false);
  const [canScrollHorizontal, setScrollHorizontal] = useState(false);
  const [, windowHeight] = useWindowSize();
  useLayoutEffect(() => {
    if (scrollableRef.current) {
      const scrollableHeight = scrollableRef.current?.scrollHeight || 0;
      const scrollableWidth = scrollableRef.current?.scrollWidth || 0;
      const clientHeight = scrollableRef.current?.clientHeight || 0;
      const clientWidth = scrollableRef.current?.clientWidth || 0;
      if (!canScroll && scrollableHeight > clientHeight) {
        setScroll(true);
      } else if (canScroll && scrollableHeight <= clientHeight) {
        setScroll(false);
      }
      if (!canScrollHorizontal && scrollableWidth > clientWidth) {
        setScrollHorizontal(true);
      } else if (canScrollHorizontal && scrollableWidth <= clientWidth) {
        setScrollHorizontal(false);
      }
    }
  }, [windowHeight, canScroll, ...deps]);

  return {
    scrollableRef,
    canScroll,
    canScrollHorizontal,
  };
}
