import React from "react";
import { storiesOf } from "@storybook/react";

import useResize from "./index";

function Demo() {
  const { ref, entry } = useResize();

  return (
    <pre ref={ref}>
      {entry ? entry.contentRect.width : "?"}x
      {entry ? entry.contentRect.height : "?"}
    </pre>
  );
}

storiesOf("Resize Hook", module).add("default", () => <Demo />);
