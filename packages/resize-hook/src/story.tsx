import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import useResize from "./index";

const story = storiesOf("Resize Hook", module);

function Demo() {
  const { ref, entry } = useResize({
    onResize: entry => action("resize")(entry.contentRect)
  });

  return (
    <pre ref={ref}>{entry && JSON.stringify(entry.contentRect, null, 2)}</pre>
  );
}

story.add("default", () => <Demo />);
