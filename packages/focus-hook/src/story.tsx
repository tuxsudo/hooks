import React from "react";
import { storiesOf } from "@storybook/react";

import useFocus from "./index";

function Demo() {
  const { ref } = useFocus();

  return <input ref={ref} />;
}

storiesOf("Focus Hook", module).add("default", () => <Demo />);
