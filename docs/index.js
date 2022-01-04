const basicInfo = require("./basic-info");
const servers = require("./servers");
const tags = require("./tags");
const components = require("./components");
const paths = require("./path");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...paths,
};
