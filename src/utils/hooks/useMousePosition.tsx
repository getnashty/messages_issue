import { useCallback, useLayoutEffect, useState } from "react";

export function useMousePosition(): [number, number] {
  const [mouseX, setX] = useState<number>(0);
  const [mouseY, setY] = useState<number>(0);

  const setPosition = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setX(clientX);
      setY(clientY);
    },
    [setX, setY]
  );

  useLayoutEffect(() => {
    document.addEventListener("mousemove", setPosition);
    return () => document.removeEventListener("mousemove", setPosition);
  }, [mouseX, mouseY, setX, setY, setPosition, document]);

  return [mouseX, mouseY];
}
