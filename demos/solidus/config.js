window.DEMO = {
  slug: "solidus",
  name: "Solidus",
  company: "Solidus Impermeabilizantes Ltda",
  docFooter: "CNPJ 20.501.007/0001-02 · (41) 3000-0000",
  logo: "logo.jpg",
  logoSidebar: "logo.jpg",
  theme: { primary: "#d9731f", accent: "#d9731f", sidebarBg: "#ffffff", sidebarFg: "#3b2f25", bg: "#faf7f3", radius: "12px", sidebarLight: true },
  user: { name: "Gustavo Moreira", role: "Gestor comercial" },
  login: {
    title: "Solidus",
    subtitle: "Gestão inteligente para sua operação. Faça login para continuar.",
    heroTitle: "Vendas, WhatsApp e IA no mesmo lugar",
    heroText: "CRM para indústria de impermeabilizantes: funil de oportunidades, carteira de clientes, propostas e um agente de IA que atende fora do expediente.",
    bullets: ["Uma instância de WhatsApp por vendedor", "Agente com base de conhecimento (RAG)", "Leads sincronizados com o RD Station"],
    bg: "radial-gradient(circle at 80% 10%, #f6b26b 0, transparent 40%), linear-gradient(150deg,#3b2f25,#d9731f)",
    email: "gustavo@solidus.exemplo.com",
  },
  notifications: [
    { icon: "person_add", title: "4 leads novos vindos do RD Station", sub: "Sincronizado às 08:00" },
    { icon: "schedule", title: "Alfa Construtora sem resposta há 2 dias", sub: "Oportunidade em Proposta" },
    { icon: "smart_toy", title: "O agente atendeu 23 conversas fora do expediente", sub: "Ontem" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Dashboard", icon: "dashboard" }] },
    { group: "Relacionamento", items: [
      { id: "conversas", label: "Conversas", icon: "chat", count: 6 },
      { id: "oportunidades", label: "Oportunidades", icon: "view_kanban" },
      { id: "leads", label: "Leads", icon: "person_search" },
      { id: "carteira", label: "Carteira", icon: "work" },
    ] },
    { group: "Vendas", items: [
      { id: "propostas", label: "Propostas", icon: "description" },
      { id: "produtos", label: "Produtos", icon: "inventory_2" },
    ] },
    { group: "IA e integrações", items: [
      { id: "conhecimento", label: "Base de conhecimento", icon: "psychology" },
      { id: "rd", label: "RD Station", icon: "sync_alt" },
    ] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Dashboard comercial", subtitle: "Outubro de 2026",
      kpis: [
        { label: "Faturamento no mês", value: "R$ 412 mil", delta: "▲ 9% vs. setembro", icon: "trending_up" },
        { label: "Oportunidades abertas", value: "87", delta: "R$ 1,2 mi em negociação", icon: "view_kanban" },
        { label: "Conversas atendidas", value: "1.384", delta: "31% pelo agente de IA", icon: "chat" },
        { label: "Tempo médio de resposta", value: "4 min", delta: "▼ 2 min", icon: "timer" },
      ],
      widgets: [
        { title: "Vendas por semana", chart: { type: "line", money: true, labels: ["S1", "S2", "S3", "S4", "S5"], series: [{ name: "2026", data: [84000, 91000, 102000, 97000, 38000] }, { name: "2025", data: [71000, 76000, 88000, 82000, 30000] }] } },
        { title: "Origem dos leads", chart: { type: "donut", labels: ["WhatsApp", "RD Station", "Indicação", "Loja virtual"], series: [{ data: [148, 96, 41, 63] }], centerLabel: "leads no mês", colors: ["#22c55e", "#0ea5e9", "#d9731f", "#8b5cf6"] } },
        { title: "Ranking de vendedores", items: [
          { title: "Larissa Prado", sub: "38 pedidos · ticket médio R$ 3.410", meta: "R$ 129 mil" },
          { title: "Igor Santana", sub: "31 pedidos · ticket médio R$ 3.020", meta: "R$ 93 mil" },
          { title: "Kevin Rocha", sub: "26 pedidos · ticket médio R$ 2.880", meta: "R$ 75 mil" },
        ] },
        { title: "Oportunidades paradas", go: "oportunidades", map: { Proposta: "blue", Negociação: "amber" }, items: [
          { title: "Alfa Construtora", sub: "Kit 20x massa polimérica · 2 dias sem contato", badge: "Proposta", meta: "R$ 6.980", go: "oportunidades" },
          { title: "Casa & Muro Materiais", sub: "Manta líquida 18kg · 3 dias", badge: "Negociação", meta: "R$ 5.997", go: "oportunidades" },
        ] },
      ],
    },

    conversas: {
      type: "inbox", title: "Conversas", subtitle: "Instância geral e instâncias por vendedor", aiName: "Agente Solidus",
      tagMap: { "Agente IA": "purple", Larissa: "blue", Igor: "teal", "Fora do expediente": "amber" },
      threadActions: [{ label: "Criar oportunidade", icon: "add_task", go: "oportunidades" }],
      conversations: [
        { name: "Alfa Construtora", phone: "+55 41 97000-1234 · Obra Residencial Aurora", time: "10:12", unread: 1, tag: "Larissa", messages: [
          { from: "them", text: "Larissa, conseguimos fechar 20 barricas se o frete for por conta de vocês", time: "10:05" },
          { from: "me", text: "Bom dia! Para 20 barricas o frete é por nossa conta sim. Atualizo a proposta?", time: "10:09" },
          { from: "them", text: "Pode atualizar 👍", time: "10:12" },
        ] },
        { name: "Leandro Aplicador", phone: "+55 19 99000-1111", time: "22:47", unread: 3, tag: "Fora do expediente", ai: true, messages: [
          { from: "them", text: "boa noite, a manta líquida pode aplicar em laje com chuva prevista amanhã?", time: "22:44" },
          { from: "bot", text: "Boa noite! Não é recomendado: a manta líquida precisa de 4 a 6 horas sem chuva após cada demão para curar. Se houver previsão, o ideal é adiar a aplicação 🌧️", time: "22:45", tools: ["buscar_conhecimento"] },
          { from: "them", text: "e quantas demãos?", time: "22:47" },
          { from: "bot", text: "São 3 demãos cruzadas, com consumo médio de 1,2 kg/m² no total. Para uma laje de 50 m², um balde de 18 kg cobre com sobra 😉", time: "22:47", tools: ["buscar_conhecimento", "calcular_consumo"] },
        ] },
        { name: "Casa & Muro Materiais", phone: "+55 41 99000-3030", time: "Ontem", tag: "Igor", messages: [
          { from: "them", text: "Igor, tem previsão da reposição da tela poliéster?", time: "16:30" },
          { from: "me", text: "Chega na segunda! Já deixei 10 rolos reservados pra vocês.", time: "16:41" },
        ] },
        { name: "Osvaldo Reformas", phone: "+55 41 99000-4040", time: "Ontem", tag: "Agente IA", ai: true, messages: [
          { from: "them", text: "vocês vendem no varejo?", time: "11:02" },
          { from: "bot", text: "Vendemos sim! Pela loja virtual ou direto com um consultor. Quer que eu passe seu contato para o vendedor da sua região?", time: "11:02", tools: ["buscar_conhecimento"] },
        ] },
      ],
      rules: [
        { match: ["preço", "valor", "quanto"], reply: "A manta líquida 18 kg sai a partir de R$ 299,90 e a de 5 kg a partir de R$ 94,40. Para volume, um consultor pode montar uma condição especial 😉", tools: ["consultar_produto"] },
        { match: ["laje", "m²", "m2", "metro"], reply: "Para impermeabilizar, o consumo médio é 1,2 kg/m² em 3 demãos. Me passa a metragem que eu calculo a quantidade certinha.", tools: ["calcular_consumo"] },
        { match: ["consultor", "vendedor", "humano", "pessoa"], reply: "Claro! Encaminhei para a Larissa, que atende a sua região. Ela responde a partir das 8h 👋", tools: ["distribuir_lead", "transferir_humano"] },
      ],
      fallback: { reply: "Anotei sua dúvida e um consultor vai te responder assim que o expediente começar (8h às 18h).", tools: ["registrar_pendencia"] },
    },

    oportunidades: {
      type: "kanban", title: "Oportunidades", subtitle: "Etapas configuráveis · arraste para avançar", money: true,
      tagMap: { Construtora: "blue", Loja: "teal", Aplicador: "purple", "RD Station": "amber" },
      form: [{ key: "title", label: "Cliente", full: true }, { key: "sub", label: "Produto" }, { key: "value", label: "Valor (R$)", type: "money" }],
      columns: [
        { title: "Qualificação", color: "#94a3b8", cards: [
          { title: "Engenharia Delta", sub: "Manta líquida para 3 lajes", value: 4200, tags: ["Construtora", "RD Station"], owner: "Igor Santana" },
          { title: "Leandro Aplicador", sub: "Kit aplicadores + 5 kg", value: 380, tags: ["Aplicador"], owner: "Agente IA" },
        ] },
        { title: "Proposta", color: "#0ea5e9", cards: [
          { title: "Alfa Construtora", sub: "Kit 20x massa polimérica 30 kg", value: 6980, tags: ["Construtora"], owner: "Larissa Prado", _timeline: [{ when: "Hoje 10:12", text: "Cliente aceitou frete CIF — proposta a atualizar" }, { when: "27/10", text: "Proposta PR-1182 enviada" }] },
          { title: "Prime Concreto", sub: "Tela poliéster 50 m² x 12", value: 2760, tags: ["Construtora"], owner: "Kevin Rocha" },
        ] },
        { title: "Negociação", color: "#f59e0b", cards: [
          { title: "Casa & Muro Materiais", sub: "Manta líquida 18 kg x 20", value: 5997, tags: ["Loja"], owner: "Igor Santana" },
        ] },
        { title: "Ganho", color: "#22c55e", cards: [
          { title: "Depósito São Jorge", sub: "Mix de impermeabilizantes", value: 12450, tags: ["Loja"], owner: "Larissa Prado" },
        ] },
      ],
    },

    leads: {
      type: "table", title: "Leads", subtitle: "Entrada pelo WhatsApp, RD Station e loja virtual — com dono e distribuição automática",
      columns: [
        { key: "nome", label: "Lead", type: "who", sub: "empresa" },
        { key: "origem", label: "Origem", type: "badge", map: { WhatsApp: "green", "RD Station": "blue", Indicação: "amber", "Loja virtual": "purple" } },
        { key: "dono", label: "Dono" },
        { key: "etapa", label: "Etapa" },
        { key: "entrada", label: "Entrada" },
      ],
      filter: { key: "origem", options: ["WhatsApp", "RD Station", "Indicação", "Loja virtual"] },
      form: [{ key: "nome", label: "Nome", full: true }, { key: "empresa", label: "Empresa" }, { key: "origem", label: "Origem", type: "select", options: ["WhatsApp", "RD Station", "Indicação", "Loja virtual"] }],
      defaults: { dono: "Distribuição automática", etapa: "Qualificação", entrada: "agora" },
      newLabel: "Novo lead",
      rowActions: [{ label: "Ver timeline RD", icon: "timeline", toast: "Timeline do RD Station carregada" }, { label: "Abrir conversa", icon: "chat", go: "conversas" }],
      rows: [
        { nome: "Carlos Mendes", empresa: "Engenharia Delta", origem: "RD Station", dono: "Igor Santana", etapa: "Qualificação", entrada: "hoje 08:00", _timeline: [{ when: "28/10", text: "Baixou o e-book “Guia de impermeabilização de lajes”" }, { when: "28/10", text: "Converteu no formulário de orçamento" }] },
        { nome: "Leandro", empresa: "Aplicador autônomo", origem: "WhatsApp", dono: "Agente IA", etapa: "Qualificação", entrada: "ontem 22:44" },
        { nome: "Fernanda Lima", empresa: "Prime Concreto", origem: "Indicação", dono: "Kevin Rocha", etapa: "Proposta", entrada: "26/10" },
        { nome: "Osvaldo", empresa: "Osvaldo Reformas", origem: "WhatsApp", dono: "Larissa Prado", etapa: "Qualificação", entrada: "ontem 11:02" },
        { nome: "Helena Costa", empresa: "Casa & Muro", origem: "Loja virtual", dono: "Igor Santana", etapa: "Negociação", entrada: "24/10" },
      ],
    },

    carteira: {
      type: "table", title: "Carteira de clientes", subtitle: "Pedidos importados do ERP (Bling) · sugestão do próximo contato",
      columns: [
        { key: "cliente", label: "Cliente", type: "who", sub: "cidade" },
        { key: "ultima", label: "Última compra" },
        { key: "ticket", label: "Ticket médio", type: "money" },
        { key: "prioridade", label: "Prioridade", type: "badge", map: { Alta: "red", Média: "amber", Baixa: "gray" } },
        { key: "sugestao", label: "Sugestão" },
      ],
      filter: { key: "prioridade", options: ["Alta", "Média", "Baixa"] },
      rowActions: [{ label: "Registrar contato", icon: "call", toast: "Atividade registrada na carteira" }],
      rows: [
        { cliente: "Depósito São Jorge", cidade: "Curitiba/PR", ultima: "84 dias", ticket: 4150, prioridade: "Alta", sugestao: "Recompra de manta 18 kg" },
        { cliente: "Casa & Muro Materiais", cidade: "Pinhais/PR", ultima: "21 dias", ticket: 2980, prioridade: "Média", sugestao: "Oferecer tela poliéster" },
        { cliente: "Alfa Construtora", cidade: "Curitiba/PR", ultima: "47 dias", ticket: 6200, prioridade: "Alta", sugestao: "Fechar proposta em aberto" },
        { cliente: "Obra Rápida Ltda", cidade: "São José dos Pinhais/PR", ultima: "9 dias", ticket: 1320, prioridade: "Baixa", sugestao: "—" },
      ],
    },

    propostas: {
      type: "table", title: "Propostas comerciais", subtitle: "PDF timbrado gerado a partir do catálogo",
      columns: [
        { key: "id", label: "Proposta" },
        { key: "cliente", label: "Cliente", type: "who" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "vendedor", label: "Vendedor" },
        { key: "status", label: "Situação", type: "badge", map: { Aceita: "green", Enviada: "blue", Rascunho: "gray", Recusada: "red" } },
      ],
      filter: { key: "status", options: ["Rascunho", "Enviada", "Aceita", "Recusada"] },
      doc: { title: "Proposta comercial", numberKey: "id", fields: [{ label: "Cliente", key: "cliente" }, { label: "Vendedor", key: "vendedor" }, { label: "Pagamento", key: "pagamento" }, { label: "Entrega", key: "entrega" }], note: "Proposta válida por 10 dias. Frete CIF para Curitiba e região metropolitana em pedidos acima de R$ 2.000." },
      rowActions: [{ label: "Ver PDF", icon: "picture_as_pdf", kind: "pdf" }, { label: "Enviar no WhatsApp", icon: "send", toast: "Proposta enviada no WhatsApp do cliente" }],
      rows: [
        { id: "PR-1182", cliente: "Alfa Construtora", valor: 6980, vendedor: "Larissa Prado", status: "Enviada", pagamento: "28/56 dias", entrega: "5 dias úteis", _items: [{ desc: "Massa polimérica — barrica 30 kg", qty: 20, unit: 349 }] },
        { id: "PR-1179", cliente: "Casa & Muro Materiais", valor: 5997, vendedor: "Igor Santana", status: "Rascunho", pagamento: "À vista", entrega: "3 dias úteis", _items: [{ desc: "Manta líquida branca — balde 18 kg", qty: 20, unit: 299.85 }] },
        { id: "PR-1171", cliente: "Depósito São Jorge", valor: 12450, vendedor: "Larissa Prado", status: "Aceita", pagamento: "30 dias", entrega: "Entregue", _items: [{ desc: "Manta líquida — balde 18 kg", qty: 25, unit: 299.9 }, { desc: "Tela poliéster 50 m²", qty: 10, unit: 230.25 }, { desc: "Aplicadores 10 un", qty: 10, unit: 22.6 }] },
        { id: "PR-1166", cliente: "Prime Concreto", valor: 2760, vendedor: "Kevin Rocha", status: "Recusada", pagamento: "À vista", entrega: "—", _items: [{ desc: "Tela poliéster 50 m²", qty: 12, unit: 230 }] },
      ],
    },

    produtos: {
      type: "catalog", title: "Produtos", subtitle: "Catálogo usado nas propostas e pelo agente de IA",
      form: [{ key: "title", label: "Produto", full: true }, { key: "sub", label: "Descrição" }, { key: "price", label: "Preço (R$)", type: "money" }],
      defaultImg: "produtos/saco_6kg.png", newLabel: "Novo produto",
      rowActions: [{ label: "Adicionar a uma proposta", icon: "add_shopping_cart", go: "propostas" }],
      items: [
        { title: "Manta Líquida 5 kg", sub: "Impermeabilizante acrílico, balde 5 kg", price: 94.4, img: "produtos/manta_liquida_5kg.png", _extra: { "Rendimento": "≈ 4 m² (3 demãos)" } },
        { title: "Manta Líquida 18 kg", sub: "Impermeabilizante branca, balde 18 kg", price: 299.9, img: "produtos/manta_liquida_18kg.png", _extra: { "Rendimento": "≈ 15 m² (3 demãos)" } },
        { title: "Massa Polimérica 3 kg", sub: "Cola para bloco e tijolo, bisnaga", price: 20.9, img: "produtos/massa_polimerica_3kg.png" },
        { title: "Massa Polimérica 6 kg", sub: "Cola para bloco e tijolo, saco", price: 38.5, img: "produtos/saco_6kg.png" },
        { title: "Kit 3 barricas 30 kg", sub: "Massa polimérica — 90 kg", price: 1029, img: "produtos/massa_polimerica_kit_3x30.png" },
        { title: "Kit 10 barricas 30 kg", sub: "Massa polimérica — 300 kg", price: 3390, img: "produtos/massa_polimerica_kit_10x30.png" },
        { title: "Kit 20 barricas 30 kg", sub: "Massa polimérica — 600 kg", price: 6580, img: "produtos/massa_polimerica_kit_20x30.png" },
        { title: "Tela Poliéster 50 m²", sub: "Resinada 2x2, rolo 1 x 50 m", price: 230, img: "produtos/tela_poliester_50m2.png" },
        { title: "Aplicadores 10 un", sub: "Para argamassa polimérica + brinde", price: 22.6, img: "produtos/aplicadores_argamassa_10un.png" },
      ],
    },

    conhecimento: {
      type: "table", title: "Base de conhecimento", subtitle: "Artigos aprovados entram no índice vetorial do agente",
      actions: [{ label: "Reindexar", icon: "refresh", toast: "Índice reconstruído com 18 artigos" }],
      columns: [
        { key: "titulo", label: "Artigo" },
        { key: "categoria", label: "Categoria" },
        { key: "status", label: "Situação", type: "badge", map: { Aprovado: "green", Pendente: "amber", Rascunho: "gray" } },
        { key: "atualizado", label: "Atualizado" },
      ],
      filter: { key: "status", options: ["Aprovado", "Pendente", "Rascunho"] },
      form: [{ key: "titulo", label: "Título", full: true }, { key: "categoria", label: "Categoria", type: "select", options: ["Aplicação", "Produtos", "Comercial", "Logística"] }, { key: "texto", label: "Conteúdo", type: "textarea" }],
      defaults: { status: "Rascunho", atualizado: "agora" },
      newLabel: "Novo artigo",
      rowActions: [{ label: "Otimizar com IA", icon: "auto_awesome", toast: "Artigo reescrito para busca semântica" }, { label: "Aprovar", icon: "verified", set: { status: "Aprovado" }, toast: "Artigo aprovado e indexado" }],
      rows: [
        { titulo: "Como aplicar manta líquida em lajes", categoria: "Aplicação", status: "Aprovado", atualizado: "12/10" },
        { titulo: "Consumo por m² de cada produto", categoria: "Produtos", status: "Aprovado", atualizado: "03/10" },
        { titulo: "Política de frete e pedido mínimo", categoria: "Logística", status: "Pendente", atualizado: "27/10" },
        { titulo: "Tabela de descontos por volume", categoria: "Comercial", status: "Rascunho", atualizado: "28/10" },
      ],
    },

    rd: {
      type: "table", title: "RD Station Marketing", subtitle: "Integração OAuth · sincronização de leads a cada hora",
      actions: [{ label: "Sincronizar agora", icon: "sync", primary: true, toast: "Sincronização concluída: 4 leads novos, 2 atualizados" }],
      columns: [
        { key: "quando", label: "Execução" },
        { key: "novos", label: "Novos" },
        { key: "atualizados", label: "Atualizados" },
        { key: "ignorados", label: "Duplicados" },
        { key: "status", label: "Resultado", type: "badge", map: { Sucesso: "green", Parcial: "amber", Erro: "red" } },
      ],
      rows: [
        { quando: "29/10 08:00", novos: 4, atualizados: 2, ignorados: 1, status: "Sucesso" },
        { quando: "29/10 07:00", novos: 0, atualizados: 1, ignorados: 0, status: "Sucesso" },
        { quando: "28/10 18:00", novos: 3, atualizados: 0, ignorados: 2, status: "Parcial", _note: "1 contato sem telefone válido foi ignorado." },
        { quando: "28/10 17:00", novos: 1, atualizados: 3, ignorados: 0, status: "Sucesso" },
      ],
    },
  },
};
