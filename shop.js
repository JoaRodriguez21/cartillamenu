//DIV PADRES
//div boton carrito 
const verCarrito = document.getElementById("verCarrito");
//boton pedir
const btnPedir = document.getElementById("btnPedir")
//Cantidad de productos que hay en el carrito
const numeroCarrito = document.getElementById("numeroCarrito");
//div productos bebidas calientes
const shopBebidasCalientes = document.getElementById("shopBebidasCalientes");
//div productos Acompañantes
const shopAcompañantes = document.getElementById("shopAcompañantes");
//div productos Postres
const shopPostres = document.getElementById("shopPostres");
//div contenedor filtros
const divFiltros = document.getElementById("divFiltros");
//div productos del pedido
const prodPedidos = document.getElementById("productosPedidos");
//div de los productos traidos con la API externa
const prodApi = document.getElementById("productosApi");
const carrusel = document.querySelector(".contProdApi");
//contenedores con clases display None
const contProductosApi = document.getElementById("contProductosApi");
const contDivProductos = document.getElementById("contDivProductos");

//FILTRO BUSCAR PRODUCTOS
//función mostrar filtros
const mostrarFiltros = () => {
  let divBuscarProducto = document.createElement("div");
  divBuscarProducto.className = "input-group mb-3 contentInput";
  divBuscarProducto.innerHTML = `
    <input id="buscador" type="text" class="form-control inputBuscar" placeholder="Buscar producto..." aria-label="" aria-describedby="basic-addon1">
  `;
  divFiltros.append(divBuscarProducto);
  //funcionamiento de la función:
  document.addEventListener("keyup", tipeo =>{
    if (tipeo.target.matches("#buscador")){
      document.querySelectorAll(".articulo").forEach(prodcards => {
        prodcards.textContent.toLowerCase().includes(tipeo.target.value.toLowerCase())
        ?prodcards.classList.remove("filtroBuscador")
        :prodcards.classList.add("filtroBuscador")
      })
    }
    console.log(tipeo.target.value)
  })
}

//Aplico FETCH
//API con diferentes tipos de cafes, descripciones y ingredientes
const callAPI = () => {
fetch("https://api.sampleapis.com/coffee/hot")
  .then(resp => resp.json())
  .then(data => {
      data.forEach((arrayDataAPI) => {
      let divProdApi = document.createElement("div");
        divProdApi.innerHTML +=`
          <div class="contApiImg"> 
            <img class="card-img-top imgApi" src="${arrayDataAPI.image}" alt="Card image cap">
            <div class="capaIndex">
              <h2 class="textTitleApi">${arrayDataAPI.title}</h2>
              <p class="textIngredientesApi"> Ingredientes: ${arrayDataAPI.ingredients}</p>
            </div>
          </div>
        </div>
        `;
        prodApi.append(divProdApi)
    });
  })
  .catch(e => console.error(new Error(e)))
}

//GALERIA SCROLL CON APIs
const carruselApi = () => {
contProductosApi.style.display = "block";
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if(carrusel.scrollLeft === maxScrollLeft){
      step = step * -1
    } else if (carrusel.scrollLeft === 0){
      step = step * 1;
    }

  }, 10);
}

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () =>{
  stop();
})

carrusel.addEventListener("mouseout", () =>{
  start();
})
start();
}



//Array carrito: base de datos del carrito
carrito = []
 
//sección productos bebidas calientes
const mostrarBebidasCalientes = () => {
contDivProductos.style.display = "block";
bebidasCalientes.forEach((arrayBebidasCalientes) => {
  let divBebidasCalientes = document.createElement("div");
  divBebidasCalientes.classList.add("classProductos");
    divBebidasCalientes.className = "card-body cardsProductos articulo";
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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto añadido al carrito',
        showConfirmButton: true,
        timer: 1500,
      });
    });
});
};

//sección productos acompañantes
const mostrarAcompañantes = () => {
  acompañamientos.forEach((arrayAcompañantes) => {
    let divAcompañantes = document.createElement("div");
    divAcompañantes.classList.add("classProductos");
      divAcompañantes.className = "card-body cardsProductos articulo";
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto añadido al carrito',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });
  };

//sección Postres
const mostrarPostres = () => {
  postres.forEach((arrayPostres) => {
    let divPostres = document.createElement("div");
    divPostres.classList.add("classProductos");
      divPostres.className = "card-body cardsProductos articulo";
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto añadido al carrito',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });
  };