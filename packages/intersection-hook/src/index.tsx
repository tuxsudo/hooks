import { useState, useEffect, useRef, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

/* https://github.com/Microsoft/TypeScript/issues/16255 */
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
  }
}

export interface IntersectionHandler {
  (entry: ResizeObserverEntry): void;
}

export interface UseIntersectionArgs {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
  onChange?: (entry: IntersectionObserverEntry) => void;
}

export default function useIntersection(
  args: UseIntersectionArgs
): {
  entry: IntersectionObserverEntry | null;
  ref: MutableRefObject<any>;
} {
  const ref = useRef(null);
  const [entry, setEntry] = useState(null);

  const handleIntersection = ([newEntry]) => {
    setEntry(newEntry);

    if (args.onChange) {
      args.onChange(newEntry);
    }
  };

  const observer = useRef(
    window && window.IntersectionObserver
      ? new window.IntersectionObserver(handleIntersection, {
          root: args.root,
          rootMargin: args.rootMargin,
          threshold: args.threshold
        })
      : null
  );

  useEffect(
    () => {
      if (ref && window && window.IntersectionObserver) {
        observer.current.observe(ref.current);
      }
      return () => observer.current.disconnect();
    },
    [ref]
  );

  return { entry, ref };
}
