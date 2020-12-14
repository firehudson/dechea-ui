import React, { useEffect } from "react";

type NoopFuction = () => void;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop: NoopFuction = () => {};

const useBlurHandler = (ref: React.RefObject<HTMLDivElement>, onClickOutside = noop, anchorElementId?: string) => {
  useEffect(() => {
    const anchor = document.getElementById(anchorElementId);
    const handleMouseDown = (event) => {
      if (
        ref.current
        && !ref.current?.contains?.(event.target)
        && !(anchor && anchor.contains(event.target))
      ) {
        // debugger
        setTimeout(() => {
          onClickOutside?.();
        }, 10)
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref, onClickOutside, anchorElementId]);
};

export default useBlurHandler;
