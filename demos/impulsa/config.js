window.DEMO = {
  slug: "impulsa",
  name: "Mentoria Impulsa",
  company: "Helena Prado Consultoria",
  docFooter: "contato@impulsa.exemplo.com",
  logo: "logo.svg",
  theme: { primary: "#0f766e", accent: "#f97316", sidebarBg: "#0b2a27", sidebarFg: "#dff5f1", bg: "#f5f7f6", radius: "14px", font: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" },
  user: { name: "Helena Prado", role: "Administradora" },
  login: {
    title: "Entrar",
    subtitle: "Acesse o portal da Mentoria Impulsa.",
    heroTitle: "Do primeiro contato ao resultado do mentorado",
    heroText: "CRM, contratos, diagnósticos, planos de ação e reuniões num portal só — com uma visão própria para cada mentorado.",
    bullets: ["Contrato gerado e assinado a partir do lead", "Diagnóstico com comparativo de evolução", "Portal do mentorado com tarefas e conteúdos"],
    bg: "radial-gradient(circle at 20% 20%, #14b8a6 0, transparent 45%), linear-gradient(140deg,#0b2a27,#0f766e 70%,#f97316)",
    email: "helena@impulsa.exemplo.com",
  },
  notifications: [
    { icon: "payments", title: "3 parcelas vencem esta semana", sub: "Financeiro" },
    { icon: "draw", title: "Contrato de Couto PC aguardando assinatura", sub: "Contratos" },
    { icon: "event", title: "Live “Precificação” amanhã às 19h", sub: "Reuniões e lives" },
  ],
  nav: [
    { group: "Comercial", items: [
      { id: "rotina", label: "Minha rotina", icon: "today" },
      { id: "crm", label: "CRM de prospects", icon: "view_kanban" },
      { id: "contratos", label: "Fechamento e contratos", icon: "draw" },
    ] },
    { group: "Mentoria", items: [
      { id: "mentorados", label: "Mentorados", icon: "groups" },
      { id: "diagnosticos", label: "Diagnósticos", icon: "monitoring" },
      { id: "acoes", label: "Planos de ação", icon: "checklist" },
      { id: "agenda", label: "Reuniões e lives", icon: "calendar_month" },
    ] },
    { group: "Gestão", items: [
      { id: "financeiro", label: "Financeiro", icon: "account_balance_wallet" },
      { id: "esteira", label: "Esteira de produtos", icon: "inventory_2" },
    ] },
  ],
  home: "rotina",
  screens: {
    rotina: {
      type: "dashboard", title: "Boa tarde, Helena", subtitle: "Quinta-feira, 29 de outubro",
      actions: [{ label: "Lead", icon: "add", go: "crm" }],
      kpis: [
        { label: "Mentorados ativos", value: "24", delta: "▲ 3 no mês", icon: "groups" },
        { label: "Receita mensal ativa", value: "R$ 58.333", delta: "▲ 12%", icon: "payments" },
        { label: "Cobranças vencidas", value: "3", delta: "R$ 4.998 em aberto", down: true, icon: "warning" },
        { label: "Reuniões na semana", value: "11", delta: "2 lives", icon: "event" },
      ],
      widgets: [
        { title: "Receita recorrente (MRR)", chart: { type: "line", money: true, labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "MRR", data: [31200, 36800, 41500, 47900, 52100, 58333] }] } },
        { title: "Evolução média dos diagnósticos", chart: { type: "bar", labels: ["Vendas", "Marketing", "Finanças", "Gestão", "Pessoas"], series: [{ name: "1º diagnóstico", data: [4.1, 3.6, 3.2, 4.4, 3.9], color: "#99f6e4" }, { name: "Atual", data: [6.8, 6.1, 5.5, 6.9, 6.2] }] } },
        { title: "Cobranças", go: "financeiro", map: { "Sem baixa": "red", "Vence hoje": "amber", Pago: "green" }, items: [
          { title: "Olinda Doces", sub: "Parcela 4/12 · venceu 14/10 · Pix", badge: "Sem baixa", meta: "R$ 1.666,00" },
          { title: "Despachante 55", sub: "Parcela 2/6 · venceu 08/10 · Pix", badge: "Sem baixa", meta: "R$ 1.666,00" },
          { title: "Ótica Bela Vista", sub: "Parcela 1/12 · hoje", badge: "Vence hoje", meta: "R$ 1.666,00" },
        ] },
        { title: "Atenção", items: [
          { icon: "draw", title: "Contrato de Ótica Bela Vista enviado há 4 dias", sub: "Ainda sem assinatura", go: "contratos" },
          { icon: "event_busy", title: "Couto PC — contrato termina em 11/11", sub: "Prepare o relatório de evolução para a renovação", go: "mentorados" },
          { icon: "edit_note", title: "Olinda Doces — sem registro há 45 dias", sub: "Diário do mentorado parado", go: "mentorados" },
          { icon: "task_alt", title: "6 ações vencendo esta semana", sub: "Conferência semanal", go: "acoes" },
        ] },
      ],
    },

    crm: {
      type: "kanban", title: "CRM de prospects", subtitle: "Perdido exige motivo; retomar exige data", money: true,
      tagMap: { Indicação: "teal", Instagram: "purple", Evento: "blue", "Follow-up hoje": "amber" },
      form: [{ key: "title", label: "Empresa / contato", full: true }, { key: "sub", label: "Produto de interesse" }, { key: "value", label: "Valor estimado (R$)", type: "money" }],
      columns: [
        { title: "Novo lead", color: "#94a3b8", cards: [
          { title: "Marco Zero Arquitetura", sub: "Mentoria individual · 12 meses", value: 19992, tags: ["Instagram"], owner: "Carla CS" },
          { title: "Academia Corpo Ativo", sub: "Grupo de mentoria", value: 7200, tags: ["Evento"], owner: "Carla CS" },
        ] },
        { title: "Reunião agendada", color: "#38bdf8", cards: [
          { title: "Rafael Couto · Couto PC", sub: "Renovação da mentoria", value: 19992, tags: ["Follow-up hoje"], owner: "Helena Prado", _timeline: [{ when: "Hoje", text: "Follow-up agendado para as 16h" }, { when: "22/10", text: "Relatório de evolução enviado" }] },
        ] },
        { title: "Proposta", color: "#a78bfa", cards: [
          { title: "Clínica Alfa Estética", sub: "Mentoria individual · 6 meses", value: 11994, tags: ["Indicação"], owner: "Helena Prado" },
          { title: "Bruno Vista · Ótica Bela Vista", sub: "Mentoria individual · 12 meses", value: 19992, tags: ["Indicação"], owner: "Helena Prado" },
        ] },
        { title: "Fechado", color: "#22c55e", cards: [
          { title: "Marta Olinda · Olinda Doces", sub: "Mentoria individual · 12 meses", value: 19992, tags: ["Instagram"], owner: "Helena Prado" },
        ] },
        { title: "Perdido", color: "#ef4444", cards: [
          { title: "Pizzaria Forno Bom", sub: "Motivo: orçamento", value: 7200, tags: ["Evento"], owner: "Carla CS" },
        ] },
      ],
    },

    contratos: {
      type: "table", title: "Fechamento e contratos", subtitle: "Prévia, modelo, PDF e assinatura — a assinatura cria mentorado, parcelas e onboarding",
      columns: [
        { key: "id", label: "Contrato" },
        { key: "cliente", label: "Mentorado", type: "who", sub: "empresa" },
        { key: "produto", label: "Produto" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Assinado: "green", Enviado: "blue", Prévia: "gray", Cancelado: "red" } },
      ],
      filter: { key: "status", options: ["Prévia", "Enviado", "Assinado", "Cancelado"] },
      doc: { title: "Contrato de prestação de serviços", numberKey: "id", fields: [{ label: "Contratante", key: "empresa" }, { label: "Responsável", key: "cliente" }, { label: "Produto", key: "produto" }, { label: "Vigência", key: "vigencia" }], note: "Cláusulas conforme modelo “Mentoria individual v3”. Pagamento mensal via Pix ou boleto. Este documento é uma simulação." },
      rowActions: [{ label: "Ver PDF", icon: "picture_as_pdf", kind: "pdf" }, { label: "Marcar como assinado", icon: "draw", set: { status: "Assinado" }, toast: "Contrato assinado: mentorado, 12 parcelas e onboarding criados" }],
      rows: [
        { id: "CT-0031", cliente: "Bruno Vista", empresa: "Ótica Bela Vista", produto: "Mentoria individual · 12m", valor: 19992, status: "Enviado", vigencia: "11/2026 a 10/2027", _items: [{ desc: "Mentoria individual — mensalidade", qty: 12, unit: 1666 }] },
        { id: "CT-0030", cliente: "Marta Olinda", empresa: "Olinda Doces", produto: "Mentoria individual · 12m", valor: 19992, status: "Assinado", vigencia: "06/2026 a 05/2027", _items: [{ desc: "Mentoria individual — mensalidade", qty: 12, unit: 1666 }] },
        { id: "CT-0029", cliente: "Ana Souza", empresa: "Clínica Alfa Estética", produto: "Mentoria individual · 6m", valor: 11994, status: "Prévia", vigencia: "—", _items: [{ desc: "Mentoria individual — mensalidade", qty: 6, unit: 1999 }] },
        { id: "CT-0027", cliente: "Rafael Couto", empresa: "Couto PC", produto: "Mentoria individual · 12m", valor: 19992, status: "Assinado", vigencia: "11/2025 a 11/2026", _items: [{ desc: "Mentoria individual — mensalidade", qty: 12, unit: 1666 }] },
        { id: "CT-0024", cliente: "Vinícius Lima", empresa: "Despachante 55", produto: "Grupo · 6m", valor: 7200, status: "Assinado", vigencia: "05/2026 a 10/2026", _items: [{ desc: "Grupo de mentoria — mensalidade", qty: 6, unit: 1200 }] },
      ],
    },

    mentorados: {
      type: "table", title: "Mentorados", subtitle: "Ficha com resumo, contratos, tarefas, arquivos e financeiro",
      columns: [
        { key: "nome", label: "Mentorado", type: "who", sub: "empresa" },
        { key: "produto", label: "Produto" },
        { key: "progresso", label: "Plano de ação", type: "progress" },
        { key: "nota", label: "Último diagnóstico" },
        { key: "status", label: "Situação", type: "badge", map: { Ativo: "green", Pausado: "amber", Encerrado: "gray" } },
      ],
      filter: { key: "status", options: ["Ativo", "Pausado", "Encerrado"] },
      rowActions: [{ label: "Ver diagnósticos", icon: "monitoring", go: "diagnosticos" }, { label: "Abrir ficha completa", icon: "badge", toast: "Ficha do mentorado aberta" }],
      rows: [
        { nome: "Marta Olinda", empresa: "Olinda Doces", produto: "Individual 12m", progresso: 62, nota: "6,4 / 10", status: "Ativo", _extra: { "Início": "06/2026", "Próxima reunião": "04/11 às 10h", "Parcelas pagas": "4 de 12" }, _timeline: [{ when: "20/10", text: "Concluiu 3 ações de precificação" }, { when: "06/10", text: "Diagnóstico #2 concluído — nota 6,4 (era 4,1)" }, { when: "15/06", text: "Contrato assinado e onboarding iniciado" }] },
        { nome: "Rafael Couto", empresa: "Couto PC", produto: "Individual 12m", progresso: 88, nota: "7,9 / 10", status: "Ativo", _extra: { "Início": "11/2025", "Renovação": "11/11/2026" } },
        { nome: "Vinícius Lima", empresa: "Despachante 55", produto: "Grupo 6m", progresso: 45, nota: "5,2 / 10", status: "Ativo" },
        { nome: "Ana Souza", empresa: "Clínica Alfa Estética", produto: "Individual 6m", progresso: 30, nota: "4,8 / 10", status: "Pausado" },
        { nome: "Paula Martins", empresa: "Agência Onda", produto: "Grupo 6m", progresso: 100, nota: "8,1 / 10", status: "Encerrado" },
      ],
    },

    diagnosticos: {
      type: "table", title: "Diagnósticos", subtitle: "Metodologia versionada com comparativo entre rodadas",
      columns: [
        { key: "mentorado", label: "Mentorado", type: "who" },
        { key: "rodada", label: "Rodada" },
        { key: "data", label: "Data" },
        { key: "nota", label: "Nota geral", type: "score" },
        { key: "status", label: "Situação", type: "badge", map: { Concluído: "green", "Em andamento": "blue", Agendado: "gray" } },
      ],
      filter: { key: "status", options: ["Concluído", "Em andamento", "Agendado"] },
      rowActions: [{ label: "Gerar sugestões para o plano", icon: "auto_awesome", toast: "5 sugestões de ação adicionadas ao plano" }],
      rows: [
        { mentorado: "Marta Olinda", rodada: "#2", data: "06/10/2026", nota: 64, status: "Concluído", _extra: { Vendas: "7,0 (▲ 2,6)", Marketing: "6,2 (▲ 2,1)", Finanças: "5,1 (▲ 2,3)", Gestão: "6,8" } },
        { mentorado: "Rafael Couto", rodada: "#4", data: "01/10/2026", nota: 79, status: "Concluído" },
        { mentorado: "Vinícius Lima", rodada: "#2", data: "28/10/2026", nota: 52, status: "Em andamento" },
        { mentorado: "Bruno Vista", rodada: "#1", data: "12/11/2026", nota: 0, status: "Agendado" },
      ],
    },

    acoes: {
      type: "kanban", title: "Planos de ação", subtitle: "Conferência da semana — feito vira registro no diário",
      tagMap: { Vendas: "blue", Finanças: "green", Marketing: "purple", Gestão: "teal", Atrasada: "red" },
      form: [{ key: "title", label: "Ação", full: true }, { key: "sub", label: "Mentorado" }],
      columns: [
        { title: "A fazer", color: "#94a3b8", cards: [
          { title: "Revisar tabela de preços", sub: "Olinda Doces", tags: ["Finanças"], owner: "Marta Olinda" },
          { title: "Roteiro de 3 reels por semana", sub: "Ótica Bela Vista", tags: ["Marketing"], owner: "Bruno Vista" },
        ] },
        { title: "Em andamento", color: "#38bdf8", cards: [
          { title: "Script de vendas no WhatsApp", sub: "Despachante 55", tags: ["Vendas", "Atrasada"], owner: "Vinícius Lima" },
          { title: "DRE mensal simplificado", sub: "Couto PC", tags: ["Finanças"], owner: "Rafael Couto" },
        ] },
        { title: "Para conferir", color: "#f59e0b", cards: [
          { title: "Contratar 1 vendedor externo", sub: "Couto PC", tags: ["Gestão"], owner: "Rafael Couto", _note: "Evidência anexada: contrato de trabalho e plano de comissão." },
        ] },
        { title: "Concluída", color: "#22c55e", cards: [
          { title: "Separar contas PF e PJ", sub: "Olinda Doces", tags: ["Finanças"], owner: "Marta Olinda" },
        ] },
      ],
    },

    agenda: {
      type: "calendar", title: "Reuniões e lives", subtitle: "Sincronizado com o Google Agenda", week: "26 a 30 de outubro de 2026", today: 3,
      actions: [{ label: "Conectar Google Agenda", icon: "sync", toast: "Google Agenda conectado (demonstração)" }],
      legend: [{ label: "Reunião individual", color: "#0f766e" }, { label: "Live / grupo", color: "#f97316" }, { label: "Comercial", color: "#6366f1" }],
      days: ["Seg 26/10", "Ter 27/10", "Qua 28/10", "Qui 29/10", "Sex 30/10"],
      start: 8, end: 20,
      events: [
        { day: 0, start: "09:00", end: "10:00", title: "Marta Olinda", sub: "Mentoria #18", color: "#0f766e" },
        { day: 0, start: "14:00", end: "15:00", title: "Rafael Couto", sub: "Renovação", color: "#6366f1" },
        { day: 1, start: "10:00", end: "11:30", title: "Diagnóstico Vinícius", sub: "Rodada #2", color: "#0f766e" },
        { day: 2, start: "19:00", end: "20:00", title: "Live: Precificação", sub: "Grupo de mentoria", color: "#f97316" },
        { day: 3, start: "16:00", end: "16:45", title: "Follow-up Couto PC", sub: "Comercial", color: "#6366f1" },
        { day: 3, start: "09:30", end: "10:30", title: "Bruno Vista", sub: "Onboarding", color: "#0f766e" },
        { day: 4, start: "11:00", end: "12:00", title: "Paula Martins", sub: "Encerramento", color: "#0f766e" },
      ],
      eventActions: [{ label: "Abrir no Google Meet", icon: "videocam", toast: "Link da reunião copiado" }],
    },

    financeiro: {
      type: "table", title: "Financeiro", subtitle: "Parcelas geradas automaticamente pelos contratos recorrentes",
      actions: [{ label: "Exportar", icon: "download", toast: "Planilha exportada (demonstração)" }],
      columns: [
        { key: "mentorado", label: "Mentorado", type: "who" },
        { key: "parcela", label: "Parcela" },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "forma", label: "Forma" },
        { key: "status", label: "Situação", type: "badge", map: { Pago: "green", "Em aberto": "blue", Vencido: "red" } },
      ],
      filter: { key: "status", options: ["Em aberto", "Vencido", "Pago"] },
      rowActions: [{ label: "Enviar lembrete", icon: "mail", toast: "Lembrete enviado por e-mail" }, { label: "Dar baixa", icon: "price_check", set: { status: "Pago" }, toast: "Pagamento registrado" }],
      rows: [
        { mentorado: "Marta Olinda", parcela: "4/12", vencimento: "14/10/2026", valor: 1666, forma: "Pix", status: "Vencido" },
        { mentorado: "Vinícius Lima", parcela: "2/6", vencimento: "08/10/2026", valor: 1200, forma: "Pix", status: "Vencido" },
        { mentorado: "Bruno Vista", parcela: "1/12", vencimento: "29/10/2026", valor: 1666, forma: "Boleto", status: "Em aberto" },
        { mentorado: "Rafael Couto", parcela: "12/12", vencimento: "05/11/2026", valor: 1666, forma: "Pix", status: "Em aberto" },
        { mentorado: "Marta Olinda", parcela: "3/12", vencimento: "14/09/2026", valor: 1666, forma: "Pix", status: "Pago" },
        { mentorado: "Paula Martins", parcela: "6/6", vencimento: "10/09/2026", valor: 1200, forma: "Boleto", status: "Pago" },
      ],
    },

    esteira: {
      type: "table", title: "Esteira de produtos", subtitle: "Produtos, preços por periodicidade e entregáveis",
      columns: [
        { key: "produto", label: "Produto" },
        { key: "periodicidade", label: "Periodicidade" },
        { key: "preco", label: "Preço", type: "money" },
        { key: "entregaveis", label: "Entregáveis" },
        { key: "ativos", label: "Mentorados" },
      ],
      form: [{ key: "produto", label: "Produto", full: true }, { key: "periodicidade", label: "Periodicidade", type: "select", options: ["Mensal", "Trimestral", "Anual"] }, { key: "preco", label: "Preço (R$)", type: "money" }],
      defaults: { entregaveis: "—", ativos: 0 },
      newLabel: "Novo produto",
      rows: [
        { produto: "Mentoria individual", periodicidade: "Mensal", preco: 1666, entregaveis: "2 reuniões/mês, diagnóstico trimestral", ativos: 14 },
        { produto: "Grupo de mentoria", periodicidade: "Mensal", preco: 1200, entregaveis: "4 lives/mês, comunidade", ativos: 9 },
        { produto: "Curso online", periodicidade: "Anual", preco: 997, entregaveis: "Acesso aos módulos gravados", ativos: 41 },
        { produto: "Imersão presencial", periodicidade: "Única", preco: 3500, entregaveis: "2 dias + plano de ação", ativos: 0 },
      ],
    },
  },
};
