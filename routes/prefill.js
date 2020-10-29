const app = require("../app");
const { prefillFunction } = require("../functions/prefillFunction");
app.get("*", prefillFunction);

module.exports = app;
