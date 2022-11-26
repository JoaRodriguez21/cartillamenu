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


//agregar al carrito

/* const divAcompañamientos = document.getElementById("divAcompañamientos")

acompañamientos.forEach(arrayAcompañamientos => {
  divAcompañamientos.innerHTML += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${arrayAcompañamientos.nombre}</h3>
    <p class="card-text">${arrayAcompañamientos.categoria}</p>
    <p class="card-text">$${arrayAcompañamientos.precio}</p>
    <a href="#" class="btn btn-primary">Pedir!</a>
  </div>
  </div>`
})

const divPostres = document.getElementById("divPostres")

postres.forEach(arrayPostres => {
  divPostres.innerHTML += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${arrayPostres.nombre}</h3>
    <p class="card-text">${arrayPostres.categoria}</p>
    <p class="card-text">$${arrayPostres.precio}</p>
    <a href="#" class="btn btn-primary">Pedir!</a>
  </div>
  </div>`
})
 */
//section carrito
/* const divCarrito = document.getElementById("divCarrito")

carrito.forEach(arrayCarrito => {
  divCarrito.innerHTML += `
  <div class="card" style="width: 10rem;">
  <div class="card-body">
  <h3 class="card-title">${arrayCarrito.nombre}</h3>
  <p class="card-text">${arrayCarrito.categoria}</p>
    <p class="card-text">$${arrayCarrito.precio}</p>
  </div>
  </div>`
}) */

/* producto.id.onclick = () =>{
  carrito.push(Producto)
  alert("producto añadido al carrito")
}

//crear productos
const selectCategoria = document.getElementById("selectCategoria")
const nombreProducto = document.getElementById("nombreProducto")
const precioProducto = document.getElementById("precioProducto")
const botonCrear = document.getElementById("botonCrear")

botonCrear.onclick = () => {
  const productoManual = {
    nombre: nombreProducto.value,
    categoria: selectCategoria.value,
    precio: precioProducto.value,
  }
  localStorage.setItem("nuevo producto", JSON.stringify(productoManual))
  console.log(productoManual)
  /* if(categoria === 1){
    bebidasCalientes.push(productoManual)
  } else if(categoria === 2){
    acompañamientos.push(productoManual)
  } else {
    postres.push(productoManual)
  }
  console.log(bebidasCalientes, acompañamientos, postres) */



