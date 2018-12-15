import { configure } from "@storybook/react";

function loadStories() {
  require("../src/story.tsx");
}

configure(loadStories, module);
