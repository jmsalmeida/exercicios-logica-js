/**
 * Crie um programa que informa o nome do dia da semana baseado em um
 * número de 1 à 7. O número deve ser informado como uma variável.
 * 
 * Ex: O dia 2 é segunda-feira. 
 */

// const dia = 7;

// switch (dia) {
//     case 0:
//         console.log('Sábado');
//         break;
//     case 1:
//         console.log('Domingo');
//         break;
//     case 2:
//         console.log('Segunda-feira');
//         break;
//     case 3:
//         console.log('Terça-feira');
//         break;
//     case 4:
//         console.log('Quarta-feira');
//         break;
//     case 5:
//         console.log('Quinta-feira');
//         break;
//     case 6:
//         console.log('Sexta-feira');
//     default:
//         console.log('Insira um número valido de 0 a 6');
// }

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day)