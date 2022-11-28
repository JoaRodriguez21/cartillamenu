//DIV PADRES
//div boton carrito 
const verCarrito = document.getElementById("verCarrito");
//Cantidad de productos que hay en el carrito
const numeroCarrito = document.getElementById("numeroCarrito");
//div productos bebidas calientes
const shopBebidasCalientes = document.getElementById("shopBebidasCalientes")

//div productos Acompañantes
//div productos Postres


//Array carrito: base de datos del carrito
carrito = []
 
//sección productos bebidas calientes
bebidasCalientes.forEach((arrayBebidasCalientes) => {
  let divBebidasCalientes = document.createElement("div");
  divBebidasCalientes.classList.add("classProductos");
    divBebidasCalientes.className = "card-body cardsProductos";
    divBebidasCalientes.innerHTML +=`
      <h3 class="card-title">${arrayBebidasCalientes.nombre}</h3>
      <p class="card-text">${arrayBebidasCalientes.categoria}</p>
      <p class="card-text">$${arrayBebidasCalientes.precio}</p>
    `;
    shopBebidasCalientes.append(divBebidasCalientes)
    //boton comprar
    let comprar = document.createElement("button");
    comprar.innerText = "Pedir!";
    comprar.className = "btn addCart btn-primary";
    divBebidasCalientes.append(comprar);
    //verifico si el carrito tiene dos productos iguales y le sumo la cantidad
    comprar.addEventListener("click", () => {
      const repetido = carrito.some((productoRepetido) => productoRepetido.id === arrayBebidasCalientes.id);
      if(repetido === true){
        carrito.map((prod) => {
          if(prod.id === arrayBebidasCalientes.id){
            prod.cantidad++
          }
        })
      } else {
        carrito.push({
            id: arrayBebidasCalientes.id,
            nombre: arrayBebidasCalientes.nombre,
            categoria: arrayBebidasCalientes.categoria,
            precio: arrayBebidasCalientes.precio,
            cantidad: arrayBebidasCalientes.cantidad,
        });
        console.log(carrito)
        carritoContador();
      }
    });

});
/* 
//boton carrito
verCarrito.addEventListener("click", () => {
  bodyCarrito.innerHTML = "";
  carrito.forEach((arrayProductosCarrito) => {
    let divProductosCarrito = document.createElement("div");
    divProductosCarrito.className = "cardsProductosCarrito";
    divProductosCarrito.innerHTML += `
      <h3 class="card-title">${arrayProductosCarrito.nombre}</h3>
      <p class="card-text">${arrayProductosCarrito.categoria}</p>
      <p class="card-text">$${arrayProductosCarrito.precio}</p>
      <p id="${arrayProductosCarrito.id}"></p>
      <select></select>
    `;
    bodyCarrito.append(divProductosCarrito);
  });
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  const totalPedido = document.createElement("div");
  totalPedido.className = "totalPedido";
  totalPedido.innerHTML = `total a pagar por su pedido: $${total}
  `;
  bodyCarrito.append(totalPedido);

})

 */

/* 
//seccion productos acompañamientos
acompañamientos.forEach((arrayAcompañamientos) => {
  let divBebidasCalientes = document.createElement("div");
  divBebidasCalientes.classList.add("classProductos")
    divBebidasCalientes.className = "card-body cardsProductos"
    divBebidasCalientes.innerHTML +=`
      <h3 class="card-title">${arrayBebidasCalientes.nombre}</h3>
      <p class="card-text">${arrayBebidasCalientes.categoria}</p>
      <p class="card-text">$${arrayBebidasCalientes.precio}</p>
    `;
    shopBebidasCalientes.append(divBebidasCalientes)
    //Crear boton comprar
    let comprar = document.createElement("button");
    comprar.innerText = "Pedir!";
    comprar.className = "btn addCart btn-primary";
    divBebidasCalientes.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: arrayBebidasCalientes.id,
            nombre: arrayBebidasCalientes.id,
            categoria: arrayBebidasCalientes.categoria,
            precio: arrayBebidasCalientes.precio,
        });
        console.log(carrito)
    });
});

//section productos postres
bebidasCalientes.forEach((arrayBebidasCalientes) => {
  let divBebidasCalientes = document.createElement("div");
  divBebidasCalientes.classList.add("classProductos")
    divBebidasCalientes.className = "card-body cardsProductos"
    divBebidasCalientes.innerHTML +=`
      <h3 class="card-title">${arrayBebidasCalientes.nombre}</h3>
      <p class="card-text">${arrayBebidasCalientes.categoria}</p>
      <p class="card-text">$${arrayBebidasCalientes.precio}</p>
    `;
    shopBebidasCalientes.append(divBebidasCalientes)
    //Crear boton comprar
    let comprar = document.createElement("button");
    comprar.innerText = "Pedir!";
    comprar.className = "btn addCart btn-primary";
    divBebidasCalientes.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: arrayBebidasCalientes.id,
            nombre: arrayBebidasCalientes.id,
            categoria: arrayBebidasCalientes.categoria,
            precio: arrayBebidasCalientes.precio,
        });
        console.log(carrito)
    });
}); */