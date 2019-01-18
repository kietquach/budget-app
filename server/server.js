const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

//serve assets in public folder
app.use(express.static(publicPath));

//serve index.html for all 404s
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

//port to use
app.listen(3000, () => {
    console.log("server is up!");
});