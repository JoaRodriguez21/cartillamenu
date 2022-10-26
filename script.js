//Sistema de login del sitio
    //Le pido los datos al usuario

//funciones

function calculoEdad(p2){
    let resultado = 2022 - p2
    return resultado
};

//Condicionales (se le pide el año al usuario para calcular su edad)
alert("Registrate para entrar en la plataforma.");
const año = parseInt(prompt("Ingrese su año de nacimiento"));
let edad = calculoEdad(año);
console.log(edad)

while(edad<18 || edad>100){
    if(edad>=18 && edad<=100){
        break
    } else if(edad>100 || edad<=0){
        alert("Los datos ingresados son invalidos")
    } else {
        alert("Necesitas tener más de 18 años para ingresar a la plataforma")
    }
}

alert("Edad valida! Ahora ingresá un usuario y una contraseña")

//declaro la variables de usuarios

let  usuario = prompt("Ingrese su nombre de usuario");
console.log(usuario);
let usuario2 = prompt("Vuelva a ingresar el nombre de usuario");
console.log(usuario2);
    
while(usuario != usuario2){
    alert("El nombre de usuario no es el mismo al ingresado, intentelo de nuevo.");
    let  usuario = prompt("Ingrese su nombre de usuario");
    console.log(usuario);
    let usuario2 = prompt("Vuelva a ingresar el nombre de usuario");
    console.log(usuario2);
    if(usuario === usuario2){
        break
    } else {
        continue
    }
}

alert("Ahora ingrese una contraseña:");

//declaro la variables contraseñas

let contraseña = prompt("Contraseña");
console.log(contraseña);
let contraseña2 = prompt("Vuelve a ingresar la contraseña");
console.log(contraseña2)

while(contraseña != contraseña2){
    alert("la contraseña no es la misma a la ingresada, intentelo de nuevo")
    let contraseña = prompt("Contraseña");
    console.log(contraseña);
    let contraseña2 = prompt("Vuelve a ingresar la contraseña");
    console.log(contraseña2)
    if(contraseña === contraseña2){
        break
    } else {
        continue
    }
}

alert("Gracias por registrarte! ahora inicia sesión para ingresar a la plataforma");

let usuarioInicio
let contraseñaInicio

//CICLOS
    //ciclo for (5 intentos de inicio de sesión)
while(usuario2 != usuarioInicio || contraseña2 != contraseñaInicio){
    let usuarioInicio = prompt("Ingrese el nombre de usuario:");
    let contraseñaInicio = prompt("Ingresa la contraseña");
    if(usuarioInicio != usuario || contraseñaInicio != contraseña){
        alert(`Usuario o contraseña incorrecto, vuelva a intentarlo`)
        console.log("el usuario no ingresa a la plataforma") 
        continue
    } else {
        break
    }
}
alert(`Inicio de sesión correcto, bienvenido ${usuario}`);
console.log("el usuario ingresa a la plataforma")