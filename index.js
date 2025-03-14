"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function causaDano(dano, vida) {
    var vidaPerdida = vida - dano;
}
function receberDano(dano) {
}
function verificaRaridade(raridade, dano) {
    if (raridade == "Comum" || raridade == 1) {
        dano = dano * 1;
    }
    if (raridade == "Raro" || raridade == 2) {
        dano = dano * 1.15;
    }
    if (raridade == "Épico" || raridade == 3) {
        dano = dano * 1.25;
    }
    if (raridade == "Mítico" || raridade == 4) {
        dano = dano * 1.50;
    }
    if (raridade == "Lendário" || raridade == 5) {
        dano = dano * 2;
    }
}
function start() {
    readlineSync.question("Pressione enter para comecar o jogo...");
    readlineSync.question("Voce acorda numa sexta-feira, debrucado sobre sua mesa no trabalho com cutucoes do seu chefe extremamente irritado...");
    readlineSync.question("--EU AVISEI QUE NA PROXIMA VEZ QUE O VISSE DORMINDO DURANTE O EXPEDIENTE IRIA DEMITIR-LO\n--M-Mas...\n--Arrume suas coisas e RUA...");
    readlineSync.question("Com um olhar um tanto confuso, voce pega suas coisas sem questionar e vai pra casa...");
    readlineSync.question("Ao chegar em casa voce conta a triste noticia para sua esposa e filhos...");
    readlineSync.question("Sua esposa tenta lhe confortar: \n --Pense pelo lado bom, esse emprego estava gastando toda a sua energia, voce mal tinha tempo pra sua familia");
    readlineSync.question("Mesmo assim, voce continua deprimido, entao ela propoe uma ideia...");
    readlineSync.question("--Que tal irmos acampar em familia esse final de semana?");
    readlineSync.question("Seus filhos adoram a ideia e convencem voce a aceitar-la...");
    readlineSync.question("NO DIA SEGUINTE\n Voces montaram a barraca perto de uma floresta e de um rio...");
    readlineSync.question("Seu filho propoe de ir pescar no rio ou cacar um Prea na floresta...");
    var resposta;
    while (true) {
        resposta = readlineSync.question("O que voce escolhe?\n1- Pescar no rio;\n2- Cacar um Prea\n-- ");
        if (resposta === "1") {
            readlineSync.question("Voce decide ir pescar no rio...");
            readlineSync.question("Entao voce pega as varas e iscas no carro e, com seu filho, vai em direcao ao rio... ");
            readlineSync.question("Voce se senta em uma pedra com seu filho ao lado\n Os dois lancam a isca simultaneamente...");
            readlineSync.question("Depois de varias horas, voces nao conseguiram um misero Lambari...");
            readlineSync.question("Voce olha pro horizonte e percebe que o sol ja esta se pondo\n-- Filho, acho melhor recolhermos as coisas e voltar pro acampame-");
            readlineSync.question("Sua vara repentinamente sofre um puxao que acaba por derrubar voce no chao...");
            readlineSync.question("Voce tenta se levantar, mas sua perna quebrou ao bater em uma pedra...");
            readlineSync.question("Quando voce olha para frente uma sombra se ergue do riacho e vem em sua direcao...");
            readlineSync.question("Aos prantos voce grita:\n--Q-QUEM E VOCE?!");
            readlineSync.question("Lentamente a sombra se aproxima e diz:\n--Eu sou o Mendigo dos Mares e voce invadiu o meu territorio, portanto, sofrera as consequencias...");
            readlineSync.question("A entidade o pega pelo pescoco e o arrasta rio adentro...");
            readlineSync.question("Com algas maritimas ele te enforca enquanto voce afoga ate a morte.");
            console.log("====VOCE MORREU PARA O MENDIGO DOS MARES====");
            break;
        }
        if (resposta === "2") {
            readlineSync.question("Voce decide ir caçar um Prea...");
            readlineSync.question("Entao voce pega uma escopeta do porta-malas e se vai mata adentro com seu filho...");
            readlineSync.question("Voces seguem uma trilha ja usada por outros cacadores...");
            readlineSync.question("Voces se escondem em um arbusto e esperam uma presa aparecer...");
            readlineSync.question("Algumas horas se passam e voces ja conseguiram 10 Preas\n--Filho, acho que ja conseguimos o bastante para o jantar, vamos voltar.");
            readlineSync.question("Seu filho acena com a cabeca e se levanta para ir recolher os corpos dos preas...");
            readlineSync.question("De repente um Urso surge de tras de uma arvore\n Ele olhava para seu filho com um olhar assustador e sanguinario...");
            readlineSync.question("O Urso pega uma metralhadora, aponta para seu filho e grita irado: \n HUMANO DE MERDA, VOCE MATOU TODOS OS MEUS FILHOS, MORRA!!!");
            readlineSync.question("Instintivamente voce corre para salvar seu filho,\n porem a mae Urso foi mais rapida no gatilho e fuzilou seu filho na sua frente...");
            readlineSync.question("Voce nao teve tempo para lamentar, pois agora a mae Urso notou sua presenca");
            readlineSync.question("Ela soltou um rugido avassalador, mirou a arma na sua direcao e o peneirou rapidamente...");
            console.log("====VOCE MORREU PARA A MAE URSO DE METRALHADORA====");
            break;
        }
        console.log("Voce so pode responder com 1 ou 2.");
    }
}
start();
