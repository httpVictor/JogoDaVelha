//Variáveis
let jogador = "X"
let vencedor = "_"
let combinacoes = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [1,4,7]
]

//Pegando do html
const casas = document.getElementsByTagName('input');
const botaoReiniciar = document.getElementById('reiniciar')

//começando no x
document.getElementById('jogada').innerHTML = `Vez do jogador X`
//jogadas
for (let i = 0; i < 9; i++) {
    casas[i].addEventListener('click', (event) =>{
        //O lugar está vazio e o jogo não tem um vencedor?
        if(event.target.value == "_" && vencedor == "_"){
            event.target.value = jogador
            event.target.style.color='#000'
            trocarJogador()
            vencedor = vitoria()
        }
        //Existe um vencedor? Se sim, mostre-o
        if(vencedor != '_'){
            document.getElementById('jogada').innerHTML = vencedor
        }
    })
}

botaoReiniciar.addEventListener('click', (e) => {
    for(let i = 0; i < 9; i++){
        casas[i].value = '_'
        casas[i].style.color = 'var(--amarelinho)'
        casas[i].style.backgroundColor = 'var(--amarelinho)'

        vencedor = "_"
    }
})


//FUNÇÕES
//Função trocar jogador
function trocarJogador(){
    if(jogador == 'X'){
        jogador = 'O'
        //add o textin
    } else {
        jogador = 'X'
        //add o textin
    }
    document.getElementById('jogada').innerHTML = `Vez do jogador ${jogador}`
}


//Função definir vencedor
//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
function vitoria() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) { //Linha 1
        casas[0].style.backgroundColor='#0F0';
        casas[1].style.backgroundColor='#0F0';
        casas[2].style.backgroundColor='#0F0';

        return `Jogador ${casas[2].value} Venceu!` 

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) { //linha 2
        casas[3].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';

        return `Jogador ${casas[3].value} Venceu!` 

    }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) { //linha 3
        casas[6].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return `Jogador ${casas[6].value} Venceu!` 

    }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) { // coluna 1
        casas[0].style.backgroundColor='#0F0';
        casas[3].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return `Jogador ${casas[0].value} Venceu!` 

    }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) { // coluna 2
        casas[1].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';

        return `Jogador ${casas[1].value} Venceu!` 

    }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) { // coluna 3
        casas[2].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return `Jogador ${casas[2].value} Venceu!`

    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) { //diagonal direita
        casas[0].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return `Jogador ${casas[0].value} Venceu!` 

    }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) { // diagonal esquerda
        casas[2].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return `Jogador ${casas[2].value} Venceu!` 

    }

    if(casas[0].value!='_' && casas[1].value!='_' && casas[2].value!='_' && casas[3].value!='_' && casas[4].value!='_' && casas[5].value!='_' && casas[6].value!='_' && casas[7].value!='_' && casas[8].value!='_'){
        return 'Deu Velha!'
    }

    return'_';
}