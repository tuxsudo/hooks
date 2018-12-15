# React Resize Observer Hook

```jsx
import useResize from "@tuxsudo/resize-hook";

export function Elm() {
  const { ref, entry } = useResize();

  return (
    <div ref={ref}>
      {entry && <span>{entry.contentRect.width}</span>}
    </div>
  );
}
```
