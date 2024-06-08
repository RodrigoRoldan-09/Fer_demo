const mysql = require('mysql2');

class Conectar{
    constructor(){
        let conection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "-RoDs0919_",
            database : "prueba"
        });

        conection.connect();

        return conection;
    }
}

module.exports = Conectar;