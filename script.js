//Sistema de login
    //Le pido los datos al usuario

//variables

alert("Registrate para entrar en la plataforma.");
const año = parseInt(prompt("Ingrese su año de nacimiento"));
let edad = 2022 - año;

//Condicionales (se le pide el año al usuario para calcular su edad)

if(edad>=18 && edad<=100){
    alert("Listo! ahora falta crear un usuario y una contraseña")
} else if(edad>100 || edad<100){
    alert("Los datos ingresados son invalidos")
} else {
    alert("Necesitas tener más de 18 años para ingresar a la plataforma")
}

//declaro la variable usuario2
let usuario2

while(usuario =! usuario2){
    const  usuario = prompt("Ingrese su nombre de usuario:");
    console.log(usuario);

    const usuario2 = prompt("vuelva a ingresar el nombre de usuario");
    if(usuario === usuario2){
        alert("Ahora ingrese una contraseña:");
        break
    } else {
        alert("el nombre de usuario no es el mismo al ingresado");
        continue
    }
}

//declaro la variable contraseña2
const contraseña = prompt("Contraseña");
console.log(contraseña);
let contraseña2

while(contraseña != contraseña2){

    const contraseña2 = prompt("vuelve a ingresar la contraseña");
    if(contraseña === contraseña2){
        alert("Gracias por registrarte! ahora inicia sesión para ingresar a la plataforma");
        break
    } else {
        alert("la contraseña no es la misma a la ingresada");
        continue
    }
}

let usuarioInicio
let contraseñaInicio

//CICLOS
    //ciclo for (5 intentos de inicio de sesión)
while(usuario != usuarioInicio || contraseña != contraseñaInicio){
    for(let i = 5; i>=0;i--){
        const usuarioInicio = prompt("Ingrese el nombre de usuario: ");
        const contraseñaInicio = prompt("Ingresa la contraseña ");
        if(usuarioInicio === usuario && contraseñaInicio === contraseña){
            alert("Inicio de sesión correcto, bienvenido "+usuario);
            console.log("el usuario ingresa a la plataforma")
            break
        } else {
            alert("Usuario o contraseña incorrecto, le quedan "+i+" intentos");
            console.log("el usuario no ingresa a la plataforma") 
        }
    }
    alert("Inicio de sesión caducado")
    continue
}
