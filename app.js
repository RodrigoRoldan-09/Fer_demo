const express = require('express');
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const { PORT } = require("./config.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

new (require("./js/routes/routes.js"))(app);

app.listen(PORT, () => {
    console.log('servidor escuchando en http://localhost:' + PORT + "/");
});