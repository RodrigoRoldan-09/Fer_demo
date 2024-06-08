class Renderizar{
    constructor(){}

    renderizarProductos(filas){
        return `<html lang='es'>
            <head>
                <style>
                css
/* Estilo para Formularios y Tablas */
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f0e5de, #ded3c2);
    color: #555;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    width: 100%;
    margin: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #8b7e74;
    font-size: 2.2em;
    margin-top: 1px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
}

/* Estilos para Formularios */
form {
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
    color: #7a6a53;
    font-weight: 500;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea,
select {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 400;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
    border-color: #a2856e;
    box-shadow: none;
}

input[type="submit"] {
    background-color: #a2856e;
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
}

input[type="submit"]:hover {
    background-color: #8b715d;
}

input[type="submit"]:active {
    background-color: #735947;
}

.actions-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.actions-btn button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    background-color: #a2856e;
    color: #fff;
}

.actions-btn button:hover {
    background-color: #8b715d;
}

.actions-btn button:active {
    background-color: #735947;
}

/* Estilos para Tablas */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 10px 15px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 1em;
    color: #333;
}

th {
    background-color: #8b7e74;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
}

tr:nth-child(odd) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

/* Botones de acción */
.action-button {
    display: inline-block;
    margin: 0 5px;
}

.submit {
    background-color: #a2856e;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.9em;
}

.submit:hover {
    background-color: #8b715d;
}

/* Estilo responsivo */
@media screen and (max-width: 600px) {
    .container {
        width: 100%;
        padding: 15px;
    }

    table {
        font-size: 0.9em;
    }

    input[type="text"],
    input[type="number"] {
        padding: 10px 12px;
    }

    input[type="submit"] {
        padding: 10px 20px;
        font-size: 1em;
    }

    th, td {
        padding: 10px;
    }
}

                
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>N° Estudiante:</th>
                        <th>Nombre:</th>
                        <th>Edad:</th>
                        <th>Faltas:</th>
                        <th>Acciones:</th>
                    </tr>
                    ${filas}
                </table>
                <form action='index.html'><input type='submit' class='submit' value='Regresar'></form>
            </body>
        </html>`;
    }

    accionesProductos(valor){
        let formulario = "";
        try{
            let datos = valor[0];
            formulario += "<form action='/actualizarProducto' method='POST'>";
            formulario += "<input type='hidden' name='id' value='"+datos.pro_id+"'>";
            formulario += "Nombre del Niño: <input type='text' class='input' name='nombre' value='"+datos.pro_nombre+"'>";
            formulario += "<br>";
            formulario += "Edad del Niño: <input type='number' class='input' name='precio' value='"+datos.pro_precio+"'>";
            formulario += "<br>";
            formulario += "Número de Faltas: <input type='number' class='input' name='cantidad' value='"+datos.pro_cantidad+"'>";
            formulario += "<br>";
            formulario += "<input type='submit' class='submit' name='accion' value='Actualizar'>";
            formulario += "</form>";
        }
        catch(err){
        }

        return `<html lang='es'>
            <head>
                <style>
                
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f0e5de, #ded3c2);
    color: #555;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    width: 100%;
    margin: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #8b7e74;
    font-size: 2.2em;
    margin-top: 1px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
}

/* Estilos para Formularios */
form {
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
    color: #7a6a53;
    font-weight: 500;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea,
select {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 400;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
    border-color: #a2856e;
    box-shadow: none;
}

input[type="submit"] {
    background-color: #a2856e;
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
}

input[type="submit"]:hover {
    background-color: #8b715d;
}

input[type="submit"]:active {
    background-color: #735947;
}

.actions-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.actions-btn button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    background-color: #a2856e;
    color: #fff;
}

.actions-btn button:hover {
    background-color: #8b715d;
}

.actions-btn button:active {
    background-color: #735947;
}

/* Estilos para Tablas */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 10px 15px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 1em;
    color: #333;
}

th {
    background-color: #8b7e74;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
}

tr:nth-child(odd) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

/* Botones de acción */
.action-button {
    display: inline-block;
    margin: 0 5px;
}

.submit {
    background-color: #a2856e;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.9em;
}

.submit:hover {
    background-color: #8b715d;
}

/* Estilo responsivo */
@media screen and (max-width: 600px) {
    .container {
        width: 100%;
        padding: 15px;
    }

    table {
        font-size: 0.9em;
    }

    input[type="text"],
    input[type="number"] {
        padding: 10px 12px;
    }

    input[type="submit"] {
        padding: 10px 20px;
        font-size: 1em;
    }

    th, td {
        padding: 10px;
    }
}
        
                </style>
            </head>
            <body>`+formulario+`</body>
        </html>`;
    }
}

module.exports = Renderizar;