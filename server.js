const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.use(require("./routes.api.js"));

app.get("/", (req, res) => {
    res.sendfile(path.join(_dirname + "/public/index.html"));
});

app.listen(port, () => {
    console.log("app running onport ${port}!");
});