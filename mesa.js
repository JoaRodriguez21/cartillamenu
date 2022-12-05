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
//titulos productos
const tituloBebidasCalientes = document.getElementById("tituloBebidasCalientes");
const tituloAcompañantes = document.getElementById("tituloAcompañantes");
const tituloPostres = document.getElementById("tituloPostres");

const cliente = []
//guardo info en el storage
botonIngresar.onclick = () => {
    const clienteNuevo = {
        nombre: inputCliente.value,
        mesa: inputMesa.value,
    }
    //Guardo el numero de la mesa en el Storage
    const mesaClienteJSON = inputMesa.value;
    localStorage.setItem("mesaCliente", JSON.stringify(mesaClienteJSON));
    //creo un h4 con su contenido
    const tituloMesa = document.createElement("h4")
    tituloMesa.className = "subTituloIndex"
    //cambio el titulo del sitio
    if(clienteNuevo.nombre && clienteNuevo.mesa){
        tituloMesa.innerText = `El pedido que seleccione es para la mesa nº${JSON.parse(localStorage.getItem("mesaCliente"))}`
        titulo.innerText = `Bienvenido a Coffe Shop ${clienteNuevo.nombre}`
        divTitulo.append(tituloMesa);
        divMesa.remove()
        divCarrito.style.display = "block";
        //Una vez registrada la mesa muestro el nombre muestro los productos y los filtros
        callAPI();
        mostrarBebidasCalientes();
        tituloBebidasCalientes.innerText = "Bebidas Calientes";
        mostrarAcompañantes();
        tituloAcompañantes.innerText = "Acompañantes";
        mostrarPostres();
        tituloPostres.innerText = "Postres";
        mostrarFiltros();
    }
}
//tomo la info del storage
const nombreCliente = localStorage.getItem("usuario");
const numeroMesa = localStorage.getItem("mesa");

//creo el elemento que se va a mostrar una vez el usuario ingrese

//verifico que sea la info valida y cambio el titulo