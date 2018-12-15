# React Intersect Observer Hook

```jsx
import useIntersection from "@tuxsudo/intersection-hook";

export function Elm() {
  const { ref, entry } = useIntersection();

  return (
    <div ref={ref}>
      {entry && entry.isIntersecting ? "can see me" : "can't see me"}
    </div>
  );
}
```
