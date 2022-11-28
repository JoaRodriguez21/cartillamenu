//DIV PADRES
//div boton carrito 
const verCarrito = document.getElementById("verCarrito");
//Cantidad de productos que hay en el carrito
const numeroCarrito = document.getElementById("numeroCarrito");
//div productos bebidas calientes
const shopBebidasCalientes = document.getElementById("shopBebidasCalientes");
//div productos Acompañantes
const shopAcompañantes = document.getElementById("shopAcompañantes"); //si no funciona cambiar nombre 
//div productos Postres
const shopPostres = document.getElementById("shopPostres");

//Array carrito: base de datos del carrito
carrito = []
 
//sección productos bebidas calientes
const mostrarBebidasCalientes = () => {
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
};

//sección productos acompañantes
const mostrarAcompañantes = () => {
  acompañamientos.forEach((arrayAcompañantes) => {
    let divAcompañantes = document.createElement("div");
    divAcompañantes.classList.add("classProductos");
      divAcompañantes.className = "card-body cardsProductos";
      divAcompañantes.innerHTML +=`
        <h3 class="card-title">${arrayAcompañantes.nombre}</h3>
        <p class="card-text">${arrayAcompañantes.categoria}</p>
        <p class="card-text">$${arrayAcompañantes.precio}</p>
      `;
      shopAcompañantes.append(divAcompañantes)
      //boton comprar
      let comprar = document.createElement("button");
      comprar.innerText = "Pedir!";
      comprar.className = "btn addCart btn-primary";
      divAcompañantes.append(comprar);
      //verifico si el carrito tiene dos productos iguales y le sumo la cantidad
      comprar.addEventListener("click", () => {
        const repetido = carrito.some((productoRepetido) => productoRepetido.id === arrayAcompañantes.id);
        if(repetido === true){
          carrito.map((prod) => {
            if(prod.id === arrayAcompañantes.id){
              prod.cantidad++
            }
          })
        } else {
          carrito.push({
              id: arrayAcompañantes.id,
              nombre: arrayAcompañantes.nombre,
              categoria: arrayAcompañantes.categoria,
              precio: arrayAcompañantes.precio,
              cantidad: arrayAcompañantes.cantidad,
          });
          console.log(carrito)
          carritoContador();
        }
      });
  });
  };

//sección Postres
const mostrarPostres = () => {
  postres.forEach((arrayPostres) => {
    let divPostres = document.createElement("div");
    divPostres.classList.add("classProductos");
      divPostres.className = "card-body cardsProductos";
      divPostres.innerHTML +=`
        <h3 class="card-title">${arrayPostres.nombre}</h3>
        <p class="card-text">${arrayPostres.categoria}</p>
        <p class="card-text">$${arrayPostres.precio}</p>
      `;
      shopPostres.append(divPostres)
      //boton comprar
      let comprar = document.createElement("button");
      comprar.innerText = "Pedir!";
      comprar.className = "btn addCart btn-primary";
      divPostres.append(comprar);
      //verifico si el carrito tiene dos productos iguales y le sumo la cantidad
      comprar.addEventListener("click", () => {
        const repetido = carrito.some((productoRepetido) => productoRepetido.id === arrayPostres.id);
        if(repetido === true){
          carrito.map((prod) => {
            if(prod.id === arrayPostres.id){
              prod.cantidad++
            }
          })
        } else {
          carrito.push({
              id: arrayPostres.id,
              nombre: arrayPostres.nombre,
              categoria: arrayPostres.categoria,
              precio: arrayPostres.precio,
              cantidad: arrayPostres.cantidad,
          });
          console.log(carrito)
          carritoContador();
        }
      });
  });
  };








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