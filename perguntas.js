// Cada alternativa tem uma chave "proxima", criando caminhos diferentes.
export const perguntas = {
  abertura: {
    titulo: 'Primeiro dia na academia',
    texto: '{nome}, você chegou para conhecer a academia. {afirmacao} Por onde começa?',
    alternativas: [
      { texto: 'Conversar com um profissional sobre meus objetivos e limites.', proxima: 'orientacao' },
      { texto: 'Explorar as atividades e escolher algo divertido.', proxima: 'exploracao' },
      { texto: 'Convidar uma amizade para começar junto.', proxima: 'parceria' }
    ]
  },
  orientacao: {
    titulo: 'Um plano possível',
    texto: 'O instrutor propõe uma rotina gradual. Você percebe que sua semana já é bastante ocupada. O que faz?',
    alternativas: [
      { texto: 'Organizar horários realistas e incluir descanso.', proxima: 'rotina' },
      { texto: 'Pedir uma opção com atividades variadas.', proxima: 'variedade' }
    ]
  },
  exploracao: {
    titulo: 'Muitas possibilidades',
    texto: 'Você experimenta atividades leves e descobre várias opções. Como decide continuar?',
    alternativas: [
      { texto: 'Escolher uma atividade de que gosto e progredir com orientação.', proxima: 'variedade' },
      { texto: 'Criar uma rotina simples que caiba na minha semana.', proxima: 'rotina' }
    ]
  },
  parceria: {
    titulo: 'Treino em equipe',
    texto: 'Sua amizade quer competir para ver quem aguenta mais. O que você responde?',
    alternativas: [
      { texto: 'Propor que cada pessoa respeite seu próprio ritmo.', proxima: 'apoio' },
      { texto: 'Sugerir uma aula coletiva com orientação.', proxima: 'variedade' }
    ]
  },
  rotina: {
    titulo: 'A semana ficou corrida',
    texto: 'Entre estudos e compromissos, você está cansado. Qual é sua escolha?',
    alternativas: [
      { texto: 'Ajustar o planejamento e priorizar recuperação.', proxima: 'finalEquilibrio' },
      { texto: 'Pedir ajuda para adaptar a rotina sem abandonar o movimento.', proxima: 'finalConsistencia' }
    ]
  },
  variedade: {
    titulo: 'Novos desafios',
    texto: 'Uma atividade parece difícil no começo. Qual é a melhor atitude?',
    alternativas: [
      { texto: 'Aprender a técnica e avançar gradualmente.', proxima: 'finalConsistencia' },
      { texto: 'Testar outra atividade que eu aproveite mais.', proxima: 'finalDescoberta' }
    ]
  },
  apoio: {
    titulo: 'Uma equipe melhor',
    texto: 'Sua amizade se sente desanimada por aprender em outro ritmo. O que você faz?',
    alternativas: [
      { texto: 'Incentivar sem comparar resultados.', proxima: 'finalDescoberta' },
      { texto: 'Buscar orientação para ambos treinarem com segurança.', proxima: 'finalEquilibrio' }
    ]
  }
};
export const finais = {
  finalEquilibrio: {
    titulo: 'GUARDIÃO DO EQUILÍBRIO',
    texto: '{nome}, você construiu uma rotina que respeita seu tempo, seu bem-estar e a importância do descanso. Sua melhor conquista foi fazer escolhas conscientes.'
  },
  finalConsistencia: {
    titulo: 'MESTRE DA CONSTÂNCIA',
    texto: '{nome}, você descobriu que aprender, adaptar e continuar no seu ritmo são partes de uma rotina saudável. Cada etapa tem seu valor.'
  },
  finalDescoberta: {
    titulo: 'EXPLORADOR DO MOVIMENTO',
    texto: '{nome}, você descobriu o valor de se movimentar com prazer, experimentar atividades e apoiar outras pessoas sem comparações.'
  }
};
