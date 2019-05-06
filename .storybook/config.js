import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import purpleDream from "./purpleDream";

function loadStories() {
  require("../src/stories");
}

addParameters({
  options: {
    theme: purpleDream
  }
});

configure(loadStories, module);
