class Crud{
    constructor(){
        this.conexion = new (require("./conectar.js"))();
    }

    async obtenerProductos(){
        let trs = "";
        const productos = await new Promise((resolve, reject)=>{
            this.conexion.query("SELECT pro_id, pro_nombre, pro_precio, pro_cantidad FROM productos;", (error, response, fields)=>{
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
            trs += "<td>" + productos[i].pro_precio + "</td>";
            trs += "<td>" + productos[i].pro_cantidad + "</td>";
            trs += "<td>";
            trs += "<form action='/accionesProducto' method='POST'>";
            trs += "<input type='hidden' name='id' value='" + productos[i].pro_id + "'>";
            trs += "<div class='action-button'>"; // Contenedor para el botón Borrar
            trs += "<input type='submit' class='submit' name='accion' value='Borrar'>";
            trs += "</div>"; // Cerrar contenedor del botón Borrar
            trs += "<div class='action-button'>"; // Contenedor para el botón Modificar
            trs += "<input type='submit' class='submit' name='accion' value='Modificar'>";
            trs += "</div>"; // Cerrar contenedor del botón Modificar
            trs += "</form>";
            trs += "</td>";
            trs += "</tr>";
        }
        
        return trs;
    }

    async accionesProductos(request){
        let valor = await new Promise((resolve, reject)=>{
            if(request.body.accion === "Borrar"){
                this.conexion.query("DELETE FROM productos WHERE pro_id = "+request.body.id+";", (error, response, fields)=>{
                    if(error){
                        console.log(error);
                        reject([]);
                    }
                    else{
                        resolve([]);
                    }
                });
            }
            else{
                this.conexion.query("SELECT pro_id, pro_nombre, pro_precio, pro_cantidad FROM productos WHERE pro_id = "+request.body.id+";", (error, response, fields)=>{
                    if(error){
                        console.log(error);
                        reject([]);
                    }
                    else{
                        resolve(response);
                    }
                });
            }
        });
        
        return valor;
    }

    async actualizarProducto(request){
        let respuesta = await new Promise((resolve, reject)=>{
            this.conexion.query("UPDATE productos SET pro_nombre = '"+request.body.nombre+"', pro_precio = "+request.body.precio+", pro_cantidad = "+request.body.cantidad+ " WHERE pro_id = "+request.body.id+ ";", (error, response, fields)=>{  
                if(error){
                    reject(false);
                }
                else{
                    resolve(true);
                }
            });
        });

        return respuesta;
    }

    async obtenerId(){
        let id = 1;
        const response = await new Promise((resolve, reject)=>{
            this.conexion.query("SELECT pro_id FROM productos ORDER BY(pro_id) ASC;", (error, response, fields)=>{
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

        return id;
    }

    async ingresar(nombre, cantidad, precio){         
        let id = await this.obtenerId();
        const insert = await new Promise((resolve, reject)=>{
            this.conexion.query("INSERT INTO productos VALUES("+id+", '"+nombre+"', "+precio+", "+cantidad+");", (error, response, fields)=>{
                if(error){
                    console.log(error);
                    reject(false);
                }
                else{
                    resolve(true);
                }
            });
        });

        return insert;
    }
}

module.exports = Crud;