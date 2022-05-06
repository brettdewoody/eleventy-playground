const formatDate = require('./_filters/formatDate')

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('formatDate', formatDate);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "./src/",
      includes: "/_11ty/_includes/",
      layouts: "/_11ty/_layouts/",
      data: "/_11ty/_data/",
      output: "./_public/",
    },
  };
};