import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*", // Automatically map event handlers like `onClick`
    },
    controls: {
      expanded: true, // Expand controls by default
      matchers: {
        color: /(background|color)$/i, // Match color-related props
        date: /Date$/i, // Match date-related props
      },
    },
    backgrounds: {
      default: "light", // Default background color
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    layout: "centered", // Center components by default in the canvas
  },
};

export default preview;
