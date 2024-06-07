//Creamos la clase "persona"
class Persona {
    constructor (dni,nombre,telefono){
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;

    }
    estado="vivo";
    cambioNombre (nuevoNombre){ //Como las personas pueden cambiarse el nombre, creamos una función dentro de la clase para cambiar nombres
        this.nombre = nuevoNombre;
    }
    morirse(){
        this.estado="muerto";
    }

}

//creamos el objeto jorge
let jorge = new Persona ("1627389Y","Jorge Villa","639193829") 
jorge.dni

//Para hacer que Jorge se muera:
jorge.morirse()

console.log("Ahora Jorge está " +jorge.estado)