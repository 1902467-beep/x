// Catálogo de tarefas que sistemas de IA já executam hoje.
// Cada item tem: categoria, título, descrição e um exemplo real de aplicação.
const DATA = [
  {
    cat: "Linguagem",
    title: "Traduzir entre idiomas em tempo real",
    desc: "Converte fala ou texto entre dezenas de idiomas mantendo tom e contexto, sem depender de dicionários fixos.",
    example: "Uma reunião com participantes de três países é legendada ao vivo, cada um lendo na própria língua."
  },
  {
    cat: "Linguagem",
    title: "Resumir documentos longos",
    desc: "Lê contratos, laudos e relatórios extensos e devolve os pontos centrais em poucas frases, sem perder cláusulas críticas.",
    example: "Um advogado recebe o resumo de um contrato de 80 páginas com os riscos destacados em segundos."
  },
  {
    cat: "Linguagem",
    title: "Atender clientes 24 horas",
    desc: "Responde dúvidas, resolve problemas comuns e escala casos complexos para uma pessoa, sem fila de espera.",
    example: "Uma loja online resolve trocas e dúvidas de frete às 3h da manhã sem ninguém de plantão."
  },
  {
    cat: "Linguagem",
    title: "Revisar gramática e tom",
    desc: "Ajusta clareza, formalidade e correção de um texto mantendo a voz de quem escreveu.",
    example: "Um e-mail escrito às pressas é reescrito com tom profissional antes de ser enviado."
  },
  {
    cat: "Visão",
    title: "Ler documentos escaneados",
    desc: "Extrai texto e dados de formulários, notas fiscais e páginas fotografadas, mesmo com letra ruim ou papel amassado.",
    example: "Centenas de recibos em papel viram uma planilha organizada em minutos."
  },
  {
    cat: "Visão",
    title: "Apoiar a leitura de exames de imagem",
    desc: "Identifica padrões visuais em radiografias, tomografias e outras imagens médicas como apoio à decisão clínica.",
    example: "Um radiologista usa o sistema como segunda opinião para não deixar passar um detalhe sutil."
  },
  {
    cat: "Visão",
    title: "Restaurar fotografias antigas",
    desc: "Remove ruído, corrige cor e reconstrói partes danificadas de imagens antigas.",
    example: "Uma foto de família rasgada e desbotada dos anos 1960 volta a ficar nítida."
  },
  {
    cat: "Visão",
    title: "Reconhecer objetos em vídeo ao vivo",
    desc: "Identifica pessoas, veículos ou itens em uma transmissão contínua, em tempo real.",
    example: "Uma câmera de estacionamento conta vagas livres e atualiza um painel a cada segundo."
  },
  {
    cat: "Raciocínio",
    title: "Otimizar rotas logísticas",
    desc: "Calcula o trajeto mais eficiente entre dezenas de paradas, considerando trânsito, prazos e custo de combustível.",
    example: "Uma transportadora reduz o tempo total de entregas do dia recalculando rotas conforme o trânsito muda."
  },
  {
    cat: "Raciocínio",
    title: "Resolver matemática avançada",
    desc: "Demonstra passo a passo problemas de cálculo, álgebra e estatística, incluindo a lógica por trás da resposta.",
    example: "Um estudante recebe a resolução completa de uma equação diferencial, não só o resultado final."
  },
  {
    cat: "Raciocínio",
    title: "Prever tendências a partir de dados",
    desc: "Cruza séries históricas para estimar comportamento futuro de vendas, estoque ou demanda.",
    example: "Um supermercado ajusta a compra de produtos perecíveis com base na previsão de consumo da semana."
  },
  {
    cat: "Criação",
    title: "Compor melodias originais",
    desc: "Gera trilhas musicais a partir de uma descrição de clima, gênero ou referência.",
    example: "Um criador de conteúdo pede uma trilha 'calma e instrumental' e recebe três variações prontas."
  },
  {
    cat: "Criação",
    title: "Rascunhar identidades visuais",
    desc: "Propõe paletas, tipografia e layout inicial a partir de uma descrição de marca.",
    example: "Uma cafeteria nova recebe três propostas de logotipo antes de contratar um designer."
  },
  {
    cat: "Criação",
    title: "Prototipar interfaces em minutos",
    desc: "Transforma uma ideia descrita em texto em uma tela navegável, pronta para teste com usuários.",
    example: "Um time de produto testa três versões de uma tela de cadastro na mesma tarde."
  },
  {
    cat: "Ciência",
    title: "Simular estruturas de proteínas",
    desc: "Prevê como uma sequência de aminoácidos se dobra em três dimensões, acelerando pesquisa biológica.",
    example: "Um laboratório testa hipóteses sobre uma proteína sem esperar semanas por um experimento físico."
  },
  {
    cat: "Ciência",
    title: "Modelar cenários climáticos",
    desc: "Simula o efeito de diferentes variáveis — emissões, temperatura, uso do solo — em projeções de longo prazo.",
    example: "Pesquisadores comparam o impacto de duas políticas ambientais antes de recomendar uma."
  },
  {
    cat: "Ciência",
    title: "Sugerir candidatos a novos fármacos",
    desc: "Filtra milhões de combinações moleculares para apontar as mais promissoras a testar em laboratório.",
    example: "Uma equipe de pesquisa reduz de milhares para dezenas as moléculas que vale a pena sintetizar primeiro."
  },
  {
    cat: "Código",
    title: "Escrever e revisar código",
    desc: "Gera funções, sugere correções e explica trechos complexos em várias linguagens de programação.",
    example: "Um desenvolvedor descreve o comportamento desejado e recebe a função pronta para revisar."
  },
  {
    cat: "Código",
    title: "Encontrar e corrigir falhas",
    desc: "Lê uma mensagem de erro e o código ao redor para apontar a causa provável e uma correção.",
    example: "Um bug que travaria horas de investigação é localizado em minutos a partir do log de erro."
  },
  {
    cat: "Código",
    title: "Automatizar tarefas repetitivas",
    desc: "Escreve scripts que organizam arquivos, preenchem planilhas ou disparam processos sem intervenção manual.",
    example: "Um relatório mensal que levava um dia inteiro passa a ser gerado sozinho em poucos minutos."
  }
];
