// Simulador Menú restorant

let totalCompra = 0
let seguirComprando = true
let decision

class Producto{
  constructor(id, nombre, categoria, precio){
  this.id = id
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
  }

}

const hamburguesaPollo = new Producto(1,"Hamburguesa de Pollo","Hamburguesas",1200)
const hamburguesaCarne = new Producto(2, "Hamburguesa de Carne", "Hamburguesas", 1400)
const hamburguesaVegie = new Producto(3, "Hamburguesa Vegetariana", "Hamburguesas", 900)
const hamburguesaSoja = new Producto(4, "Hamburguesa de Soja", "Hamburguesas", 1100)
const papasGrandes = new Producto(5, "Papas fritas Grandes", "Papas fritas", 800)
const papasChicas = new Producto(6, "Papas fritas Chicas", "Papas fritas", 500)
const cocacola = new Producto(7, "Vaso de Coca-Cola", "Bebida", 300)
const sprite = new Producto(8, "Vaso de Sprite", "Bebida", 300)


while (seguirComprando = true){
  let producto = parseInt(prompt(`Escoge el plato principal de su pedido: 
  1.${hamburguesaPollo.nombre} ($${hamburguesaPollo.precio})
  2.${hamburguesaCarne.nombre} ($${hamburguesaCarne.precio})
  3.${hamburguesaVegie.nombre} ($${hamburguesaVegie.precio}) 
  4.${hamburguesaSoja.nombre} ($${hamburguesaSoja.precio})`))
  
  if (producto === 1){
    //hamburguesa pollo
    totalCompra = totalCompra + hamburguesaPollo.precio
  } else if (producto === 2) {
    //hamburguesa carne
    totalCompra = totalCompra + hamburguesaCarne.precio
  } else if (producto === 3) {
    // hamburguesa vegetariana
    totalCompra = totalCompra + hamburguesaVegie.precio
  } else if (producto === 4) {
    //hamburguesa Soja
    totalCompra + totalCompra + hamburguesaSoja.precio
  } else {
    alert(`Error al escoger plato principal, vuelve a intentarlo.`)
    continue
  }

  decision = parseInt(prompt(`Si desea agregar otro plato principal presione "1".
  Si desea continuar presione cualquier tecla`))
  if(decision === 1) {
    continue
  } else{
   break
  }

}
console.log(totalCompra)
seguirComprando = true

while (seguirComprando = true){
  let producto2 = parseInt(prompt(`Escoge un acompañamiento para su pedido: 
  1.${papasChicas.nombre}($${papasChicas.precio}) 
  2.${papasGrandes.nombre}($${papasGrandes.precio}) 
  3.Sin Acompañamiento`))
  if (producto2 === 1){
    //papas chicas
    totalCompra = totalCompra + papasChicas.precio
  } else if (producto2 === 2){
    //papas grandes
    totalCompra = totalCompra + papasGrandes.precio
  } else if (producto2 === 3){
    //sin acompañamiento
    break
  } else {
    alert(`La opción seleccionada no esta disponible, vuelve a intentarlo nuevamente`)
    continue
  }

  decision = parseInt(prompt(`Si desea agregar otro acompañamiento presione "1".
  Si desea continuar precione cualquier tecla`))
  if(decision === 1) {
    continue
  } else {
    break
  }
} 

console.log(totalCompra)
seguirComprando = true

while(seguirComprando = true){
  let producto3 = parseInt(prompt(`Escoge una bebida para su pedido 
  1.${cocacola.nombre}($${cocacola.precio}) 
  2.${sprite.nombre}($${sprite.precio}) 
  3.Sin Bebidas`))
  if (producto3 === 1){
    //bebida cocacola
    totalCompra = totalCompra + cocacola.precio
  } else if (producto3 === 2){
    //bebida sprite
    totalCompra = totalCompra + sprite.precio
  } else if (producto3 === 3){
    //sin bebida
    break
  } else {
    alert(`Escoge una bebida VALIDa para su pedido`)
    continue
  }

  decision = parseInt(prompt(`Si desea agregar otra bebida presione "1".
  Si desea continuar precione cualquier tecla`))
  if(decision === 1) {
    continue
  } else {
    break
  }
}
console.log(totalCompra)
alert (`El total de tu compra es ${totalCompra}`)