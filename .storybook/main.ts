import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
  
};
export default config;

// module.exports = {
//   stories: [
//     "../components/**/*.stories.mdx",
//     "../components/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-controls",
//   ],
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
//     });

//     return config;
//   },
// };