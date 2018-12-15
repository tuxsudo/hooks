import { configure } from "@storybook/react";
import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

function loadStories() {
  require("../src/story.tsx");
}

configure(loadStories, module);

/*
import { configure } from "@storybook/react";

const req = require.context("../src", true, /story.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
*/
