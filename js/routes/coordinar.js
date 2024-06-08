class Coordinar{
    constructor(){
        this.crud = new(require("./../BDC/crud.js"))();
        this.renderizar = new(require("./../render/renderizar.js"))();
    }

    async ingresarProducto(req, res){
        let nombre = req.body.nombre;
        let cantidad = req.body.cantidad;
        let precio = req.body.precio;

        if(await this.crud.ingresar(nombre, cantidad, precio)){
            res.redirect("/mostrarProductos");
        }
        else{
            res.redirect("index.html");
        }
    }

    async mostrarProductos(req, res){
        res.send(this.renderizar.renderizarProductos(await this.crud.obtenerProductos()));
    }

    async accionesProductos(req, res){
        let valor = await this.crud.accionesProductos(req);
        if(valor.length !== 0){
            res.send(await this.renderizar.accionesProductos(valor));
        }
        else{
            res.redirect("/mostrarProductos");
        }
    }

    async actualizarProductos(req, res){
        let respuesta = await this.crud.actualizarProducto(req);

        if(respuesta){
            res.redirect("/mostrarProductos");
        }
        else{
            res.redirect("index.html");
        }
    }
}

module.exports = Coordinar;