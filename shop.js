//DIV PADRES
const shopBebidasCalientes = document.getElementById("shopBebidasCalientes")

//Array carrito: base de datos del carrito
carrito = []
 
bebidasCalientes.forEach((arrayBebidasCalientes) => {
  let divBebidasCalientes = document.createElement("div");
  divBebidasCalientes.classList.add("classProductos")
    divBebidasCalientes.innerHTML +=`
    <div class="card-body" style="width: 18rem;">
      <h3 class="card-title">${arrayBebidasCalientes.nombre}</h3>
      <p class="card-text">${arrayBebidasCalientes.categoria}</p>
      <p class="card-text">$${arrayBebidasCalientes.precio}</p>
    </div>
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