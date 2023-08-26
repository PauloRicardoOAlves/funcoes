const prova = {
    aluno: "Paulo",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let contagem = 0

function corrigirProva() {
    for (i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta == prova.questoes[i].correta) {
            contagem++
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${contagem} questões e obteve nota ${contagem * 2}`)
}

corrigirProva(prova)