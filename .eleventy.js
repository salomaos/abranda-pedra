module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS and Images
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    // Altere para o nome do seu repositório se não for o domínio principal (ex: /repo-name/)
    pathPrefix: "/", 
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};
