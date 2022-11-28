//boton carrito
const mostrarCarrito = () => {
  bodyCarrito.innerHTML = "";
  carrito.forEach((arrayProductosCarrito) => {
    let divProductosCarrito = document.createElement("div");
    divProductosCarrito.className = "cardsProductosCarrito";
    divProductosCarrito.innerHTML += `
      <h3 class="card-title">${arrayProductosCarrito.nombre}</h3>
      <p class="card-text">${arrayProductosCarrito.categoria}</p>
      <p class="card-text">$${arrayProductosCarrito.precio}</p>
      <p id="${arrayProductosCarrito.id}"></p>
      <p>C: ${arrayProductosCarrito.cantidad}</p>
      <p>T: $${arrayProductosCarrito.cantidad * arrayProductosCarrito.precio}</p>
      <img class="eliminarProducto" src="img/iconos/boton-x.png" alt="" type="button" type="button">
      `;

      bodyCarrito.append(divProductosCarrito);

      let eliminar = divProductosCarrito.querySelector(".eliminarProducto");
            
      eliminar.addEventListener("click", () => {
        eliminarProducto(arrayProductosCarrito.id);
      });
  });
    //calculo total a pagar
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalPedido = document.createElement("div");
    totalPedido.className = "totalPedido";
    totalPedido.innerHTML = `total a pagar por su pedido: $${total}
    `;
    bodyCarrito.append(totalPedido);
        
};

verCarrito.addEventListener("click",mostrarCarrito);

//función para eliminar productos del carrito
const eliminarProducto = (id) => {

  const prodElimId = carrito.find((elemento) => elemento.id === id);

  carrito = carrito.filter((carritoId) => {

    return carritoId !== prodElimId;

  });

  carritoContador();
  mostrarCarrito();
};

const carritoContador = () => {
  numeroCarrito.style.display = "block";
  numeroCarrito.innerText = carrito.length;
 
};

//contador de productos del carrito

carritoContador();