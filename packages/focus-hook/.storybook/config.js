import { configure } from "@storybook/react";
import { setConfig } from "react-hot-loader";

setConfig({ pureSFC: true });

function loadStories() {
  require("../src/story.tsx");
}

configure(loadStories, module);
