import { suma, resta, multiplica, divide } from './operaciones.js';

function resultado() {
    var numero1 = parseFloat(document.getElementById('numero1').value); 
    var numero2 = parseFloat(document.getElementById('numero2').value); 
    var op = document.getElementById('simbolos').value;

    let result;

    switch(op) {
        case '+':
            result = suma(numero1, numero2);
            break;
        case '-':
            result = resta(numero1, numero2);
            break;
        case '*':
            result = multiplica(numero1, numero2);
            break;
        case '/':
            if (numero2 !== 0) {
                result = divide(numero1, numero2);
            } else {
                result = "Error: División por cero";
            }
            break;
        default:
            result = "Operación no válida";
    }

    document.getElementById('result').innerHTML = result;
}
document.getElementById('calculateButton').addEventListener('click', resultado);