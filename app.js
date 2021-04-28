
// ( )Boas vindas
const nome = prompt ('Olá, seja bem-vind@ ao quiz Musical! \n Qual é o teu nome?');

// ( ) Dar inicio a prova ou não  
const decision = prompt("Quer iniciar o teste? \n Coloque o número correspondente à sua resposta. \n 1. Sim. \n 2. Não.");     
   
    if (decision == 1) {


        
    } else {
        alert ("Volte logo!");
    };



// ( ) Mostrar atraves do promt a pergunta 1 com alternativas, usuario responde
let score;
score = 0;



let firstQuestion = prompt ("Quem canta a música Pais e Filhos? \n Coloque o número correspondente à sua resposta. \n 1. Capital Inicial \n 2. Legião Urbana. \n 3. Engenheiros do Hawaii." );
    
    let firstAnswer; 

    if (firstQuestion == "2") {
        score ++;
        firstAnswer = "Resposta 01 Certa";
        
        
    } else {
        firstAnswer = "Resposta 01 Incorreta";        
    }


// ( ) Mostrar atraves do promt a pergunta 2 com alternativas, usuario responde
let secondQuestion = prompt ("Quem canta a música O descobridor dos Sete Mares? 1. Nando Reis \n 2. Benito de Paula \n 3. Tim Maia")

    let secondAnswer;

if (secondQuestion == "3"){
    score ++;  
    secondAnswer = "Resposta 02 Certa";

} else {
    secondAnswer = "Resposta 02 Incorreta";
}


// ( ) Mostrar atraves do promt a pergunta 3 com alternativas, usuario responde
let thirdQuestion = prompt ("Entre as opções, qual é a música que a cantora Maria Bethania interpreta? \n 1. Jeni e o Zepelim \n 2. Meu erro  \n 3. As Canções Que Você Fez Pra Mim")

   let thirdAnswer;

if (thirdQuestion == "3"){
    score ++;  
    thirdAnswer = "Resposta 03 Certa";

} else {
    thirdAnswer = "Resposta 03 Incorreta";
}

// ( ) Mostrar resultado no html (document.write)*/


let a = window.document.getElementById ('container');

a.innerText = `Bem vinda ${nome} o teu resultado no quiz Musical é`


let b = window.document.getElementById ("resposta1");

b.innerText = firstAnswer;


let c = window.document.getElementById ("resposta2");

c.innerText = secondAnswer;


let d = window.document.getElementById ("resposta3");

d.innerText = thirdAnswer;
      









/* document.write (`Bem vinda ${nome} o teu resultado no quiz Musical é`)

document.write (`A Questão 1 está ${firstAnswer}`)

document.write (`A questão Resposta 02 está ${secondQuestion}`)

document.write (`A questão Resposta 03 está ${thirdQuestion}`)

document.write (`A questão Respota 02 está ${secondAnswer}`)*/



// O nome da pessoa deve ser impresso na tela;
//As respostas corretas e erradas devem ser impressas na tela em caixas separadas, exibidas lado a lado.
