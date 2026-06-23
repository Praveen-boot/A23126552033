const express = require("express");
const logger = require("./src");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.send("Logger Working");
});

app.listen(3000, () => {
    console.log("Server Running");
});