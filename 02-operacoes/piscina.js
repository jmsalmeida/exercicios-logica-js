/**
 * 1- Crie um programa que utilize as 3 dimensões de uma piscina para
 * calcular quantos litros de água ela comporta em litros. Imprima apenas o 
 * resultado no console. 
 * 
 * Dica: 1m³ = 1000 litros
 * 
 * Ex: Uma piscina com o comprimento de 10 metros, largura de 5 metros e
 * profundidade de 2 metros deve imprimir como resultado 100000.
 * 
 * 2- Faça com que o programa imprima o resultado de forma amigável.
 * 
 * Ex: A piscina comporta 50000 litros de água  
 */

let piscina = {
    comprimento: Number(15.0),
    largura: Number(8.0),
    profundidade: Number(2.5)
}

const calculaMetrosCubicos = function(comprimento, largura, profundidade) {
    let volume = comprimento * largura * profundidade;
    return volume;
}

let metrosCubicos = calculaMetrosCubicos(piscina.comprimento, piscina.largura, piscina.profundidade);

const calculaLitros = function(metrosCubicos){
    let litros = metrosCubicos * 1000;
    return litros;
}

console.log('Sua piscina possui ' + metrosCubicos + 'm³ e suporta ' + calculaLitros(metrosCubicos) + ' litros.')


