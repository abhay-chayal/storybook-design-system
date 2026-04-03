/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },
  docs: { autodocs: "tag" },

  webpackFinal: async (webpackConfig) => {
    // ── 1. JSX / Babel rule ──────────────────────────────────────────────────
    // Remove any existing JS rule so we fully control transpilation
    webpackConfig.module.rules = webpackConfig.module.rules.filter(
      (rule) =>
        !(rule.test && rule.test.toString().includes("js") && !rule.test.toString().includes("json"))
    );

    webpackConfig.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    });

    // ── 2. CSS / Tailwind rule ───────────────────────────────────────────────
    // Remove any existing CSS rule
    webpackConfig.module.rules = webpackConfig.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes("css"))
    );

    webpackConfig.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                require("@tailwindcss/postcss"),
                require("autoprefixer"),
              ],
            },
          },
        },
      ],
    });

    return webpackConfig;
  },
};

export default config;
