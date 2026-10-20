// Módulo de nomes e afirmações aleatórias.
const nomes = ['Alex', 'Luna', 'Kai', 'Maya', 'Noah', 'Íris'];
const afirmacoes = [
  'Respeitar seus limites também é evoluir.',
  'Constância e descanso caminham juntos.',
  'Uma boa escolha vale mais que uma pressa.',
  'Saúde se constrói com equilíbrio.'
];
export function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}
export function criarPersonagem() {
  return { nome: aleatorio(nomes), afirmacao: aleatorio(afirmacoes) };
}
