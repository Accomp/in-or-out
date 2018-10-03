module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/functions/_get-value.scss";
          @import "@/styles/variables/_color.scss";
        `
      }
    }
  }
};