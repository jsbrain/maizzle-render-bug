/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
  },

  events: {
    async beforeRender(html, config) {
      try {
        const match = html.match(/<div>(.*)<\/div>/);
        const extracted = match[1];

        console.log(
          `\n -> should be: ${extracted} but is ${config.build.current.path.name}`
        );

        return html;
      } catch (error) {
        console.log("error", error);
        return html;
      }
    },
  },
};
