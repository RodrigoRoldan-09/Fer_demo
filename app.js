const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const puerto = 1999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static("public"));

new (require("./js/routes/routes.js"))(app);

app.listen(puerto,()=>{
    console.log('servidor escuchando en http://localhost:'+puerto+"/");
});