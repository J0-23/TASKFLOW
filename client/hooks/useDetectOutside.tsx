import React, { useEffect } from "react";

interface DetectOutsideProps<T extends HTMLElement> {
  ref: React.RefObject<T | null>; // ✅ allow null
  callback: () => void;
}

function useDetectOutside<T extends HTMLElement>({
  ref,
  callback,
}: DetectOutsideProps<T>) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
}

export default useDetectOutside;
