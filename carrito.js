//boton carrito
const mostrarCarrito = () => {
  bodyCarrito.innerHTML = "";
  carrito.forEach((arrayProductosCarrito) => {
    let divProductosCarrito = document.createElement("div");
    divProductosCarrito.className = "card cardsProductosCarrito";
    divProductosCarrito.innerHTML += `
      <div>
        <h3 class="card-title tituloProdCarrito">${arrayProductosCarrito.nombre}</h3>
        <p class="card-text">${arrayProductosCarrito.categoria}</p>
      </div>
      <div>
        <p class="card-text">Precio unitario</p>
        <p class="card-text">$${arrayProductosCarrito.precio}</p>
      </div>
      <p id="${arrayProductosCarrito.id}"></p>
      <div>
        <p class="card-text">Cantidad</p>
        <p>${arrayProductosCarrito.cantidad}</p>
      </div>
      <p>Total: $${arrayProductosCarrito.cantidad * arrayProductosCarrito.precio}</p>
      <img class="eliminarProducto" src="img/iconos/boton-x.png" alt="" type="button" type="button">
      `;

      bodyCarrito.append(divProductosCarrito);

      let eliminar = divProductosCarrito.querySelector(".eliminarProducto");
            
      eliminar.addEventListener("click", () => {
        Swal.fire({
          title: '¿Estas seguro de borrar el producto del carrito?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar producto'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Producto eliminado del carrito',
              'El producto se eliminó con éxito',
              'success'
            )
            eliminarProducto(arrayProductosCarrito.id);
          }
        })
        
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

//función de contador de productos UTILIZANDO JSON Y STORAGE
const carritoContador = () => {
  numeroCarrito.style.display = "block";
  const carritoLength = carrito.length;
  //numeroCarrito.innerText = carrito.length;
 localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
 numeroCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

pedidoCliente = [];
//boton pedir
enviarPedido = () => {
  btnPedir.addEventListener("click", () =>{
    Swal.fire({
      title: '¿Estas seguro que quieres realizar el pedido?',
      text: `Un mozo le llevara su pedido a la mesa nº${JSON.parse(localStorage.getItem("mesaCliente"))}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#42d434',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar pedido'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'El pedido fue realizado con éxito!',
          'En breves tendrá su pedido',
          'success'
          )
          pedidoCliente = [...carrito,...pedidoCliente];
          console.log(pedidoCliente);
          prodPedidos.innerHTML = "";
          titulo.innerText =`Su pedido está siendo preparado`
          const divBotonPedido = document.createElement("button");
          divBotonPedido.className = "btn btn-outline-success btnVerPedido";
          divBotonPedido.setAttribute("type", "button");
          divBotonPedido.setAttribute("data-bs-toggle","offcanvas");
          divBotonPedido.setAttribute("data-bs-target", "#offcanvasScrolling");
          divBotonPedido.setAttribute("aria-controls", "offcanvasScrolling");
          divBotonPedido.innerText = "Ver mi pedido";
          btnPedidos.append(divBotonPedido)
/*           divTitulo.append(divBotonPedido);
 */

          pedidoCliente.forEach((arrayPedidoCliente) => {
            let divPedidoCliente = document.createElement("div");
            divPedidoCliente.className = "card cardsProductosCarrito";
            divPedidoCliente.innerHTML += `
            <div>
            <h3 class="card-title tituloProdCarrito">${arrayPedidoCliente.nombre}</h3>
            <p class="card-text">${arrayPedidoCliente.categoria}</p>
            </div>
            <p id="${arrayPedidoCliente.id}"></p>
            <div>
            <p class="card-text">Cantidad: ${arrayPedidoCliente.cantidad}</p>
            </div>
            `;
            prodPedidos.append(divPedidoCliente);
          })
        
        carrito = [];
        mostrarCarrito();
        carritoContador();

      }
    })
  });
};
enviarPedido()