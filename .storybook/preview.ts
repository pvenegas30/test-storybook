import type { Preview } from "@storybook/react";
import "../stories/globals.css";
import * as nextImage from "next/image";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// Object.defineProperty(nextImage, "default", {
//   configurable: true,
//   value: (props) => <img {...props} />,
// });

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };
