module.exports = {
  entry: "src/index",
  output: {
    dir: "build/"
  },
  plugins: [
    {
      resolve: "@poi/plugin-typescript",
      options: {
        vue: false
      }
    }
  ],
  configureWebpack(config, context) {
    config.resolve.extensions = [...config.resolve.extensions, ".tsx"];
    config.resolve.alias = {
      ...config.resolve.alias,
      Assets: `${__dirname}/assets`
    };
    return config;
  }
};
