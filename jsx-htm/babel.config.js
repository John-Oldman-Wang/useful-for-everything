module.exports = {
  plugins: [
    // "@babel/plugin-transform-modules-commonjs",
    [
      "babel-plugin-transform-jsx-to-htm",
      {
        tag: "$$html",
        import: {
          module: "./core.js",
          export: "html"
        }
      }
    ],
    "transform-es2015-modules-commonjs"
  ]
};
