const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const {PORT} = require("./config.js");
const puerto = PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static("public"));

new (require("./js/routes/routes.js"))(app);

app.listen(puerto,()=>{
    console.log('servidor escuchando en http://localhost:'+puerto+"/");
});