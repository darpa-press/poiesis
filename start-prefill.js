// Start our app!
const app = require("./routes/prefill.js");

// import environmental variables from our variables.env file
require("dotenv").config({
    path: "variables.env"
});

app.set("secret", process.env.SECRET);
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
