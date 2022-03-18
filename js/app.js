"use strict"
console.log("Aplicacion Calculadora");

function sumar() {
    const forma = document.getElementById("forma");
    let operadorA = forma["operandoA"];
    let operadorB = forma["operandoB"];
    let resultado = parseInt(operadorA.value) + parseInt(operadorB.value);
    if (isNaN(resultado)) {
        resultado = "La operacion no incluye numeros";
    }
    document.getElementById("resultadoSuma").innerHTML = `Resultado: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}

function restar() {
    const forma = document.getElementById("forma");
    let operadorA = forma["operandoA"];
    let operadorB = forma["operandoB"];
    /*
    let resultado = parseInt(operadorA.value) - parseInt(operadorB.value);
    if (isNaN(resultado)) {
        resultado = "La operacion no incluye numeros";
    }
    document.getElementById("resultadoResta").innerHTML = `resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
    */
    let resultado;
    if (parseInt(operadorA.value) < 0 || parseInt(operadorB.value) < 0) {
        resultado = "La operacion no incluye valores validos";
    }else{
        resultado = parseInt(operadorA.value) - parseInt(operadorB.value);
    }
    document.getElementById("resultadoResta").innerHTML = `resultado: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}