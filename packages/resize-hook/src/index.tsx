import { useState, useEffect, useRef, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

export interface ResizeHandler {
  (entry: ResizeObserverEntry): void;
}

export default function useResize({
  onResize
}: { onResize?: ResizeHandler } = {}): {
  entry: ResizeObserverEntry | null;
  ref: MutableRefObject<any>;
} {
  const ref = useRef(null);
  const [entry, setEntry] = useState(null);

  const handleResize = ([entry]) => {
    setEntry(entry);
    if (onResize) {
      onResize(entry);
    }
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
