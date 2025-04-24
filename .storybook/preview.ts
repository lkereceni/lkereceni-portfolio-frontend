import "../src/app/globals.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#FFF" },
        { name: "dark", value: "#282C33" },
      ],
    },
  },
};

export default preview;
