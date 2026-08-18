const perguntas = {

    inicio: {
        titulo: "Seu Desafio Começa!",
        pergunta: "Qual é seu principal objetivo?",
        respostas: [
            ["Ganhar massa muscular", "massa"],
            ["Ficar mais forte", "forca"],
            ["Perder gordura", "cardio"]
        ]
    },

    massa: {
        titulo: "Hipertrofia",
        pergunta: "Qual grupo muscular você quer treinar?",
        respostas: [
            ["Peito", "peito"],
            ["Braços", "bracos"],
            ["Pernas", "pernas"]
        ]
    },

    forca: {
        titulo: "Modo Força",
        pergunta: "Qual exercício você quer dominar?",
        respostas: [
            ["Supino", "supino"],
            ["Agachamento", "agachamento"],
            ["Levantamento Terra", "terra"]
        ]
    },

    cardio: {
        titulo: "Modo Definição",
        pergunta: "Qual atividade você prefere?",
        respostas: [
            ["Corrida", "corrida"],
            ["Bicicleta", "bicicleta"],
            ["Treino de luta", "luta"]
        ]
    },

    peito: {
        titulo: "Treino de Peito",
        pergunta: "Qual exercício você escolhe?",
        respostas: [
            ["Supino reto", "treino"],
            ["Supino inclinado", "treino"],
            ["Crucifixo", "treino"]
        ]
    },

    bracos: {
        titulo: "Treino de Braços",
        pergunta: "Qual músculo você começa?",
        respostas: [
            ["Bíceps", "treino"],
            ["Tríceps", "treino"],
            ["Antebraço", "treino"]
        ]
    },

    pernas: {
        titulo: "Dia de Pernas",
        pergunta: "Qual exercício você começa?",
        respostas: [
            ["Agachamento", "treino"],
            ["Leg Press", "treino"],
            ["Cadeira extensora", "treino"]
        ]
    },

    supino: {
        titulo: "Supino",
        pergunta: "Qual estratégia você escolhe?",
        respostas: [
            ["Carga pesada", "pesado"],
            ["Técnica perfeita", "tecnica"],
            ["Aumentar aos poucos", "progresso"]
        ]
    },

    agachamento: {
        titulo: "Agachamento",
        pergunta: "Como você vai realizar o exercício?",
        respostas: [
            ["Carga alta", "pesado"],
            ["Foco na técnica", "tecnica"],
            ["Progressão gradual", "progresso"]
        ]
    },

    terra: {
        titulo: "Levantamento Terra",
        pergunta: "Qual será sua prioridade?",
        respostas: [
            ["Força", "pesado"],
            ["Técnica", "tecnica"],
            ["Evolução gradual", "progresso"]
        ]
    },

    corrida: {
        titulo: "Cardio",
        pergunta: "Onde prefere correr?",
        respostas: [
            ["Esteira", "final_cardio"],
            ["Parque", "final_cardio"],
            ["Pista", "final_cardio"]
        ]
    },

    bicicleta: {
        titulo: "Bicicleta",
        pergunta: "Qual treino prefere?",
        respostas: [
            ["Alta intensidade", "final_hiit"],
            ["Ritmo moderado", "final_moderado"],
            ["Subidas", "final_hiit"]
        ]
    },

    luta: {
        titulo: "Treino de Luta",
        pergunta: "Qual modalidade escolhe?",
        respostas: [
            ["Boxe", "final_boxe"],
            ["Jiu-Jitsu", "final_jiu"],
            ["Muay Thai", "final_muay"]
        ]
    },

    treino: {
        titulo: "Treino",
        pergunta: "Como você quer terminar?",
        respostas: [
            ["Continuar treinando", "pesado"],
            ["Beber água", "final_agua"],
            ["Descansar", "final_descanso"]
        ]
    },

    pesado: {
        titulo: "Carga Pesada",
        pergunta: "Qual será seu próximo passo?",
        respostas: [
            ["Continuar", "final_forca"],
            ["Hidratar", "final_agua"],
            ["Descansar", "final_descanso"]
        ]
    },

    tecnica: {
        titulo: "Técnica",
        pergunta: "Você priorizou a execução correta. E agora?",
        respostas: [
            ["Continuar focado", "final_tecnica"],
            ["Beber água", "final_agua"],
            ["Descansar", "final_descanso"]
        ]
    },

    progresso: {
        titulo: "Progressão",
        pergunta: "Você está evoluindo aos poucos. O que faz?",
        respostas: [
            ["Aumentar a carga", "final_progresso"],
            ["Hidratar", "final_agua"],
            ["Descansar", "final_descanso"]
        ]
    }
};


const finais = {

    final_forca: "Você escolheu o caminho da força! Continue treinando com consistência.",

    final_tecnica: "Excelente! Uma boa técnica é fundamental para evoluir.",

    final_progresso: "Ótimo! Pequenas evoluções constantes fazem uma grande diferença.",

    final_agua: "Você terminou o treino e lembrou de se hidratar. Disciplina!",

    final_descanso: "Você decidiu descansar. A recuperação também faz parte da evolução!",

    final_cardio: "Cardio concluído! Você mostrou muita resistência.",

    final_hiit: "Treino intenso concluído! Você colocou sua resistência à prova.",

    final_moderado: "Cardio moderado concluído! Consistência é o segredo.",

    final_boxe: "Treino de boxe concluído! Você está ficando mais rápido e resistente.",

    final_jiu: "Jiu-Jitsu concluído! Técnica, força e estratégia fazem parte do caminho.",

    final_muay: "Muay Thai concluído! Você terminou um treino de alta intensidade."
};


let atual = "inicio";
let numero = 1;


function mostrar() {

    const p = perguntas[atual];

    document.getElementById("titulo").textContent = p.titulo;
    document.getElementById("pergunta").textContent = p.pergunta;
    document.getElementById("contador").textContent = `Pergunta ${numero}`;

    document.getElementById("barraProgresso").style.width =
        Math.min(numero * 20, 100) + "%";

    const respostas = document.getElementById("respostas");

    respostas.innerHTML = "";

    p.respostas.forEach(r => {

        const botao = document.createElement("button");

        botao.className = "resposta";
        botao.textContent = r[0];

        botao.onclick = () => escolher(r[1]);

        respostas.appendChild(botao);
    });
}


function escolher(proxima) {

    if (finais[proxima]) {
        finalizar(finais[proxima]);
        return;
    }

    atual = proxima;
    numero++;

    mostrar();
}


function finalizar(texto) {

    document.getElementById("titulo").textContent =
        "DESAFIO CONCLUÍDO!";

    document.getElementById("pergunta").textContent =
        "Seu caminho de treino terminou!";

    document.getElementById("respostas").innerHTML = "";

    document.getElementById("resultado").textContent = texto;

    document.getElementById("contador").textContent =
        "Treino concluído";

    document.getElementById("barraProgresso").style.width = "100%";

    document.getElementById("reiniciar").style.display = "block";
}


function reiniciarJogo() {

    atual = "inicio";
    numero = 1;

    document.getElementById("reiniciar").style.display = "none";

    document.getElementById("resultado").textContent = "";

    mostrar();
}


mostrar();