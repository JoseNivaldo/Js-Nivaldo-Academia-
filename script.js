import { criarPersonagem } from './aleatorio.js';
import { perguntas, finais } from './perguntas.js';

const telas = {
  inicio: document.getElementById('inicio'),
  jogo: document.getElementById('jogo'),
  resultado: document.getElementById('resultado')
};
const titulo = document.getElementById('pergunta-titulo');
const descricao = document.getElementById('pergunta-descricao');
const alternativas = document.getElementById('alternativas');
const etapa = document.getElementById('etapa');
const progresso = document.getElementById('progresso');
let personagem;
let etapaAtual = 0;
let historico = [];
let bloqueado = false;

function mostrarTela(nome) {
  Object.entries(telas).forEach(([chave, tela]) => {
    tela.classList.remove('active');
    if (chave === nome) tela.classList.add('active');
  });
}

function substituir(texto) {
  return texto.replace(/\{nome\}/g, personagem.nome)
              .replace(/\{afirmacao\}/g, personagem.afirmacao);
}

function iniciaJogo() {
  personagem = criarPersonagem();
  etapaAtual = 0;
  historico = [];
  bloqueado = false;
  mostrarTela('jogo');
  mostrarPergunta('abertura');
}

function mostrarPergunta(chave) {
  const pergunta = perguntas[chave];
  if (!pergunta) {
    mostrarResultado(chave);
    return;
  }
  bloqueado = false;
  etapaAtual++;
  etapa.textContent = `ETAPA ${String(etapaAtual).padStart(2, '0')}`;
  progresso.style.width = `${Math.min((etapaAtual - 1) / 3 * 100, 100)}%`;
  titulo.textContent = substituir(pergunta.titulo);
  descricao.textContent = substituir(pergunta.texto);
  alternativas.replaceChildren();
  pergunta.alternativas.forEach((opcao, indice) => {
    const botao = document.createElement('button');
    botao.className = 'option';
    botao.type = 'button';
    const letra = document.createElement('span');
    letra.className = 'letter';
    letra.textContent = String.fromCharCode(65 + indice);
    const texto = document.createElement('span');
    texto.textContent = substituir(opcao.texto);
    botao.append(letra, texto);
    botao.addEventListener('click', () => {
      if (bloqueado) return;
      bloqueado = true;
      historico.push(substituir(opcao.texto));
      mostrarPergunta(opcao.proxima);
    }, { once: true });
    alternativas.appendChild(botao);
  });
}

function mostrarResultado(chave) {
  const final = finais[chave];
  if (!final) {
    console.error('Final não encontrado:', chave);
    return;
  }
  progresso.style.width = '100%';
  document.getElementById('resultado-titulo').textContent = final.titulo;
  document.getElementById('resultado-texto').textContent = substituir(final.texto);
  const lista = document.getElementById('historico');
  lista.replaceChildren();
  historico.forEach(escolha => {
    const item = document.createElement('li');
    item.textContent = escolha;
    lista.appendChild(item);
  });
  mostrarTela('resultado');
}

document.getElementById('iniciar').addEventListener('click', iniciaJogo);
document.getElementById('reiniciar').addEventListener('click', iniciaJogo);
