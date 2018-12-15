import { useState, useEffect, useRef, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useResize(): {
  entry: ResizeObserverEntry | null;
  ref: MutableRefObject<any>;
} {
  const ref = useRef(null);
  const [entry, setEntry] = useState(null);

  const handleResize = ([entry]) => {
    setEntry(entry);
  };

  const observer = useRef(new ResizeObserver(handleResize));

  useEffect(
    () => {
      if (ref) {
        observer.current.observe(ref.current);
      }
      return () => observer.current.disconnect();
    },
    [ref]
  );

  return { entry, ref };
}
