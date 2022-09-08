// Defino las variables para los textarea
let textoEncriptado = document.querySelector(".texto-encriptado")
let textoDesencriptado = document.querySelector(".texto-desencriptado")
// Defino las letras especiales 
const letras = /^[a-z0-9 .,;:()¡!¿?""]*$/

// funcion para determinar las letras que se deben cambiar 
function encriptar(texto){

    let letrasEncriptadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] //matriz de encriptación 
    
    texto = texto.toLowerCase() // Convierte el texto en minusculas

    for(let i = 0; i<letrasEncriptadas.length; i++){
        if(texto.includes(letrasEncriptadas[i][0])){ //verificar si tiene vocales
            texto = texto.replaceAll(letrasEncriptadas[i][0], letrasEncriptadas[i][1]) //reemplazar 
        }
    }

    return texto; 
}

//funcion para el boton encriptar 
function bEncriptar(){

    if(textoEncriptado.value == ""){
        alert("ingrese texto")
    }

    else if(!letras.test(textoEncriptado.value) || textoEncriptado.value.length === 0){
        alert("Lea la advertencia")
    }

    else{

        let mensaje = encriptar(textoEncriptado.value) //Lo que el usuario escribe
        textoDesencriptado.value = mensaje
        textoDesencriptado.style.backgroundImage = "none" // borrar imagen
        textoEncriptado.value = ""
    }


}

// funcionamiento del boton encriptar 
let botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click", bEncriptar)

// funcion para determinar las letras que se deben cambiar 
function desencriptar(texto){

    let letrasDesencriptadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    
    texto = texto.toLowerCase() // Convierte el texto en minusculas

    for(let i = 0; i<letrasDesencriptadas.length; i++){
        if(texto.includes(letrasDesencriptadas[i][1])){ //verificar si tiene vocales
            texto = texto.replaceAll(letrasDesencriptadas[i][1], letrasDesencriptadas[i][0]) //reemplazar 
        }
    }

    return texto; 
}

//funcion para el boton desencriptar
function bDesencriptar(){

    if(textoEncriptado.value == ""){
        alert("ingrese texto")
    }

    else if(!letras.test(textoEncriptado.value) || textoEncriptado.value.length === 0){
        alert("Lea la advertencia")
    }

    else{
        let mensaje = desencriptar(textoEncriptado.value) //Lo que el usuario escribe
        textoDesencriptado.value = mensaje
        textoDesencriptado.style.backgroundImage = "none" // borrar imagen
        textoEncriptado.value = ""
    }


} 

//funcionalidad del boton desencriptar
let botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", bDesencriptar)

// función para copiar el texto del textarea
function bCopiar(){
    textoDesencriptado.select()
    navigator.clipboard.writeText(textoDesencriptado.value)
    textoDesencriptado.value = ""
}

//funcionalidad del boton copiar 
let botonCopiar = document.getElementById("copiar");
botonCopiar.addEventListener("click", bCopiar)