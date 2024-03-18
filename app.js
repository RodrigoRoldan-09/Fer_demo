const express = require('express');
const mysql = require('mysql2');
var bodyParser = require("body-parser");
var app = require('express')();
const puerto = 1999;

let conection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "-RoDs0919_",
    database : "prueba"
});

conection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(express.static("public"));

app.use("/ingresarProducto", async (req, res)=> {
    try{
        let nombre = req.body.nombre;
        let cantidad = req.body.cantidad;
        let precio = req.body.precio;
        let id = 1;
            
        const response = await new Promise((resolve, reject)=>{
            conection.query("SELECT pro_id FROM productos ORDER BY(pro_id) ASC;", (error, response, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(response);
                }
            });
        });
        
        for(let i = 0; i < response.length; i++){
            let columna = response[i];
            if(columna.pro_id !== id){
                break;
            }
            
            id ++;
        }

        const insert = await new Promise((resolve, reject)=>{
            conection.query("INSERT INTO productos VALUES("+id+", '"+nombre+"', "+precio+", "+cantidad+");", (error, response, fields)=>{
                if(error){
                    console.log(error);
                    reject(false);
                }
                else{
                    resolve(true);
                }
            });
        });

        if(insert){
            res.redirect("/mostrarProductos");
        }
    }
    catch(err){
        console.log(err)
    }
});

app.use("/mostrarProductos", async (request, response)=>{
    let trs = "";
    const productos = await new Promise((resolve, reject)=>{
        conection.query("SELECT pro_id, pro_nombre, pro_precio, pro_cantidad FROM productos;", (error, response, fields)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(response);
            }
        });
    });

    for (let i = 0; i < productos.length; i++) {
        trs += "<tr>";
        trs += "<td>" + productos[i].pro_id + "</td>";
        trs += "<td>" + productos[i].pro_nombre + "</td>";
        trs += "<td>$" + productos[i].pro_precio + "</td>";
        trs += "<td>" + productos[i].pro_cantidad + "</td>";
        trs += "<td>";
        trs += "<form action='/accionesProducto' method='POST'>";
        trs += "<input type='hidden' name='id' value='" + productos[i].pro_id + "'>";
        trs += "<div class='action-button'>"; // Contenedor para el botón Borrar
        trs += "<input type='submit' class='submit' name='accion' value='Borrar'>";
        trs += "</div>"; // Cerrar contenedor del botón Borrar
        trs += "&nbsp;&nbsp;&nbsp;&nbsp;"; // Espacio entre los botones
        trs += "<div class='action-button'>"; // Contenedor para el botón Modificar
        trs += "<input type='submit' class='submit' name='accion' value='Modificar'>";
        trs += "</div>"; // Cerrar contenedor del botón Modificar
        trs += "</form>";
        trs += "</td>";
        trs += "</tr>";
    }

    response.send(`
<html lang='es'>
<head>
    <style>
    body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 20px;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    
    table th,
    table td {
        padding: 12px;
        vertical-align: middle;
        border-top: 1px solid #ddd;
    }
    
    th {
        background-color: #007bff;
        color: #fff;
    }
    
    .submit {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .submit:hover {
        background-color: #0056b3;
    }
    
    form {
        margin-top: 20px;
    }
    
    </style>
</head>
<body>
    <table>
        <tr>
            <th>ID:</th>
            <th>Nombre:</th>
            <th>Precio:</th>
            <th>Cantidad:</th>
            <th>Acciones:</th>
        </tr>
        ${trs}
    </table>
    <form action='index.html'><input type='submit' class='submit' value='Regresar'></form>
</body>
</html>
`);
});

app.use("/accionesProducto", async (request, response)=>{
    let valor = await new Promise((resolve, reject)=>{
        if(request.body.accion === "Borrar"){
            conection.query("DELETE FROM productos WHERE pro_id = "+request.body.id+";", (error, response, fields)=>{
                if(error){
                    console.log(error);
                    reject({});
                }
                else{
                    resolve({});
                }
            });
        }
        else{
            conection.query("SELECT pro_id, pro_nombre, pro_precio, pro_cantidad FROM productos WHERE pro_id = "+request.body.id+";", (error, response, fields)=>{
                if(error){
                    console.log(error);
                    reject({});
                }
                else{
                    resolve(response);
                }
            });
            


        }
    });

    
    if(valor.length !== 0){
        try{
            let formulario = "";
            let datos = valor[0];
            formulario += "<form action='/actualizarProducto' method='POST'>";
            formulario += "<input type='hidden' name='id' value='"+datos.pro_id+"'>";
            formulario += "Nombre del Producto: <input type='text' class='input' name='nombre' value='"+datos.pro_nombre+"'>";
            formulario += "<br>";
            formulario += "Precio del Producto: <input type='number' class='input' name='precio' value='"+datos.pro_precio+"' step='0.1'>";
            formulario += "<br>";
            formulario += "Cantidad del Producto: <input type='number' class='input' name='cantidad' value='"+datos.pro_cantidad+"'>";
            formulario += "<br>";
            formulario += "<input type='submit' class='submit' name='accion' value='Actualizar'>";
            formulario += "</form>";

            response.send(`"<html lang='es'><head><style>
            body {
                font-family: Arial, sans-serif;
            }
            
            form {
                width: 300px;
                margin: 0 auto;
            }
            
            .input {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            
            .submit {
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .submit:hover {
                background-color: #0056b3;
            }
            
            </style></head><body>"`+formulario+`"</body></html>"`);
        }
        catch(err){
            response.redirect("/mostrarProductos")
        }
    }
    else{
        response.redirect("/mostrarProductos");
    }
});

app.use("/actualizarProducto", async (request, response)=>{
    let respuesta = await new Promise((resolve, reject)=>{
        conection.query("UPDATE productos SET pro_nombre = '"+request.body.nombre+"', pro_precio = "+request.body.precio+", pro_cantidad = "+request.body.cantidad+ " WHERE pro_id = "+request.body.id+ ";", (error, response, fields)=>{  
            if(error){
                reject(false);
            }
            else{
                resolve(true);
            }
        });
    });

    if(respuesta){
        response.redirect("/mostrarProductos");
    }
});

app.listen(puerto,()=>{
    console.log('servidor escuchando en http://localhost:'+puerto+"/");
});