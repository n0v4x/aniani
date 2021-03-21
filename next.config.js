const path = require("path");

module.exports = {
  sassOptions: {
    // includePaths: [path.join(__dirname, "scss")],
    additionalData: "@import './scss/variables/index.scss'",
  },
};
