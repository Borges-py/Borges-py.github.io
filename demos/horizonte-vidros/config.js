window.DEMO = {
  slug: "horizonte-vidros",
  name: "Horizonte Vidros",
  company: "Horizonte Vidros Indústria e Comércio Ltda",
  docFooter: "CNPJ 20.501.001/0001-27 · (11) 3000-0003",
  logo: "logo.png",
  theme: { primary: "#4f6bd8", accent: "#7ea2ff", sidebarBg: "#141b33", sidebarFg: "#e6ebff", bg: "#f3f5fb", radius: "14px" },
  user: { name: "Clara Mendes", role: "Gestora comercial" },
  login: {
    heroTitle: "Atendimento e orçamento de vidros, no WhatsApp, com IA",
    heroText: "A Lia atende os clientes no WhatsApp, qualifica pelo CNPJ, calcula o orçamento e passa a conversa para a vendedora certa.",
    bullets: ["Orçamento de box e vidros calculado em segundos", "Inbox compartilhada entre as vendedoras", "Funil comercial com distribuição automática"],
    bg: "linear-gradient(160deg,rgba(20,27,51,.2),rgba(20,27,51,.75)),url(hero.jpg) center/cover",
    email: "clara@horizontevidros.com.br",
  },
  notifications: [
    { icon: "schedule", title: "3 conversas aguardando há mais de 10 min", sub: "Fila de atendimento" },
    { icon: "request_quote", title: "Orçamento ORC-2318 aprovado", sub: "Vidraçaria Bela Vista" },
    { icon: "smart_toy", title: "A Lia registrou 2 perguntas sem resposta", sub: "Base de conhecimento" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Painel", icon: "space_dashboard" }] },
    { group: "Atendimento", items: [
      { id: "conversas", label: "Conversas", icon: "forum", count: 4 },
      { id: "funil", label: "Funil", icon: "view_kanban" },
      { id: "fila", label: "Fila de espera", icon: "hourglass_top" },
    ] },
    { group: "Comercial", items: [
      { id: "orcamentos", label: "Orçamentos", icon: "request_quote" },
      { id: "clientes", label: "Clientes", icon: "storefront" },
      { id: "catalogo", label: "Tabela de preços", icon: "sell" },
    ] },
    { group: "Inteligência artificial", items: [
      { id: "playground", label: "Testar a Lia", icon: "smart_toy" },
      { id: "conhecimento", label: "Base de conhecimento", icon: "menu_book" },
    ] },
    { group: "Sistema", items: [{ id: "configuracoes", label: "Configurações", icon: "settings" }] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Bom dia, Clara 👋", subtitle: "Resumo do atendimento de hoje",
      kpis: [
        { label: "Conversas hoje", value: "142", delta: "▲ 18% vs. ontem", icon: "forum" },
        { label: "Atendidas pela Lia", value: "71%", delta: "▲ 6 p.p.", icon: "smart_toy" },
        { label: "Orçamentos emitidos", value: "38", delta: "▲ 9", icon: "request_quote" },
        { label: "Valor orçado", value: "R$ 96,4 mil", delta: "▼ 4% vs. média", down: true, icon: "payments" },
      ],
      widgets: [
        { title: "Conversas por hora", chart: { type: "bar", labels: ["8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h"], series: [{ name: "Lia", data: [8, 14, 19, 16, 7, 9, 15, 17, 12, 6] }, { name: "Vendedoras", data: [3, 6, 7, 5, 2, 4, 6, 7, 5, 3] }] } },
        { title: "Funil da semana", chart: { type: "donut", labels: ["Novo contato", "Qualificado", "Orçamento enviado", "Fechado", "Perdido"], series: [{ data: [46, 31, 24, 15, 6] }], centerLabel: "oportunidades" } },
        { title: "Precisam de atenção", go: "fila", map: { "Aguardando": "amber", "Sem resposta": "red", "Orçamento": "blue" }, items: [
          { title: "Vidraçaria Bela Vista", sub: "Pediu desconto no box de canto", badge: "Aguardando", meta: "12 min", go: "conversas" },
          { title: "Serralheria Moreira", sub: "Dúvida sobre prazo de têmpera", badge: "Sem resposta", meta: "25 min", go: "conversas" },
          { title: "Box & Cia Vidros", sub: "Orçamento ORC-2321 aberto", badge: "Orçamento", meta: "1 h", go: "orcamentos" },
        ] },
        { title: "Ranking das vendedoras (mês)", items: [
          { title: "Sueli Rocha", sub: "64 orçamentos · 41% de conversão", meta: "R$ 182 mil" },
          { title: "Lena Duarte", sub: "58 orçamentos · 37% de conversão", meta: "R$ 156 mil" },
          { title: "Renata Alves", sub: "49 orçamentos · 35% de conversão", meta: "R$ 131 mil" },
          { title: "Marta Lopes", sub: "41 orçamentos · 33% de conversão", meta: "R$ 104 mil" },
        ] },
      ],
    },

    conversas: {
      type: "inbox", title: "Conversas", subtitle: "WhatsApp · números Comercial e Têmpera", aiName: "Lia",
      tagMap: { "IA atendendo": "purple", "Com vendedora": "blue", "Orçamento": "green", "Fila": "amber" },
      threadActions: [{ label: "Gerar orçamento", icon: "request_quote", go: "orcamentos" }],
      conversations: [
        { name: "Vidraçaria Bela Vista", phone: "+55 11 99000-1001 · CNPJ verificado", time: "09:42", unread: 2, tag: "IA atendendo", ai: true, messages: [
          { from: "them", text: "Bom dia! Vocês fazem box de canto 8mm?", time: "09:38" },
          { from: "bot", text: "Bom dia! Fazemos sim 😊 Box de canto em vidro temperado 8mm, incolor ou fumê. Pode me passar as medidas (largura x altura de cada lado)?", time: "09:38", tools: ["buscar_conhecimento"] },
          { from: "them", text: "90 x 190 e 80 x 190, incolor", time: "09:41" },
          { from: "bot", text: "Perfeito! Box de canto incolor 8mm, 900 x 1900 mm + 800 x 1900 mm, com kit alumínio branco: R$ 1.284,00 à vista ou 3x sem juros. Quer que eu gere o orçamento em PDF?", time: "09:42", tools: ["orcar_produto"] },
        ] },
        { name: "Serralheria Moreira", phone: "+55 11 99000-1002", time: "09:20", unread: 1, tag: "Fila", ai: true, messages: [
          { from: "them", text: "Qual o prazo de têmpera pra 20 peças de 10mm?", time: "09:17" },
          { from: "bot", text: "Para 20 peças em 10mm o prazo médio é de 3 dias úteis após a aprovação. Vou passar sua conversa para a Sueli confirmar a programação da fábrica, tudo bem?", time: "09:18", tools: ["buscar_conhecimento", "transferir_vendedora"] },
          { from: "sys", text: "Conversa encaminhada para Sueli Rocha" },
        ] },
        { name: "Box & Cia Vidros", phone: "+55 11 99000-1003", time: "Ontem", tag: "Orçamento", messages: [
          { from: "them", text: "Recebi o orçamento, consegue 5% à vista?", time: "17:02" },
          { from: "me", text: "Consigo sim! Atualizei o ORC-2321 com 5% de desconto à vista.", time: "17:10" },
        ] },
        { name: "Marcenaria Pinheiro", phone: "+55 11 99000-1004", time: "Ontem", tag: "Com vendedora", messages: [
          { from: "them", text: "Preciso de 6 prateleiras 6mm lapidadas, 60x30", time: "15:21" },
          { from: "me", text: "Anotado! Vou te mandar o valor em seguida.", time: "15:25" },
        ] },
        { name: "Construtora Vale Alto", phone: "+55 11 99000-1005", time: "Seg", tag: "IA atendendo", ai: true, messages: [
          { from: "them", text: "Vocês vendem para pessoa física?", time: "10:02" },
          { from: "bot", text: "Nossas vendas são exclusivas para CNPJ do ramo (vidraçarias, serralherias, marcenarias e construtoras). Se você tiver CNPJ, me passa que eu já verifico o cadastro 👍", time: "10:02", tools: ["buscar_conhecimento"] },
        ] },
      ],
      rules: [
        { match: ["box", "medida", "x 1", "x1"], reply: "Ótimo! Para o box frontal incolor 8mm com essas medidas fica R$ 742,00 com o kit de alumínio. Gero o orçamento?", tools: ["orcar_produto"] },
        { match: ["sim", "pode", "gera", "manda"], reply: "Pronto! Orçamento ORC-2325 gerado e enviado aqui no WhatsApp em PDF. Uma vendedora vai acompanhar o pedido com você.", tools: ["emitir_orcamento", "distribuir_conversa"] },
        { match: ["prazo", "entrega"], reply: "A têmpera leva em média 3 dias úteis e entregamos na região metropolitana sem custo para pedidos acima de R$ 800.", tools: ["buscar_conhecimento"] },
        { match: ["cnpj"], reply: "Encontrei o CNPJ: VIDRAÇARIA BELA VISTA LTDA, ativo, CNAE de comércio de vidros ✅. Seu cadastro está liberado!", tools: ["confirmar_cnpj", "enriquecer_cnpj"] },
        { match: ["preço", "valor", "m²", "m2"], reply: "O vidro temperado 8mm incolor está R$ 189,00/m². Fumê e bronze têm acréscimo de 12%.", tools: ["consultar_preco_m2"] },
      ],
      fallback: { reply: "Entendi! Vou chamar uma das nossas vendedoras para te ajudar com isso, só um instante.", tools: ["transferir_vendedora"] },
    },

    funil: {
      type: "kanban", title: "Funil comercial", subtitle: "Arraste os cards para mudar de etapa", money: true,
      tagMap: { "CNPJ ok": "green", "Box": "blue", "Têmpera": "purple", "Urgente": "red", "Novo": "amber" },
      form: [{ key: "title", label: "Cliente", full: true }, { key: "sub", label: "Pedido" }, { key: "value", label: "Valor (R$)", type: "money" }],
      columns: [
        { title: "Novo contato", color: "#94a3b8", cards: [
          { title: "Vidraçaria Horizonte Sul", sub: "Espelhos sob medida", value: 2350, tags: ["Novo"], owner: "Lia" },
          { title: "Construtora Vale Alto", sub: "Guarda-corpo 10mm", value: 18400, tags: ["Têmpera"], owner: "Lia" },
        ] },
        { title: "Qualificado", color: "#60a5fa", cards: [
          { title: "Serralheria Moreira", sub: "20 peças 10mm temperado", value: 6980, tags: ["CNPJ ok", "Têmpera"], owner: "Sueli Rocha" },
          { title: "Marcenaria Pinheiro", sub: "Prateleiras 6mm lapidadas", value: 640, tags: ["CNPJ ok"], owner: "Lena Duarte" },
        ] },
        { title: "Orçamento enviado", color: "#a78bfa", cards: [
          { title: "Vidraçaria Bela Vista", sub: "Box de canto incolor 8mm", value: 1284, tags: ["Box"], owner: "Renata Alves", _timeline: [{ when: "Hoje 09:42", text: "Lia gerou o orçamento ORC-2324" }, { when: "Hoje 09:38", text: "Cliente iniciou conversa no WhatsApp" }] },
          { title: "Box & Cia Vidros", sub: "12 boxes frontais", value: 8904, tags: ["Box", "Urgente"], owner: "Sueli Rocha" },
        ] },
        { title: "Fechado", color: "#22c55e", cards: [
          { title: "Vidros Paulista", sub: "Fachada temperada 10mm", value: 22800, tags: ["Têmpera"], owner: "Marta Lopes" },
        ] },
      ],
    },

    fila: {
      type: "table", title: "Fila de espera", subtitle: "Conversas aguardando uma vendedora",
      columns: [
        { key: "cliente", label: "Cliente", type: "who", sub: "assunto" },
        { key: "canal", label: "Número" },
        { key: "espera", label: "Esperando há" },
        { key: "prioridade", label: "Prioridade", type: "badge", map: { Alta: "red", Média: "amber", Baixa: "gray" } },
        { key: "destino", label: "Destino sugerido" },
      ],
      filter: { key: "prioridade", options: ["Alta", "Média", "Baixa"] },
      rowActions: [{ label: "Abrir conversa", icon: "forum", go: "conversas" }, { label: "Assumir atendimento", icon: "person_add", toast: "Conversa atribuída a você" }],
      rows: [
        { cliente: "Serralheria Moreira", assunto: "Prazo de têmpera", canal: "Comercial", espera: "25 min", prioridade: "Alta", destino: "Sueli Rocha" },
        { cliente: "Vidraçaria Bela Vista", assunto: "Desconto box de canto", canal: "Comercial", espera: "12 min", prioridade: "Média", destino: "Renata Alves" },
        { cliente: "Espelhos Jardim", assunto: "Segunda via de boleto", canal: "Têmpera", espera: "9 min", prioridade: "Média", destino: "Financeiro" },
        { cliente: "Vidraçaria Nova Era", assunto: "Status do pedido 88412", canal: "Comercial", espera: "4 min", prioridade: "Baixa", destino: "Lena Duarte" },
      ],
    },

    orcamentos: {
      type: "table", title: "Orçamentos", subtitle: "Calculados pelo motor de orçamento — o LLM nunca calcula preço",
      search: "Buscar por número ou cliente",
      columns: [
        { key: "id", label: "Número" },
        { key: "cliente", label: "Cliente", type: "who" },
        { key: "produto", label: "Produto" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Aprovado: "green", Enviado: "blue", Rascunho: "gray", Expirado: "red" } },
        { key: "origem", label: "Origem" },
      ],
      filter: { key: "status", options: ["Enviado", "Aprovado", "Rascunho", "Expirado"] },
      doc: { title: "Orçamento", numberKey: "id", fields: [{ label: "Cliente", key: "cliente" }, { label: "Produto", key: "produto" }, { label: "Validade", key: "validade" }, { label: "Vendedora", key: "vendedora" }], note: "Valores válidos por 7 dias. Vidro temperado conforme NBR 14698. Prazo de produção: 3 dias úteis após aprovação." },
      rowActions: [{ label: "Enviar no WhatsApp", icon: "send", toast: "Orçamento enviado ao cliente no WhatsApp" }, { label: "Ver PDF", icon: "picture_as_pdf", kind: "pdf" }],
      form: [{ key: "cliente", label: "Cliente", full: true }, { key: "produto", label: "Produto", type: "select", options: ["Box frontal 8mm", "Box de canto 8mm", "Vidro temperado 10mm", "Espelho 4mm"] }, { key: "valor", label: "Valor (R$)", type: "money" }],
      defaults: { id: "ORC-2326", status: "Rascunho", origem: "Manual" },
      newLabel: "Novo orçamento",
      rows: [
        { id: "ORC-2324", cliente: "Vidraçaria Bela Vista", produto: "Box de canto 8mm incolor", valor: 1284, status: "Enviado", origem: "Lia (IA)", validade: "05/11", vendedora: "Renata Alves", _items: [{ desc: "Vidro temperado 8mm incolor 900 x 1900 mm", qty: 1, unit: 512.3 }, { desc: "Vidro temperado 8mm incolor 800 x 1900 mm", qty: 1, unit: 455.4 }, { desc: "Kit box de canto alumínio branco", qty: 1, unit: 316.3 }] },
        { id: "ORC-2321", cliente: "Box & Cia Vidros", produto: "12x Box frontal 8mm", valor: 8904, status: "Aprovado", origem: "Sueli Rocha", validade: "03/11", vendedora: "Sueli Rocha", _items: [{ desc: "Box frontal 8mm incolor 1200 x 1900 mm", qty: 12, unit: 622 }, { desc: "Kit box frontal alumínio preto", qty: 12, unit: 120 }] },
        { id: "ORC-2318", cliente: "Vidros Paulista", produto: "Fachada temperada 10mm", valor: 22800, status: "Aprovado", origem: "Marta Lopes", validade: "30/10", vendedora: "Marta Lopes", _items: [{ desc: "Vidro temperado 10mm incolor (m²)", qty: 96, unit: 237.5 }] },
        { id: "ORC-2315", cliente: "Marcenaria Pinheiro", produto: "6x Prateleira 6mm lapidada", valor: 640, status: "Rascunho", origem: "Lena Duarte", validade: "—", vendedora: "Lena Duarte", _items: [{ desc: "Prateleira 6mm lapidada 600 x 300 mm", qty: 6, unit: 106.67 }] },
        { id: "ORC-2309", cliente: "Espelhos Jardim", produto: "Espelho 4mm bisotê", valor: 1930, status: "Expirado", origem: "Lia (IA)", validade: "20/10", vendedora: "Renata Alves", _items: [{ desc: "Espelho 4mm bisotê (m²)", qty: 10, unit: 193 }] },
      ],
    },

    clientes: {
      type: "table", title: "Clientes", subtitle: "Cadastro por CNPJ com enriquecimento automático (BrasilAPI)",
      columns: [
        { key: "nome", label: "Razão social", type: "who", sub: "cidade" },
        { key: "cnpj", label: "CNPJ" },
        { key: "segmento", label: "Segmento" },
        { key: "vendedora", label: "Carteira" },
        { key: "situacao", label: "Situação", type: "badge", map: { Ativo: "green", "Sem compra 90d": "amber", Bloqueado: "red" } },
      ],
      filter: { key: "situacao", options: ["Ativo", "Sem compra 90d", "Bloqueado"] },
      form: [{ key: "nome", label: "Razão social", full: true }, { key: "cnpj", label: "CNPJ" }, { key: "segmento", label: "Segmento", type: "select", options: ["Vidraçaria", "Serralheria", "Marcenaria", "Construtora"] }],
      defaults: { situacao: "Ativo", vendedora: "Distribuição automática", cidade: "—" },
      newLabel: "Novo cliente",
      rowActions: [{ label: "Ver conversas", icon: "forum", go: "conversas" }, { label: "Novo orçamento", icon: "request_quote", go: "orcamentos" }],
      rows: [
        { nome: "Vidraçaria Bela Vista Ltda", cidade: "São Paulo/SP", cnpj: "20.501.001/0001-27", segmento: "Vidraçaria", vendedora: "Renata Alves", situacao: "Ativo", _extra: { "Última compra": "18/10/2026", "Ticket médio": "R$ 2.140,00" } },
        { nome: "Serralheria Moreira ME", cidade: "Guarulhos/SP", cnpj: "20.501.002/0001-71", segmento: "Serralheria", vendedora: "Sueli Rocha", situacao: "Ativo" },
        { nome: "Box & Cia Vidros", cidade: "Osasco/SP", cnpj: "20.501.003/0001-16", segmento: "Vidraçaria", vendedora: "Sueli Rocha", situacao: "Ativo" },
        { nome: "Marcenaria Pinheiro", cidade: "Santo André/SP", cnpj: "20.501.004/0001-60", segmento: "Marcenaria", vendedora: "Lena Duarte", situacao: "Sem compra 90d" },
        { nome: "Espelhos Jardim", cidade: "São Paulo/SP", cnpj: "20.501.005/0001-05", segmento: "Vidraçaria", vendedora: "Renata Alves", situacao: "Bloqueado" },
        { nome: "Construtora Vale Alto", cidade: "Barueri/SP", cnpj: "20.501.006/0001-50", segmento: "Construtora", vendedora: "Marta Lopes", situacao: "Ativo" },
      ],
    },

    catalogo: {
      type: "table", title: "Tabela de preços", subtitle: "Versão 2026-09 · preço por m² e kits",
      columns: [
        { key: "produto", label: "Produto" },
        { key: "espessura", label: "Espessura" },
        { key: "cor", label: "Cor" },
        { key: "preco", label: "Preço", type: "money" },
        { key: "unidade", label: "Unidade" },
      ],
      filter: { key: "espessura", options: ["4mm", "6mm", "8mm", "10mm"] },
      rows: [
        { produto: "Vidro temperado", espessura: "8mm", cor: "Incolor", preco: 189, unidade: "m²" },
        { produto: "Vidro temperado", espessura: "8mm", cor: "Fumê", preco: 211.7, unidade: "m²" },
        { produto: "Vidro temperado", espessura: "10mm", cor: "Incolor", preco: 237.5, unidade: "m²" },
        { produto: "Espelho prata", espessura: "4mm", cor: "Prata", preco: 142, unidade: "m²" },
        { produto: "Vidro comum lapidado", espessura: "6mm", cor: "Incolor", preco: 118, unidade: "m²" },
        { produto: "Kit box frontal", espessura: "—", cor: "Branco", preco: 98, unidade: "kit" },
        { produto: "Kit box de canto", espessura: "—", cor: "Preto", preco: 316.3, unidade: "kit" },
      ],
    },

    playground: {
      type: "chat", title: "Testar a Lia", subtitle: "Converse como se fosse um cliente no WhatsApp",
      botName: "Lia · Horizonte Vidros",
      intro: "Olá! Eu sou a Lia, assistente da Horizonte Vidros 😊 Posso calcular orçamentos de box e vidros temperados, verificar seu cadastro pelo CNPJ e tirar dúvidas. Como posso ajudar?",
      suggestions: ["Quanto custa um box 120 x 190?", "Qual o prazo de entrega?", "Meu CNPJ é 20.501.001/0001-27", "Vocês vendem para pessoa física?"],
      side: { title: "O que a Lia faz por trás", items: ["Consulta a base de conhecimento (RAG) antes de responder", "Calcula preço com o motor determinístico — nunca inventa valor", "Confere CNPJ e CNAE na BrasilAPI", "Gera o orçamento em PDF e envia no WhatsApp", "Distribui a conversa para a vendedora da carteira", "Transfere para humano quando não sabe"] },
      rules: [
        { match: ["box", "120", "190", "medida"], reply: "Box frontal incolor 8mm, 1200 x 1900 mm, com kit de alumínio branco: R$ 742,00 à vista ou 3x de R$ 247,33. Quer que eu gere o orçamento em PDF?", tools: ["consultar_preco_m2", "orcar_produto"] },
        { match: ["sim", "quero", "gera", "pode"], reply: "Feito! Orçamento ORC-2327 gerado ✅ Mandei o PDF aqui na conversa. A Renata vai acompanhar seu pedido.", tools: ["emitir_orcamento", "distribuir_conversa"] },
        { match: ["prazo", "entrega", "demora"], reply: "A produção do temperado leva em média 3 dias úteis após a aprovação. Entregamos na Grande SP sem frete para pedidos acima de R$ 800.", tools: ["buscar_conhecimento"] },
        { match: ["cnpj", "0001"], reply: "Encontrei: VIDRAÇARIA BELA VISTA LTDA — situação ativa, CNAE 4743-1/00 (comércio de vidros) ✅ Seu cadastro está liberado para compra.", tools: ["confirmar_cnpj", "enriquecer_cnpj", "validar_cnae"] },
        { match: ["física", "fisica", "cpf"], reply: "Nossas vendas são exclusivas para empresas do ramo (CNPJ). Se você é consumidor final, posso indicar uma vidraçaria parceira perto de você 😉", tools: ["buscar_conhecimento", "indicar_parceiro"] },
        { match: ["preço", "valor", "m²", "m2", "quanto"], reply: "O temperado 8mm incolor está R$ 189,00/m². Me passa as medidas que eu calculo certinho pra você.", tools: ["consultar_preco_m2"] },
      ],
      fallback: { reply: "Boa pergunta! Não tenho essa informação na minha base, então vou chamar uma vendedora para te ajudar. Registrei a dúvida para a equipe 🙏", tools: ["registrar_gap", "transferir_vendedora"] },
    },

    conhecimento: {
      type: "table", title: "Base de conhecimento", subtitle: "Artigos que a Lia consulta antes de responder",
      columns: [
        { key: "titulo", label: "Artigo" },
        { key: "categoria", label: "Categoria" },
        { key: "versao", label: "Versão" },
        { key: "status", label: "Situação", type: "badge", map: { Publicado: "green", "Em revisão": "amber", Rascunho: "gray" } },
        { key: "uso", label: "Uso (30d)" },
      ],
      filter: { key: "status", options: ["Publicado", "Em revisão", "Rascunho"] },
      form: [{ key: "titulo", label: "Título", full: true }, { key: "categoria", label: "Categoria", type: "select", options: ["Produtos", "Prazos", "Pagamento", "Política comercial"] }, { key: "texto", label: "Conteúdo", type: "textarea" }],
      defaults: { versao: "v1", status: "Rascunho", uso: "0" },
      newLabel: "Novo artigo",
      rowActions: [{ label: "Ver histórico", icon: "history", toast: "Histórico de versões aberto" }, { label: "Publicar", icon: "publish", set: { status: "Publicado" }, toast: "Artigo publicado — a Lia já usa a nova versão" }],
      rows: [
        { titulo: "Prazos de têmpera e entrega", categoria: "Prazos", versao: "v7", status: "Publicado", uso: "412", _note: "A produção do vidro temperado leva em média 3 dias úteis após a aprovação do orçamento..." },
        { titulo: "Venda exclusiva para CNPJ", categoria: "Política comercial", versao: "v4", status: "Publicado", uso: "268" },
        { titulo: "Box padrão: medidas e kits", categoria: "Produtos", versao: "v12", status: "Publicado", uso: "905" },
        { titulo: "Formas de pagamento e boleto", categoria: "Pagamento", versao: "v3", status: "Em revisão", uso: "131" },
        { titulo: "Portas de alumínio (linha moveleira)", categoria: "Produtos", versao: "v2", status: "Rascunho", uso: "—" },
      ],
    },

    configuracoes: {
      type: "form", title: "Configurações", subtitle: "Parâmetros do atendimento e da IA", toast: "Configurações salvas",
      sections: [
        { title: "Agente de IA", fields: [
          { key: "nome", label: "Nome do agente", value: "Lia" },
          { key: "modelo", label: "Modelo principal", type: "select", options: ["gpt-4o-mini", "gemini-2.5-flash"] },
          { key: "fallback", label: "Modelo de fallback", type: "select", options: ["gemini-2.5-flash", "gpt-4o-mini"] },
          { key: "espera", label: "Alerta de fila (minutos)", type: "number", value: 10 },
        ] },
        { title: "Expediente", fields: [
          { key: "inicio", label: "Início", value: "08:00" },
          { key: "fim", label: "Fim", value: "18:00" },
          { key: "msg", label: "Mensagem fora do horário", type: "textarea", value: "Estamos fora do horário. A Lia pode adiantar seu orçamento!" },
        ] },
      ],
    },
  },
};
