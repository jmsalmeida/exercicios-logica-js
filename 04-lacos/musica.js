/**
 * 1- Crie um programa que, dado um número inteiro positivo, imprima todos os versos da música:
 * 
 * 250 kilômetros! 250 kilômetros!
 * Pare um pouquinho, descanse um pouquinho...
 * 250 kilômetros!
 * 
 * 249 kilômetros! 249 kilômetros! 
 * Pare um pouquinho, descanse um pouquinho...
 * 249 kilômetros!
 * 
 * 2- Faça com que o verso com 1 kilômetro não seja impresso no plural:
 * 
 * 1 kilômetro! 1 kilômetro! 
 * Pare um pouquinho, descanse um pouquinho...
 * 1 kilômetro!
 */

 let numero = 250;

 for(let i = numero; i >= 1; i--){
    let km = 'kilometros';
    if (i != 1){
        console.log(`${i} ${km}! ${i} ${km}!\nPare um pouquinho, descanse um pouquinho...\n${i} ${km}! \n`);
    } else {
        km = 'kilometro';
        console.log(`${i} ${km}! ${i} ${km}!\nPare um pouquinho, descanse um pouquinho...\n${i} ${km}! \n`);
    }
 }