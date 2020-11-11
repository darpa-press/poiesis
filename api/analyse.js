const app = require("../app");
const { analyseFunction } = require("./functions/analyseFunction");

app.post("*", analyseFunction);

module.exports = app;
