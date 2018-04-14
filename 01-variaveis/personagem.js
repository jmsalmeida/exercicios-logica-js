/**
 * 1- Crie um objeto que represente seu personagem favorito. Use
 * atributos como nome, idade, altura, série/filme/quadrinho/game
 * que ele pertence, habilidade, etc. 
 * 
 * 2- Imprima no console uma frase usando alguns de seus atributos.
 * Ex: Meu personagem favorito é o Goku e ele é um Sayajin.
 */

const personagem = {
    nome: 'Darth Vader',
    altura: '202',
    ano_nascimento: '41.9BBY',
    genero: 'Masculino',
    origem: 'Tatooine',
    habilidade: 'Usar a força para enforcar pessoas, construir armas destruidoras de planetas e exterminar a própria classe "Jedi" e sua familia',
    filmes: 'Star Wars EP IV, V, VI e Star Wars Rogue One',
}

console.log(`Meu personagem favorito é o ${personagem.nome}, nascido em ${personagem.origem} no ano de ${personagem.ano_nascimento}, suas habilidades são, ${personagem.habilidade}. Participou dos filmes: ${personagem.filmes}. Se diz do genero ${personagem.genero}, mas matou a própria mulher sem saber que a mesma estava grávida, isso pra mim não foi atitude de homem! kkk`);
