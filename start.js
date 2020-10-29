// Start our app!
const app = require("./app");
const { prefillFunction } = require("./functions/prefillFunction");
const { analyseFunction } = require("./functions/analyseFunction");

app.post("/api/analyse", analyseFunction);
app.get("/api/prefill", prefillFunction);

// import environmental variables from our variables.env file
require("dotenv").config({
    path: "variables.env"
});

app.set("secret", process.env.SECRET);
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
