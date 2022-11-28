//info de los input
const inputCliente =  document.getElementById("inputCliente");
const inputMesa = document.getElementById("inputMesa");
const botonIngresar =  document.getElementById("botonIngresar");
//tomo los strings del HTML
const titulo = document.getElementById("titulo");
const divTitulo = document.getElementById("divTitulo");
const divMesa = document.getElementById("divMesa");
const imgCarrito = document.getElementById("imgCarrito");
const divProductos = document.getElementById("divProductos");
const divCarrito = document.getElementById("divCarrito");

const cliente = []
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
        divCarrito.style.display = "block";
    }
    
}

//tomo la info del storage
const nombreCliente = localStorage.getItem("usuario");
const numeroMesa = localStorage.getItem("mesa");

//creo el elemento que se va a mostrar una vez el usuario ingrese

//verifico que sea la info valida y cambio el titulo