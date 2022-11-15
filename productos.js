//CLASES
class Producto{
    constructor(id, nombre, categoria, precio){
    this.id = id
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    }
}

//Productos disponibles
const producto1 = new Producto(1,"Cafe","Bebidas calientes",200)
const producto2 = new Producto(2, "Cafe con Leche", "Bebidas calientes",300)
const producto3 = new Producto(3, "Manchado", "Bebidas calientes", 280)
const producto4 = new Producto(4, "Lagrima", "Bebidas calientes",250)
const producto5 = new Producto(5, "Submarino", "Bebidas calientes",350)
const producto6 = new Producto(6, "Cortado", "Bebidas calientes", 250)
const producto7 = new Producto(7,"Tostado x2 Unidades","Acompañamientos",250)
const producto8 = new Producto(8,"Croissant","Acompañamientos",80)
const producto9 = new Producto(9,"Croissant con jamón y queso","Acompañamientos",150)
const producto10 = new Producto(10,"Tostadas","Acompañamientos",50)
const producto11 = new Producto(11,"Porción Chocotorta","Postres",500)
const producto12 = new Producto(12,"Porción Turrón Aleman","Postres",350)
const producto13 = new Producto(13,"Lemón Pie","Postres",400)
//Array: base de datos de Bebidas calientes
const bebidasCalientes = [producto1, producto2, producto3, producto4, producto5, producto6]
//Array: base de datos acompañamientos
const acompañamientos = [producto7, producto8, producto9, producto10]
//Array: base de datos Postres
const postres = [producto11, producto12, producto13]

const divBebidasCalientes = document.getElementById("divBebidasCalientes")

bebidasCalientes.forEach(ArrayBebidasCalientes => {
    divBebidasCalientes.innerHTML +=`
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${ArrayBebidasCalientes.nombre}</h3>
      <p class="card-text">${ArrayBebidasCalientes.categoria}</p>
      <p class="card-text">${ArrayBebidasCalientes.precio}</p>
      <a href="#" class="btn btn-primary">Pedir!</a>
    </div>
    </div>`
})

