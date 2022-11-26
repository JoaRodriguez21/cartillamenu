//DIV PADRES
//div productos bebidas calientes
const shopBebidasCalientes = document.getElementById("shopBebidasCalientes")
//boton carrito
const verCarrito = document.getElementById("verCarrito");
//boton seguir comprando
const seguirComprando = document.getElementById("seguirComprando");

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
    //Crear boton comprar
    let comprar = document.createElement("button");
    comprar.innerText = "Pedir!";
    comprar.className = "btn addCart btn-primary";
    divBebidasCalientes.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: arrayBebidasCalientes.id,
            nombre: arrayBebidasCalientes.nombre,
            categoria: arrayBebidasCalientes.categoria,
            precio: arrayBebidasCalientes.precio,
        });
        console.log(carrito)
    });
});

//revisar
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
  const totalBuying = document.createElement("div");
  totalBuying.className = "totalPedido";
  totalBuying.innerHTML = `total a pagar por su pedido: $${total}
  `;
  bodyCarrito.append(totalBuying)

})

//revisar

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