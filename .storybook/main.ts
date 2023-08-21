import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
    // Для корректного импорта svg иконок как компонентов
  webpackFinal: async config => {
      const imageRule = config.module?.rules?.find(rule => {
        const test = (rule as { test: RegExp }).test

        if (!test) {
          return false
        }

        return test.test('.svg')
      }) as { [key: string]: any }

      imageRule.exclude = /\.svg$/

      config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      return config
    }

};
export default config;
