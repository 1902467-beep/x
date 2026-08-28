// Catálogo de tarefas que sistemas de IA já executam hoje.
// Cada ficha tem: categoria, título, descrição e um exemplo real de aplicação.

export type Task = {
  cat: string
  title: string
  desc: string
  example: string
}

export const TASKS: Task[] = [
  // ---------- Linguagem ----------
  {
    cat: 'Linguagem',
    title: 'Traduzir entre idiomas em tempo real',
    desc: 'Converte fala ou texto entre dezenas de idiomas mantendo tom e contexto, sem depender de dicionários fixos.',
    example:
      'Uma reunião com participantes de três países é legendada ao vivo, cada um lendo na própria língua.',
  },
  {
    cat: 'Linguagem',
    title: 'Resumir documentos longos',
    desc: 'Lê contratos, laudos e relatórios extensos e devolve os pontos centrais em poucas frases, sem perder cláusulas críticas.',
    example:
      'Um advogado recebe o resumo de um contrato de 80 páginas com os riscos destacados em segundos.',
  },
  {
    cat: 'Linguagem',
    title: 'Atender clientes 24 horas',
    desc: 'Responde dúvidas, resolve problemas comuns e escala casos complexos para uma pessoa, sem fila de espera.',
    example:
      'Uma loja online resolve trocas e dúvidas de frete às 3h da manhã sem ninguém de plantão.',
  },
  {
    cat: 'Linguagem',
    title: 'Revisar gramática e tom',
    desc: 'Ajusta clareza, formalidade e correção de um texto mantendo a voz de quem escreveu.',
    example:
      'Um e-mail escrito às pressas é reescrito com tom profissional antes de ser enviado.',
  },
  {
    cat: 'Linguagem',
    title: 'Redigir primeiras versões de textos',
    desc: 'Produz rascunhos de artigos, propostas, roteiros e descrições a partir de um briefing curto, para revisão humana.',
    example:
      'Uma jornalista transforma pauta e apuração em um primeiro rascunho estruturado, e dedica o tempo à edição.',
  },
  {
    cat: 'Linguagem',
    title: 'Classificar e rotear mensagens',
    desc: 'Lê milhares de mensagens e as separa por assunto, urgência e sentimento, encaminhando cada uma ao destino certo.',
    example:
      'O e-mail de uma reclamação grave pula a fila e chega direto ao supervisor, em vez de esperar dias.',
  },

  // ---------- Visão ----------
  {
    cat: 'Visão',
    title: 'Ler documentos escaneados',
    desc: 'Extrai texto e dados de formulários, notas fiscais e páginas fotografadas, mesmo com letra ruim ou papel amassado.',
    example: 'Centenas de recibos em papel viram uma planilha organizada em minutos.',
  },
  {
    cat: 'Visão',
    title: 'Apoiar a leitura de exames de imagem',
    desc: 'Identifica padrões visuais em radiografias, tomografias e outras imagens médicas como apoio à decisão clínica.',
    example:
      'Um radiologista usa o sistema como segunda opinião para não deixar passar um detalhe sutil.',
  },
  {
    cat: 'Visão',
    title: 'Restaurar fotografias antigas',
    desc: 'Remove ruído, corrige cor e reconstrói partes danificadas de imagens antigas.',
    example: 'Uma foto de família rasgada e desbotada dos anos 1960 volta a ficar nítida.',
  },
  {
    cat: 'Visão',
    title: 'Reconhecer objetos em vídeo ao vivo',
    desc: 'Identifica pessoas, veículos ou itens em uma transmissão contínua, em tempo real.',
    example:
      'Uma câmera de estacionamento conta vagas livres e atualiza um painel a cada segundo.',
  },
  {
    cat: 'Visão',
    title: 'Descrever imagens para quem não vê',
    desc: 'Gera descrições detalhadas de fotos, gráficos e cenas para pessoas com deficiência visual.',
    example:
      'Um usuário de leitor de tela aponta a câmera para uma vitrine e ouve a descrição dos produtos e preços.',
  },
  {
    cat: 'Visão',
    title: 'Inspecionar defeitos em produção',
    desc: 'Examina peças em linhas de montagem e aponta rachaduras, desalinhamentos e falhas invisíveis a olho nu.',
    example:
      'Uma fábrica de eletrônicos detecta soldas defeituosas antes de o produto sair da esteira.',
  },

  // ---------- Áudio e voz ----------
  {
    cat: 'Áudio e voz',
    title: 'Transcrever fala em texto',
    desc: 'Converte entrevistas, reuniões e aulas em texto pesquisável, distinguindo quem disse o quê.',
    example:
      'Uma reunião de duas horas vira ata com tópicos, decisões e responsáveis, minutos após terminar.',
  },
  {
    cat: 'Áudio e voz',
    title: 'Sintetizar vozes naturais',
    desc: 'Gera fala com entonação humana a partir de texto, em vários idiomas e estilos de voz.',
    example:
      'Um livro é convertido em audiolivro com narração fluida sem passar por um estúdio de gravação.',
  },
  {
    cat: 'Áudio e voz',
    title: 'Isolar e limpar áudio',
    desc: 'Separa voz de ruído de fundo, remove ecos e recupera gravações de baixa qualidade.',
    example:
      'Um podcast gravado em cafeteria barulhenta é publicado com som de estúdio.',
  },

  // ---------- Raciocínio ----------
  {
    cat: 'Raciocínio',
    title: 'Otimizar rotas logísticas',
    desc: 'Calcula o trajeto mais eficiente entre dezenas de paradas, considerando trânsito, prazos e custo de combustível.',
    example:
      'Uma transportadora reduz o tempo total de entregas do dia recalculando rotas conforme o trânsito muda.',
  },
  {
    cat: 'Raciocínio',
    title: 'Resolver matemática avançada',
    desc: 'Demonstra passo a passo problemas de cálculo, álgebra e estatística, incluindo a lógica por trás da resposta.',
    example:
      'Um estudante recebe a resolução completa de uma equação diferencial, não só o resultado final.',
  },
  {
    cat: 'Raciocínio',
    title: 'Prever tendências a partir de dados',
    desc: 'Cruza séries históricas para estimar comportamento futuro de vendas, estoque ou demanda.',
    example:
      'Um supermercado ajusta a compra de produtos perecíveis com base na previsão de consumo da semana.',
  },
  {
    cat: 'Raciocínio',
    title: 'Detectar fraudes em transações',
    desc: 'Analisa padrões de compra em milissegundos e sinaliza operações fora do comportamento habitual.',
    example:
      'Um cartão clonado é bloqueado na segunda tentativa de compra, antes de causar prejuízo maior.',
  },
  {
    cat: 'Raciocínio',
    title: 'Planejar e executar tarefas em etapas',
    desc: 'Agentes decompõem um objetivo em passos, usam ferramentas — busca, planilha, navegador — e corrigem o rumo sozinhos.',
    example:
      'Um agente pesquisa fornecedores, compara preços em três sites e monta uma tabela comparativa sem supervisão passo a passo.',
  },

  // ---------- Criação ----------
  {
    cat: 'Criação',
    title: 'Compor melodias originais',
    desc: 'Gera trilhas musicais a partir de uma descrição de clima, gênero ou referência.',
    example:
      "Um criador de conteúdo pede uma trilha 'calma e instrumental' e recebe três variações prontas.",
  },
  {
    cat: 'Criação',
    title: 'Rascunhar identidades visuais',
    desc: 'Propõe paletas, tipografia e layout inicial a partir de uma descrição de marca.',
    example:
      'Uma cafeteria nova recebe três propostas de logotipo antes de contratar um designer.',
  },
  {
    cat: 'Criação',
    title: 'Prototipar interfaces em minutos',
    desc: 'Transforma uma ideia descrita em texto em uma tela navegável, pronta para teste com usuários.',
    example:
      'Um time de produto testa três versões de uma tela de cadastro na mesma tarde.',
  },
  {
    cat: 'Criação',
    title: 'Gerar imagens a partir de texto',
    desc: 'Cria ilustrações, fotos conceituais e materiais de campanha a partir de uma descrição escrita.',
    example:
      'Uma pequena editora ilustra a capa de um livro infantil sem orçamento para fotografia ou banco de imagens.',
  },
  {
    cat: 'Criação',
    title: 'Produzir e editar vídeo',
    desc: 'Gera cenas curtas a partir de texto, remove objetos indesejados e adapta um vídeo para vários formatos.',
    example:
      'Um vídeo horizontal de dez minutos vira três cortes verticais legendados para redes sociais.',
  },

  // ---------- Ciência ----------
  {
    cat: 'Ciência',
    title: 'Simular estruturas de proteínas',
    desc: 'Prevê como uma sequência de aminoácidos se dobra em três dimensões, acelerando pesquisa biológica.',
    example:
      'Um laboratório testa hipóteses sobre uma proteína sem esperar semanas por um experimento físico.',
  },
  {
    cat: 'Ciência',
    title: 'Modelar cenários climáticos',
    desc: 'Simula o efeito de diferentes variáveis — emissões, temperatura, uso do solo — em projeções de longo prazo.',
    example:
      'Pesquisadores comparam o impacto de duas políticas ambientais antes de recomendar uma.',
  },
  {
    cat: 'Ciência',
    title: 'Sugerir candidatos a novos fármacos',
    desc: 'Filtra milhões de combinações moleculares para apontar as mais promissoras a testar em laboratório.',
    example:
      'Uma equipe de pesquisa reduz de milhares para dezenas as moléculas que vale a pena sintetizar primeiro.',
  },
  {
    cat: 'Ciência',
    title: 'Vasculhar a literatura científica',
    desc: 'Lê milhares de artigos e conecta achados dispersos que nenhum pesquisador teria tempo de cruzar.',
    example:
      'Uma revisão sistemática que levaria meses aponta em dias os estudos relevantes e as lacunas do campo.',
  },
  {
    cat: 'Ciência',
    title: 'Prever o tempo com mais precisão',
    desc: 'Modelos treinados em décadas de dados atmosféricos geram previsões de dias em minutos, não em horas de supercomputador.',
    example:
      'A trajetória de um ciclone é estimada com antecedência suficiente para planejar evacuações.',
  },

  // ---------- Código ----------
  {
    cat: 'Código',
    title: 'Escrever e revisar código',
    desc: 'Gera funções, sugere correções e explica trechos complexos em várias linguagens de programação.',
    example:
      'Um desenvolvedor descreve o comportamento desejado e recebe a função pronta para revisar.',
  },
  {
    cat: 'Código',
    title: 'Encontrar e corrigir falhas',
    desc: 'Lê uma mensagem de erro e o código ao redor para apontar a causa provável e uma correção.',
    example:
      'Um bug que travaria horas de investigação é localizado em minutos a partir do log de erro.',
  },
  {
    cat: 'Código',
    title: 'Automatizar tarefas repetitivas',
    desc: 'Escreve scripts que organizam arquivos, preenchem planilhas ou disparam processos sem intervenção manual.',
    example:
      'Um relatório mensal que levava um dia inteiro passa a ser gerado sozinho em poucos minutos.',
  },
  {
    cat: 'Código',
    title: 'Modernizar sistemas legados',
    desc: 'Traduz código antigo — COBOL, versões obsoletas de linguagens — para tecnologias atuais, preservando o comportamento.',
    example:
      'Um banco migra rotinas de décadas para uma linguagem moderna sem reescrever tudo à mão.',
  },
  {
    cat: 'Código',
    title: 'Documentar sistemas automaticamente',
    desc: 'Lê uma base de código inteira e produz documentação, diagramas e guias de integração atualizados.',
    example:
      'Um novo integrante do time entende a arquitetura do sistema no primeiro dia, sem depender de quem saiu.',
  },
]

// Marcos históricos — de onde essas capacidades vieram.
export type Milestone = {
  year: string
  title: string
  desc: string
}

export const MILESTONES: Milestone[] = [
  {
    year: '1950',
    title: 'O Teste de Turing',
    desc: 'Alan Turing propõe uma pergunta que ainda ecoa: uma máquina pode se passar por humana em uma conversa?',
  },
  {
    year: '1956',
    title: 'O nome da coisa',
    desc: "Na conferência de Dartmouth, o termo 'inteligência artificial' é cunhado e o campo nasce oficialmente.",
  },
  {
    year: '1997',
    title: 'Xeque-mate',
    desc: 'O Deep Blue, da IBM, derrota o campeão mundial de xadrez Garry Kasparov — a primeira queda de um domínio humano.',
  },
  {
    year: '2012',
    title: 'A virada das redes profundas',
    desc: 'A AlexNet vence a competição ImageNet com folga e o aprendizado profundo passa a dominar a visão computacional.',
  },
  {
    year: '2016',
    title: 'A jogada 37',
    desc: 'O AlphaGo vence Lee Sedol no Go com um lance que nenhum humano teria feito — criatividade de máquina em ação.',
  },
  {
    year: '2020',
    title: 'Proteínas decifradas',
    desc: 'O AlphaFold resolve um problema de 50 anos da biologia: prever a estrutura 3D de proteínas com precisão experimental.',
  },
  {
    year: '2022',
    title: 'IA para todo mundo',
    desc: 'O ChatGPT alcança 100 milhões de usuários em dois meses e leva modelos de linguagem ao cotidiano.',
  },
  {
    year: 'Hoje',
    title: 'A era dos agentes',
    desc: 'Sistemas passam a planejar, usar ferramentas e executar tarefas em várias etapas — de raciocínio a ação.',
  },
]

// Limites conhecidos — o que os sistemas ainda não fazem bem.
export type Limit = {
  title: string
  desc: string
}

export const LIMITS: Limit[] = [
  {
    title: 'Inventam com confiança',
    desc: 'Modelos de linguagem produzem afirmações falsas com o mesmo tom de certeza das verdadeiras. Verificação humana continua indispensável.',
  },
  {
    title: 'Não entendem de verdade',
    desc: 'Reconhecem padrões estatísticos, não significados. Um sistema que descreve tristeza nunca sentiu nada — e isso muda o que se pode delegar a ele.',
  },
  {
    title: 'Herdam vieses dos dados',
    desc: 'Treinados no que a humanidade escreveu, reproduzem também seus preconceitos. Sem auditoria, automatizam discriminações antigas em escala nova.',
  },
  {
    title: 'Falham fora do treino',
    desc: 'Diante de situações genuinamente inéditas, o desempenho despenca. A fluência em casos comuns esconde a fragilidade nos raros.',
  },
  {
    title: 'Não prestam contas',
    desc: 'Quando um sistema erra, a responsabilidade é de quem o construiu, treinou ou usou — nunca da máquina. Decisões críticas exigem um humano no circuito.',
  },
]
