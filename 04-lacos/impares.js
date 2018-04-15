/**
* Crie um programa que utiliza os números ímpares encontrados entre numeroInicial
* e numeroFinal e realiza a soma entre eles.
*
* Ex:
* 
* numeroInicial = 2
* numeroFinal = 11
* impares = 3, 5, 7, 9, 11
* soma = 35
*/

let numeros = [2,3,4,5,6,7,8,9,10,11];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i]%2 != 0){
        soma += numeros[i]; 
    }
}

console.log(soma);
