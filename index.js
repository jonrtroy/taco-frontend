const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 3000);
