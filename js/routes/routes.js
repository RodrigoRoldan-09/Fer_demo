class Renderizar{
    constructor(app){
        this.coordinar = new(require("./coordinar.js"))();

        app.use("/ingresarProducto", async (request, response) => {this.coordinar.ingresarProducto(request, response)});
        app.use("/mostrarProductos", async (request, response) => {this.coordinar.mostrarProductos(request, response)});
        app.use("/accionesProducto", async (request, response) => {this.coordinar.accionesProductos(request, response)});
        app.use("/actualizarProducto", async (request, response) => {this.coordinar.actualizarProductos(request, response)});
    }
}

module.exports = Renderizar;