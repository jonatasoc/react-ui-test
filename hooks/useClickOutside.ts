import { RefObject, useCallback, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handleClick]);
};
