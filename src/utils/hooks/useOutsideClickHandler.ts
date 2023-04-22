import { useEffect, RefObject } from "react";

/**
 * This is a utility for tracking clicks outside of
 * a set of elements.
 *
 * ```typescript
 * const MyComponent = () => {
 *     const ref = useRef<HTMLDivElement>(null);
 *     useOutsideClickHandler({
 *         refs: [ref],
 *          enabled: true,
 *         cb: useCallback(() => {
 *             alert('Clicked outside!');
 *         }, [])
 *     });
 *
 *     return (
 *         <div className="outside">
 *             outside
 *             <div className="inside" ref={ref}>inside</div>
 *         </div>
 *     );
 * };
 * ```
 *
 * @param refs - A list of react refs to components that when clicked will NOT
 *               fire the outsideClickHandler
 * @param outsideClickHandler - The handler to run when an element outside of `refs`
 *                              is clicked.
 */
export function useOutsideClickHandler({
  refs,
  cb,
  enabled,
  cancelClassNames,
}: {
  refs: RefObject<HTMLElement | null | undefined>[];
  cb: (event: MouseEvent) => void;
  enabled: boolean;
  cancelClassNames?: string[];
}): void {
  return useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (enabled && event?.target instanceof Node) {
        // Unfortunately need to cast to Node here since the React and DOM typings don't
        // handle this well: https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node
        const isInside = refs.some((ref) =>
          ref.current?.contains(event?.target as Node)
        );

        let cancelCb = false;
        event.composedPath().some((el) => {
          // We're casting as an element
          // because the type is EventTarget
          // but it _is_ an element
          const n = el as Element;
          if (
            typeof n.className === "string" &&
            n.className.length > 0 &&
            Array.isArray(cancelClassNames)
          ) {
            // If any of the elements classname include a
            // classname from the cancel list, we cancel the cb
            cancelCb = cancelClassNames?.some((name) => {
              return n.className.includes(name);
            });
          }
        });
        if (!isInside && !cancelCb) {
          cb(event);
        }
      }
    };
    if (enabled) {
      document.addEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [...refs, enabled, cb]);
}
