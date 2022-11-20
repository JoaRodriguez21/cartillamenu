//info de los input
const inputCliente =  document.getElementById("inputCliente")
const inputMesa = document.getElementById("inputMesa")
const botonIngresar =  document.getElementById("botonIngresar")
//tomo los strings del HTML
const titulo = document.getElementById("titulo")
const divTitulo = document.getElementById("divTitulo")
const divMesa = document.getElementById("divMesa")
const imgCarrito = document.getElementById("imgCarrito")
const divProductos = document.getElementById("divProductos")

const cliente = 
//guardo info en el storage
botonIngresar.onclick = () => {
    const clienteNuevo = {
        nombre: inputCliente.value,
        mesa: inputMesa.value,
    }
    const clienteNuevoJSON = localStorage.setItem("Cliente", JSON.stringify(clienteNuevo))
    //creo un h4 con su contenido
    const tituloMesa = document.createElement("h4")
    tituloMesa.innerText = `El numero de mesa para ${clienteNuevo.nombre} es ${clienteNuevo.mesa}`
    //cambio el titulo del sitio
    if(clienteNuevo.nombre && clienteNuevo.mesa){
        titulo.innerText = `Bienvenido a Cofe Shop, ya puedes realizar tu pedido`
        divTitulo.append(tituloMesa)
        divMesa.remove()
        imgCarrito.innerHTML = `<div class="contImgCarrito">
        <img src="img/iconos/carrito.svg" alt="" type="button" class="logoCarrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasRightLabel">Carrito</h3>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" id="divCarrito">
          ...
        </div>
      </div>`
    }
    
}

//tomo la info del storage
const nombreCliente = localStorage.getItem("usuario")
const numeroMesa = localStorage.getItem("mesa")

//creo el elemento que se va a mostrar una vez el usuario ingrese

//verifico que sea la info valida y cambio el titulo