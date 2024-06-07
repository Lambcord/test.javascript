//1. Función que escriba en la pantalla si un número que le entra es par o no
var nombre = prompt("Escribe tu nombre");

function esPar (){
    var n1 = prompt(`Hola ${nombre}, escribe un número, por favor`);
n1 = Number(n1)
if(n1%2 == 0){ 
    alert(`El número ${n1} es PAR`)

}else{
    alert(`El número ${n1} es IMPAR`)
}

}
esPar ()



//2. Función que compruebe si un número es primo (es divisible entre 1 y sí mismo). Si un número es divisible por otro, su resto es 0.
let variableAComprobarSiEsPrimo = prompt ("Dime un número")
function esPrimo (x){
    let esPrimo = true; 
    for (let i = 2; i<x; i++){ //Empieza en 2 y llega hasta <x porque entre esos el resto es 0, así que no queremos tenerlos en cuenta en el if
        if (x%i!=0){ 
            esPrimo= false; //Si el resto de X entre i (i va desde 2 hasta x-1) es distinto a 0, entonces X no es primo
        }
            
    }
    return esPrimo;

}

alert ("Que el número "+variableAComprobarSiEsPrimo+" sea primo es" + esPrimo (variableAComprobarSiEsPrimo))


//3. Función que compruebe si un número es primo (es divisible entre 1 y sí mismo). Si un número es divisible por otro, su resto es 0.
let variableAComprobarSiEsPrimo = prompt ("Dime un número")
function esPrimo (x){
    let esPrimo = true;
    for (let i = 2; i<x; i++){
        if (x%i == 0){
            return false;
        }
            
    }
    return true;

}

alert ("Que el número "+variableAComprobarSiEsPrimo+" sea primo es " + esPrimo (variableAComprobarSiEsPrimo))


//4. Función que muestre los 100 primeros números primos
function esPrimo (x){
    for (let i = 2; i<x; i++){
        if (x%i == 0){
            return false;
        }
            
    }
    return true;

}

let heAcabado = false;
let contador = 2;
let cuantosPrimosLlevo = 0;
while (!heAcabado){ //Mientras no he acabado, si contador es primo, lo muestro por consola y sumo 1 a cuantosPrimosLlevo
    if (esPrimo(contador)){
        console.log(contador)
        cuantosPrimosLlevo++;
    }
    if(cuantosPrimosLlevo == 999){
        heAcabado = true;
    }
    contador++;
}