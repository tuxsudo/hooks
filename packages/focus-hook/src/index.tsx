import { useEffect, useRef, MutableRefObject } from "react";

export default function useResize(): {
  ref: MutableRefObject<any>;
} {
  const ref = useRef(null);

  useEffect(
    () => ref && ref.current && ref.current.focus && ref.current.focus(),
    [ref]
  );

  return { ref };
}
