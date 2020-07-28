module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: "./src/Components/App/breakpoints.css"
    }
  }
};
