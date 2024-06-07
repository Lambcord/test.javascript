var nombre = prompt("Escribe tu nombre");

var n1 = prompt(`Hola ${nombre}, escribe un número, por favor`);
n1 = Number(n1)
if(n1 > 10){ 
    alert(`El número ${n1} es mayor a 10`)

}else if(n1 == 10){
    alert(`El número ${n1} es igual a 10`)

}else if(n1 < 10){
    alert(`El número ${n1} es menor a 10`)

}

alert (typeof n1)


