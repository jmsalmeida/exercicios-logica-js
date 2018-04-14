/**
 * Crie um programa que determina se um número é par ou ímpar.
 * O número deve ser informado através de uma variável.
 * 
 * Ex: O número 2 é par.
 */

const numeroPar = function (num) {
    let resultado = num % 2;

    if (resultado != 0) {
        return "Não é par";
    } else {
        return "É par";
    }
}

let numero = 5;
console.log(numeroPar(numero));
