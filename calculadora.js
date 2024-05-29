let contadorOperaciones = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potenciacion: 0,
    radicacion: 0,
    areaTriangulo: 0,
    perimetroTriangulo: 0,
    areaCuadrado: 0,
    perimetroCuadrado: 0,
    areaRectangulo: 0,
    perimetroRectangulo: 0
};


function selectMode() {
    let mode = prompt("Select calculator type: normal: 1, scientific: 2, special:3");

    switch(mode.toLowerCase()) {
        case "1":
            calculadoraNormal();
            break;
        case '2':
            calculadoraCientifica();
            break;
        case '3':
            calculadoraEspecial();
            break;
        default:
            alert("Modo no válido.");
    }

    mostrarContadores();
}

function mostrarContadores() {
    let mensaje = "Operation counters:\n";
    for (let operacion in contadorOperaciones) {
        mensaje += `${operacion}: ${contadorOperaciones[operacion]} veces\n`;
    }
    alert(mensaje);
}

function calculadoraNormal() {
    let operacion = prompt("Select an operation: suma, resta, multiplicacion, division");
    let numberOne = parseFloat(prompt("Enter the first number"));
    let numberTwo = parseFloat(prompt("Enter the second number"));
    let result;

    switch (operacion.toLowerCase()) {
        case 'suma':
            result = numberOne + numberTwo;
            contadorOperaciones.suma++;
            break;
        case 'resta':
            result = numberOne - numberTwo;
            contadorOperaciones.resta++;
            break;
        case 'multiplicacion':
            resultado = numberOne * numberTwo;
            contadorOperaciones.multiplicacion++;
            break;
        case 'division':
            resultado = numberOne / numberTwo;
            contadorOperaciones.division++;
            if (numberTwo === 0) {
                alert("No se puede dividir por cero.");
                
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

function calculadoraCientifica() {
    let operacion = prompt("Select an operation: suma, resta, multiplicacion, division, potenciacion, radicacion");
    let a = parseFloat(prompt("Enter the first number"));
    let b;
    if (operacion !== 'radicacion') {
        b = parseFloat(prompt("Enter the second number"));
    }
    let resultado;

    switch (operacion.toLowerCase()) {
        case 'suma':
            resultado = a + b;
            contadorOperaciones.suma++;
            break;
        case 'resta':
            resultado = a - b;
            contadorOperaciones.resta++;
            break;
        case 'multiplicacion':
            resultado = a * b;
            contadorOperaciones.multiplicacion++;
            break;
        case 'division':
            resultado = a / b;
            contadorOperaciones.division++;
            
            break;
        case 'potenciacion':
            resultado = Math.pow(a, b);
            contadorOperaciones.potenciacion++;
            break;
        case 'radicacion':
            resultado = Math.sqrt(a);
            contadorOperaciones.radicacion++;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`The result of the ${operacion} is: ${resultado}`);
}

function calculadoraEspecial() {
    let figura = prompt("Select a shape: triangle, square, rectangle");
    let operacion = prompt("Select an operation: area, perimeter");
    let resultado;

    switch (figura.toLowerCase()) {
        case 'triangulo':
            let base = parseFloat(prompt("Enter the base of the triangle"));
            let altura = parseFloat(prompt("Enter the height of the triangle"));
            let lado1 = parseFloat(prompt("Enter the first side of the triangle"));
            let lado2 = parseFloat(prompt("Enter the second side of the triangle"));
            let lado3 = parseFloat(prompt("Enter the third side of the triangle"));
            if (operacion === 'area') {
                resultado = (base * altura) / 2;
                contadorOperaciones.areaTriangulo++;
            } else if (operacion === 'perimetro') {
                resultado = lado1 + lado2 + lado3;
                contadorOperaciones.perimetroTriangulo++;
            }
            break;
        case 'cuadrado':
            let lado = parseFloat(prompt("Enter the side of the square"));
            if (operacion === 'area') {
                resultado = lado * lado;
                contadorOperaciones.areaCuadrado++;
            } else if (operacion === 'perimetro') {
                resultado = 4 * lado;
                contadorOperaciones.perimetroCuadrado++;
            }
            break;
        case 'rectangulo':
            let largo = parseFloat(prompt("Enter the length of the rectangle"));
            let ancho = parseFloat(prompt("Enter the width of the rectangle"));
            if (operacion === 'area') {
                resultado = largo * ancho;
                contadorOperaciones.areaRectangulo++;
            } else if (operacion === 'perimetro') {
                resultado = 2 * (largo + ancho);
                contadorOperaciones.perimetroRectangulo++;
            }
            break;
        default:
            alert("Invalid figure");
            return;
    }

    alert(`The result of the ${operacion} of ${figura} is: ${resultado}`);
}