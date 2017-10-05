const markoStarter = require('marko-starter');

markoStarter.plugins(['marko-starter-babel'])

// module.exports = require("marko-starter").projectConfig({
//   name: "personal-website"
// });

module.exports = markoStarter.projectConfig({
  name: "personal-website"
});
