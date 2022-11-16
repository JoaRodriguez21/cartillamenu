// Simulador Menú

//El cliente coloca el numero de su mesa para que el negocio identifique el pedido
const NumeroMesa = parseInt(prompt(`Seleccióne el numero de su mesa: `))

//variables declaradas

let totalCompra = 0
let seguirComprando = true
let decision
let productosOfrecidos = "Arma tu menú con los siguientes productos: "


//clases

class Producto{
  constructor(id, nombre, categoria, precio){
  this.id = id
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
  }

}

//funciones
function agregarProducto (){
  for(item of productosExistentes){
   productosOfrecidos += ` \n - ${item.id} ${item.nombre} $${item.precio}`
  }
}

// genero los productos

const producto1 = new Producto(1,"Hamburguesa de Pollo","Hamburguesas",1200)
const producto2 = new Producto(2, "Hamburguesa de Carne", "Hamburguesas", 1400)
const producto3 = new Producto(3, "Hamburguesa Vegetariana", "Hamburguesas", 900)
const producto4 = new Producto(4, "Hamburguesa de Soja", "Hamburguesas", 1100)
const producto5 = new Producto(5, "Papas fritas Grandes", "Papas fritas", 800)
const producto6 = new Producto(6, "Papas fritas Chicas", "Papas fritas", 500)
const producto7 = new Producto(7, "Vaso de Coca-Cola", "Bebida", 300)
const producto8 = new Producto(8, "Vaso de Sprite", "Bebida", 300)

//array productos disponibles
const productosExistentes = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
console.log(productosExistentes)
//array carrito
const carrito = []

//Elijo los productos de mi pedido
for(item of productosExistentes){
  productosOfrecidos += ` \n - ${item.id} ${item.nombre} $${item.precio}`
}
while (seguirComprando = true){
  let productoCliente = parseInt(prompt(productosOfrecidos))

  const platoCliente = productosExistentes.find((producto) => producto.id === productoCliente)
  if (platoCliente){
    console.log(platoCliente.nombre)
    totalCompra += platoCliente.precio
    carrito.push(platoCliente.nombre)
  } else {
    alert(`Error al escoger plato principal, vuelve a intentarlo.`)
    continue
  }

  decision = parseInt(prompt(`Si desea agregar otro plato principal presione "1". \n Si desea continuar presione 2`))
  if(decision === 1) {
    continue
  } else if (decision === 2){
    break
  } else {
    alert(`a ocurrido un error, vuelva a intentarlo`)
    continue
  }
  
}
alert(`los productos que seleccionaste son : \n ${carrito} \n el total de tu compra es: ${totalCompra}`)