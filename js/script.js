var texto = document.getElementById("texto"); // Encuentra el elemento "p" en el sitio
var input= document.getElementById("areatexto");
var contenedor= document.getElementById("minicontenedor");
var cajaBoton = document.getElementById("cajaBoton");
var escribir = document.getElementById("caja");


texto.onclick = ocultar; // Agrega función onclick al elemento



document.body.onload = function() {
  input.style.display = "none" ;//Cargo la pagina con el input oculto
  cajaBoton.style.display = " none"; //oculto la caja del boton
  
}


//funcion ocultar letra y mostrar input
function ocultar() {
  texto.style.display = "none";
  input.style.display = "block";
}



//funcion para ocultar y mostrar un div
function ocultarMostrarImagenyTexto(numero){
   if (numero == 1) {
    contenedor.style.display = "none";
   } else {
    contenedor.style.display = "block";
   }
}
var variable
//funcion para encriptar frase
function encriptolafrase(){
    if (input.value != "") {
    escribir = document.getElementById("cajatexto");
    variable = document.rellenar.texto.value 
    variable = variable.toLowerCase();
    variable = variable.replace(/e/g,'enter')
    variable = variable.replace(/i/g,'imes')
    variable = variable.replace(/a/g,'ai')
    variable = variable.replace(/o/g,'over')
    variable = variable.replace(/u/g,'ufat')
    escribir.innerHTML=  variable
    cajaBoton.style.display = "block"
    texto.style.display = "block"
    input.style.display = "none"
    input.value = ""
    ocultarMostrarImagenyTexto(1);
    } else {
      alert("Debe ingresar una frase al menos")
    }
    
    
}

function desifrar(){
  if (input.value != "" && (input.value.includes('enter')|input.value.includes("imes")||input.value.includes("ai") ||input.value.includes("ufat") || input.value.includes("over"))) 
  {
    escribir = document.getElementById("cajatexto");
    variable = document.rellenar.texto.value 
    variable = variable.toLowerCase();
    variable = variable.replace(/enter/g,'e')
    variable = variable.replace(/imes/g,'i')
    variable = variable.replace(/ai/g,'a')
    variable = variable.replace(/over/g,'o')
    variable = variable.replace(/ufat/g,'u')
    escribir.innerHTML=  variable;
    cajaBoton.style.display = "block"
    texto.style.display = "block"
    input.style.display = "none"
    input.value = ""
    ocultarMostrarImagenyTexto(1);
    } else {
      alert("Ninguna Frase para desifrar")
    }
}

function copiartexto(){
  input.value = variable
  texto.style.display = "none"
  input.style.display = "block"

}

document.rellenar.encriptar.onclick = encriptolafrase
bottoncopiar.onclick = copiartexto
document.rellenar.desencriptar.onclick = desifrar


