window.DEMO = {
  slug: "agencia-pulso",
  name: "Sistema Pulso",
  company: "Agência Pulso — Marketing Digital",
  docFooter: "contato@agenciapulso.exemplo.com",
  logo: "logo.png",
  logoSidebar: "logo.png",
  theme: { primary: "#0891a0", accent: "#22d3ee", sidebarBg: "#0a1628", sidebarFg: "#dbeafe", bg: "#f4f7fa", radius: "16px", font: "Poppins, Inter, system-ui, sans-serif" },
  user: { name: "Bruna Castro", role: "Diretora" },
  login: {
    title: "Sistema Pulso",
    subtitle: "Entre com e-mail e senha para continuar.",
    heroTitle: "Agência Pulso.",
    heroText: "Marketing digital com ritmo — conteúdo, presença e resultado planejados de ponta a ponta.",
    bullets: ["Programação de conteúdo por cliente", "Aprovação do cliente por link", "Cobranças e pagamentos via Asaas"],
    bg: "radial-gradient(circle at 30% 20%, rgba(34,211,238,.35) 0, transparent 45%), linear-gradient(160deg,#0a1628,#0b2a4a)",
    email: "bruna@agenciapulso.exemplo.com",
  },
  notifications: [
    { icon: "thumb_up", title: "Padaria Sol Nascente aprovou 6 posts", sub: "Programação de novembro" },
    { icon: "thumb_down", title: "Clínica Alfa recusou o carrossel “Black Friday”", sub: "Comentário: trocar a foto de capa" },
    { icon: "payments", title: "Pix de R$ 2.400 confirmado", sub: "Industria Alfa · webhook Asaas" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Dashboard", icon: "insights" }] },
    { group: "Produção", items: [
      { id: "programacao", label: "Programação", icon: "view_kanban" },
      { id: "calendario", label: "Calendário", icon: "calendar_month" },
      { id: "aprovacoes", label: "Aprovações", icon: "fact_check", count: 5 },
    ] },
    { group: "Comercial", items: [
      { id: "clientes", label: "Clientes", icon: "storefront" },
      { id: "oportunidades", label: "Oportunidades", icon: "handshake" },
    ] },
    { group: "Financeiro", items: [
      { id: "receber", label: "Contas a receber", icon: "south_west" },
      { id: "pagar", label: "Contas a pagar", icon: "north_east" },
    ] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Visão geral", subtitle: "Produção e receita de outubro",
      kpis: [
        { label: "Peças entregues", value: "186", delta: "▲ 22 vs. setembro", icon: "palette" },
        { label: "Aprovação na 1ª versão", value: "81%", delta: "▲ 7 p.p.", icon: "thumb_up" },
        { label: "Receita recorrente", value: "R$ 46,8 mil", delta: "18 clientes ativos", icon: "payments" },
        { label: "Peças atrasadas", value: "4", delta: "2 em arte", down: true, icon: "schedule" },
      ],
      widgets: [
        { title: "Peças por etapa", chart: { type: "bar", labels: ["Redação", "Arte", "Revisão", "Cliente", "Agendado"], series: [{ name: "Peças", data: [14, 22, 9, 11, 37], color: "#0891a0" }] } },
        { title: "Receita x despesas", chart: { type: "line", money: true, labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "Receita", data: [38200, 40100, 41900, 43800, 45200, 46800] }, { name: "Despesas", data: [26100, 27400, 27900, 29300, 30100, 30800], color: "#f97316" }] } },
        { title: "Aguardando o cliente", go: "aprovacoes", map: { "2 dias": "amber", "4 dias": "red", hoje: "gray" }, items: [
          { title: "Clínica Alfa", sub: "Carrossel “Black Friday” — versão 2", badge: "2 dias" },
          { title: "Padaria Sol Nascente", sub: "Reels “Pão de fermentação natural”", badge: "hoje" },
          { title: "Industria Alfa", sub: "Post institucional — 30 anos", badge: "4 dias" },
        ] },
        { title: "Equipe esta semana", items: [
          { title: "Pedro Redator", sub: "12 legendas · 3 roteiros", meta: "94% no prazo" },
          { title: "Lara Designer", sub: "17 artes · 2 vídeos", meta: "88% no prazo" },
          { title: "Caio Social", sub: "41 posts agendados", meta: "100% no prazo" },
        ] },
      ],
    },

    programacao: {
      type: "kanban", title: "Programação de conteúdo", subtitle: "Novembro · arraste a peça para a próxima etapa",
      tagMap: { Post: "blue", Carrossel: "purple", Reels: "teal", Stories: "amber", Atrasada: "red" },
      form: [{ key: "title", label: "Peça", full: true }, { key: "sub", label: "Cliente" }],
      columns: [
        { title: "Redação", color: "#94a3b8", cards: [
          { title: "Dicas de conservação do pão", sub: "Padaria Sol Nascente · 05/11", tags: ["Carrossel"], owner: "Pedro Redator" },
          { title: "Bastidores da obra", sub: "Csc Engenharia · 06/11", tags: ["Reels"], owner: "Pedro Redator" },
        ] },
        { title: "Arte", color: "#a78bfa", cards: [
          { title: "Black Friday — 3 slides", sub: "Clínica Alfa · 03/11", tags: ["Carrossel", "Atrasada"], owner: "Lara Designer", _note: "Versão 2 após o parecer: trocar a foto de capa e destacar o desconto." },
          { title: "30 anos de história", sub: "Industria Alfa · 04/11", tags: ["Post"], owner: "Lara Designer" },
        ] },
        { title: "Revisão interna", color: "#38bdf8", cards: [
          { title: "Depoimento de paciente", sub: "Dr. Roberto · 04/11", tags: ["Reels"], owner: "Bruna Castro" },
        ] },
        { title: "Aprovação do cliente", color: "#f59e0b", cards: [
          { title: "Pão de fermentação natural", sub: "Padaria Sol Nascente · 02/11", tags: ["Reels"], owner: "Caio Social", _timeline: [{ when: "Hoje 09:10", text: "Link de aprovação enviado ao cliente" }, { when: "Ontem", text: "Revisão interna aprovada" }] },
        ] },
        { title: "Agendado", color: "#22c55e", cards: [
          { title: "Promoção de segunda", sub: "Padaria Sol Nascente · 02/11", tags: ["Stories"], owner: "Caio Social" },
          { title: "Novidades do cardápio", sub: "Restaurante Song · 01/11", tags: ["Post"], owner: "Caio Social" },
        ] },
      ],
    },

    calendario: {
      type: "calendar", title: "Calendário editorial", subtitle: "Publicações agendadas por cliente", week: "2 a 6 de novembro de 2026",
      legend: [{ label: "Post", color: "#0891a0" }, { label: "Reels", color: "#8b5cf6" }, { label: "Carrossel", color: "#f97316" }],
      days: ["Seg 02/11", "Ter 03/11", "Qua 04/11", "Qui 05/11", "Sex 06/11"],
      start: 8, end: 20,
      events: [
        { day: 0, start: "09:00", end: "09:30", title: "Padaria Sol Nascente", sub: "Stories promo", color: "#0891a0" },
        { day: 0, start: "18:00", end: "18:30", title: "Padaria Sol Nascente", sub: "Reels fermentação", color: "#8b5cf6" },
        { day: 1, start: "12:00", end: "12:30", title: "Clínica Alfa", sub: "Carrossel Black Friday", color: "#f97316" },
        { day: 2, start: "10:00", end: "10:30", title: "Industria Alfa", sub: "30 anos", color: "#0891a0" },
        { day: 2, start: "19:00", end: "19:30", title: "Dr. Roberto", sub: "Depoimento", color: "#8b5cf6" },
        { day: 3, start: "11:30", end: "12:00", title: "Padaria Sol Nascente", sub: "Dicas de conservação", color: "#f97316" },
        { day: 4, start: "17:00", end: "17:30", title: "Csc Engenharia", sub: "Bastidores da obra", color: "#8b5cf6" },
      ],
      eventActions: [{ label: "Ver peça", icon: "image", go: "programacao" }],
    },

    aprovacoes: {
      type: "table", title: "Aprovações", subtitle: "O cliente aprova ou recusa pelo link, sem precisar de login",
      columns: [
        { key: "peca", label: "Peça" },
        { key: "cliente", label: "Cliente", type: "who" },
        { key: "versao", label: "Versão" },
        { key: "enviado", label: "Enviado" },
        { key: "status", label: "Situação", type: "badge", map: { Aprovado: "green", Recusado: "red", Aguardando: "amber" } },
      ],
      filter: { key: "status", options: ["Aguardando", "Aprovado", "Recusado"] },
      rowActions: [{ label: "Reenviar link", icon: "link", toast: "Link de aprovação reenviado ao cliente" }, { label: "Simular aprovação", icon: "thumb_up", set: { status: "Aprovado" }, toast: "Cliente aprovou — peça seguiu para Agendado" }],
      rows: [
        { peca: "Carrossel Black Friday", cliente: "Clínica Alfa", versao: "v2", enviado: "27/10", status: "Recusado", _note: "Parecer do cliente: “Trocar a foto de capa por uma da equipe.”" },
        { peca: "Reels fermentação natural", cliente: "Padaria Sol Nascente", versao: "v1", enviado: "hoje", status: "Aguardando" },
        { peca: "Post 30 anos", cliente: "Industria Alfa", versao: "v1", enviado: "25/10", status: "Aguardando" },
        { peca: "Stories promoção", cliente: "Padaria Sol Nascente", versao: "v1", enviado: "24/10", status: "Aprovado" },
        { peca: "Novidades do cardápio", cliente: "Restaurante Song", versao: "v3", enviado: "22/10", status: "Aprovado" },
      ],
    },

    clientes: {
      type: "table", title: "Clientes", subtitle: "Ficha com canais, contas da Meta e logo",
      columns: [
        { key: "nome", label: "Cliente", type: "who", sub: "segmento" },
        { key: "plano", label: "Plano" },
        { key: "mensal", label: "Mensalidade", type: "money" },
        { key: "canais", label: "Canais" },
        { key: "status", label: "Situação", type: "badge", map: { Ativo: "green", Pausado: "amber", Encerrado: "gray" } },
      ],
      filter: { key: "status", options: ["Ativo", "Pausado", "Encerrado"] },
      form: [{ key: "nome", label: "Cliente", full: true }, { key: "segmento", label: "Segmento" }, { key: "plano", label: "Plano", type: "select", options: ["Essencial", "Crescimento", "Premium"] }, { key: "mensal", label: "Mensalidade (R$)", type: "money" }],
      defaults: { canais: "Instagram", status: "Ativo" }, newLabel: "Novo cliente",
      rowActions: [{ label: "Conectar conta Meta", icon: "link", toast: "Conta do Instagram vinculada via Meta Graph API" }, { label: "Ver programação", icon: "view_kanban", go: "programacao" }],
      rows: [
        { nome: "Padaria Sol Nascente", segmento: "Alimentação", plano: "Crescimento", mensal: 2400, canais: "Instagram, Facebook", status: "Ativo" },
        { nome: "Clínica Alfa", segmento: "Saúde e estética", plano: "Premium", mensal: 3900, canais: "Instagram, TikTok", status: "Ativo" },
        { nome: "Industria Alfa", segmento: "Indústria", plano: "Essencial", mensal: 2400, canais: "LinkedIn, Instagram", status: "Ativo" },
        { nome: "Dr. Roberto", segmento: "Odontologia", plano: "Crescimento", mensal: 2400, canais: "Instagram", status: "Ativo" },
        { nome: "Csc Engenharia", segmento: "Construção", plano: "Essencial", mensal: 1800, canais: "Instagram", status: "Pausado" },
      ],
    },

    oportunidades: {
      type: "kanban", title: "Oportunidades", subtitle: "Funil comercial da agência", money: true,
      tagMap: { Indicação: "teal", Site: "blue", Instagram: "purple" },
      form: [{ key: "title", label: "Empresa", full: true }, { key: "sub", label: "Plano" }, { key: "value", label: "Mensalidade (R$)", type: "money" }],
      columns: [
        { title: "Contato", color: "#94a3b8", cards: [{ title: "Estrela Pet Shop", sub: "Plano Essencial", value: 1800, tags: ["Instagram"], owner: "Bruna Castro" }] },
        { title: "Reunião", color: "#38bdf8", cards: [{ title: "Bello Alimentos", sub: "Plano Crescimento", value: 2400, tags: ["Indicação"], owner: "Bruna Castro" }] },
        { title: "Proposta", color: "#a78bfa", cards: [{ title: "Delices Confeitaria", sub: "Plano Premium", value: 3900, tags: ["Site"], owner: "Bruna Castro" }] },
        { title: "Fechado", color: "#22c55e", cards: [{ title: "Restaurante Song", sub: "Plano Crescimento", value: 2400, tags: ["Indicação"], owner: "Bruna Castro" }] },
      ],
    },

    receber: {
      type: "table", title: "Contas a receber", subtitle: "Boletos e Pix emitidos pelo Asaas, baixa automática por webhook",
      actions: [{ label: "Gerar cobranças do mês", icon: "bolt", primary: true, toast: "18 cobranças geradas no Asaas (sandbox)" }],
      columns: [
        { key: "cliente", label: "Cliente", type: "who" },
        { key: "referencia", label: "Referência" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "forma", label: "Forma" },
        { key: "status", label: "Situação", type: "badge", map: { Recebido: "green", Pendente: "blue", Vencido: "red" } },
      ],
      filter: { key: "status", options: ["Pendente", "Vencido", "Recebido"] },
      rowActions: [{ label: "Copiar link de pagamento", icon: "content_copy", toast: "Link do Asaas copiado" }, { label: "Simular pagamento", icon: "price_check", set: { status: "Recebido" }, toast: "Webhook do Asaas recebido — cobrança baixada" }],
      rows: [
        { cliente: "Padaria Sol Nascente", referencia: "Mensalidade 11/2026", vencimento: "05/11/2026", valor: 2400, forma: "Pix", status: "Pendente" },
        { cliente: "Clínica Alfa", referencia: "Mensalidade 11/2026", vencimento: "05/11/2026", valor: 3900, forma: "Boleto", status: "Pendente" },
        { cliente: "Dr. Roberto", referencia: "Mensalidade 10/2026", vencimento: "05/10/2026", valor: 2400, forma: "Boleto", status: "Vencido" },
        { cliente: "Industria Alfa", referencia: "Mensalidade 10/2026", vencimento: "05/10/2026", valor: 2400, forma: "Pix", status: "Recebido" },
      ],
    },

    pagar: {
      type: "table", title: "Contas a pagar", subtitle: "Fornecedores e freelancers pagos por Pix via Asaas",
      columns: [
        { key: "fornecedor", label: "Fornecedor", type: "who" },
        { key: "descricao", label: "Descrição" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Pago: "green", Agendado: "blue", "Em aberto": "amber" } },
      ],
      rowActions: [{ label: "Pagar via Pix", icon: "pix", set: { status: "Agendado" }, toast: "Transferência Pix agendada no Asaas" }],
      rows: [
        { fornecedor: "Studio Foco Fotografia", descricao: "Ensaio Padaria Sol Nascente", vencimento: "03/11/2026", valor: 1200, status: "Em aberto" },
        { fornecedor: "Lara Designer (PJ)", descricao: "Artes de outubro", vencimento: "05/11/2026", valor: 4200, status: "Agendado" },
        { fornecedor: "Ferramentas de design", descricao: "Assinatura anual", vencimento: "10/11/2026", valor: 980, status: "Em aberto" },
        { fornecedor: "Meta Ads", descricao: "Impulsionamento Clínica Alfa", vencimento: "28/10/2026", valor: 1500, status: "Pago" },
      ],
    },
  },
};
