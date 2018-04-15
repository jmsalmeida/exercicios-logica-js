/**
 * 1- Crie um programa que soma todos os números do vetor numeros.
 * 2- Faça com que o programa some apenas os números pares.
 * 3- Faça com que o programa mostre o resultado da soma dos números pares
 *      e da soma dos números ímpares separadamente.
 */

let numeros = [10, 2, 4, 67, 81, 92, 10, 4, 71, 14];
let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        somaPares += numeros[i];
        // console.log(numeros[i])
    } else if(numeros[i] % 2 != 0) {
        somaImpares += numeros[i];
    };
};

console.log(`A soma dos numeros pares é ${somaPares}.\nE a soma dos numeros impares é ${somaImpares}`);