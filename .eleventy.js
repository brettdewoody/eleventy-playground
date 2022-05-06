module.exports = function (eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: "./src/",
      includes: "/_11ty/_includes/",
      layouts: "/_11ty/_layouts/",
      data: "/_11ty/_data/",
      output: "./public/",
    },
  };
};