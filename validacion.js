//Haz tú validación en javascript acá

function valida(input){
    const tipoDeImput = input.dataset.tipo;
    if(validadores[tipoDeImput]){
        validadores[tipoDeImput](input);
    }
}

const validadores = {
    nombre: (input) => validarNombre(input),
};


function validarNombre(nombre){
    console.log("Hola" + nombre)
}