window.DEMO = {
  slug: "clinica-serena",
  name: "Clínica Serena",
  company: "Clínica Serena Dermatologia",
  docFooter: "Av. das Flores, 100 · Cascavel/PR · (45) 3000-0000",
  logo: "logo.png",
  logoSidebar: "logo-branco.png",
  theme: { primary: "#144654", accent: "#4fb3bf", sidebarBg: "#0c2a33", sidebarFg: "#d9eef1", bg: "#f4f7f8", radius: "12px" },
  user: { name: "Recepção", role: "Unidade Cascavel" },
  login: {
    title: "Acesso ao sistema",
    subtitle: "Clínica Serena · Dermatologia",
    heroTitle: "A recepção ganhou uma assistente que nunca dorme",
    heroText: "O agente de IA atende no WhatsApp, tira dúvidas pela base de conhecimento e agenda a consulta com as regras da clínica. A equipe aprova e acompanha tudo pelo painel.",
    bullets: ["Agendamento pelo WhatsApp com aprovação da recepção", "Prontuário, orçamentos e financeiro", "Receitas emitidas na Memed por automação"],
    bg: "linear-gradient(160deg,rgba(12,42,51,.55),rgba(12,42,51,.85)),url(fundo.jpg) center/cover",
    email: "recepcao@clinicaserena.exemplo.com",
  },
  notifications: [
    { icon: "smart_toy", title: "3 agendamentos feitos pela IA aguardam aprovação", sub: "Aprovação da IA" },
    { icon: "help", title: "Nova pergunta sem resposta na base", sub: "“Vocês atendem Unimed?”" },
    { icon: "receipt", title: "Comprovante de Pix recebido", sub: "Ana Paula Teste · consulta 05/11" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Início", icon: "home" }] },
    { group: "Atendimento", items: [
      { id: "agenda", label: "Agenda", icon: "calendar_month" },
      { id: "pacientes", label: "Pacientes", icon: "person" },
      { id: "orcamentos", label: "Orçamentos", icon: "request_quote" },
      { id: "receitas", label: "Receitas (Memed)", icon: "medication" },
    ] },
    { group: "IA + WhatsApp", items: [
      { id: "conversas", label: "Conversas", icon: "chat", count: 2 },
      { id: "aprovacao", label: "Aprovação da IA", icon: "rule", count: 3 },
      { id: "playground", label: "Testar o agente", icon: "smart_toy" },
      { id: "conhecimento", label: "Base de conhecimento", icon: "menu_book" },
      { id: "lacunas", label: "Perguntas sem resposta", icon: "contact_support" },
    ] },
    { group: "Gestão", items: [{ id: "financeiro", label: "Financeiro", icon: "account_balance_wallet" }] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Início", subtitle: "Quinta-feira, 29 de outubro · Cascavel e São Paulo",
      kpis: [
        { label: "Consultas hoje", value: "14", delta: "8 Cascavel · 6 São Paulo", icon: "event" },
        { label: "Agendadas pela IA (mês)", value: "126", delta: "▲ 38% vs. setembro", icon: "smart_toy" },
        { label: "Conversas resolvidas sem humano", value: "74%", delta: "▲ 9 p.p.", icon: "forum" },
        { label: "Aguardando aprovação", value: "3", delta: "agendamentos da IA", down: true, icon: "rule" },
      ],
      widgets: [
        { title: "Agendamentos por canal", chart: { type: "bar", labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "Agente de IA", data: [0, 0, 22, 61, 91, 126] }, { name: "Recepção", data: [148, 151, 139, 118, 102, 94], color: "#cbd5e1" }] } },
        { title: "Motivos de transferência para humano", chart: { type: "donut", labels: ["Reclamação", "Convênio", "Cancelamento", "Fora da base", "Pediu humano"], series: [{ data: [6, 14, 9, 11, 7] }], colors: ["#ef4444", "#f59e0b", "#8b5cf6", "#144654", "#4fb3bf"] } },
        { title: "Precisa da recepção", map: { Aprovação: "amber", Comprovante: "blue", Humano: "red" }, items: [
          { title: "Bruno Teste Souza", sub: "IA agendou consulta 05/11 14h — Cascavel", badge: "Aprovação", go: "aprovacao" },
          { title: "Ana Paula Teste", sub: "Enviou comprovante de Pix", badge: "Comprovante", go: "conversas" },
          { title: "Carla Teste Lima", sub: "Pediu para falar com uma pessoa", badge: "Humano", go: "conversas" },
        ] },
      ],
    },

    agenda: {
      type: "calendar", title: "Agenda", subtitle: "Dra. Beatriz Lemos · Cascavel (seg–qua) e São Paulo (qui–sex)", week: "2 a 6 de novembro de 2026",
      legend: [{ label: "Primeira consulta", color: "#144654" }, { label: "Retorno", color: "#4fb3bf" }, { label: "Procedimento", color: "#d97706" }, { label: "Agendado pela IA", color: "#8b5cf6" }],
      days: ["Seg 02/11", "Ter 03/11", "Qua 04/11", "Qui 05/11", "Sex 06/11"],
      start: 8, end: 18,
      events: [
        { day: 0, start: "08:30", end: "09:15", title: "Ana Paula Teste", sub: "Primeira consulta", color: "#144654" },
        { day: 0, start: "10:00", end: "10:30", title: "Carlos Mendes", sub: "Retorno", color: "#4fb3bf" },
        { day: 1, start: "14:00", end: "15:00", title: "Fernanda Lima", sub: "Laser", color: "#d97706" },
        { day: 2, start: "09:00", end: "09:45", title: "Bruno Teste Souza", sub: "Agendado pela IA", color: "#8b5cf6", _extra: { Unidade: "Cascavel", Origem: "WhatsApp — agente de IA" } },
        { day: 3, start: "11:00", end: "11:45", title: "Patrícia Alves", sub: "Primeira consulta", color: "#144654" },
        { day: 3, start: "14:00", end: "14:45", title: "Renata Dias", sub: "Agendado pela IA", color: "#8b5cf6" },
        { day: 4, start: "09:30", end: "10:00", title: "Sônia Ribeiro", sub: "Retorno", color: "#4fb3bf" },
      ],
      eventActions: [{ label: "Confirmar no WhatsApp", icon: "chat", toast: "Lembrete enviado" }, { label: "Iniciar atendimento", icon: "stethoscope", toast: "Atendimento iniciado — prontuário aberto" }],
    },

    pacientes: {
      type: "table", title: "Pacientes", subtitle: "Cadastro, plano de tratamento e histórico",
      columns: [
        { key: "nome", label: "Paciente", type: "who", sub: "celular" },
        { key: "cidade", label: "Unidade" },
        { key: "ultima", label: "Última consulta" },
        { key: "plano", label: "Plano de tratamento" },
        { key: "status", label: "Situação", type: "badge", map: { Ativo: "green", "Retorno pendente": "amber", Novo: "blue" } },
      ],
      filter: { key: "status", options: ["Novo", "Ativo", "Retorno pendente"] },
      form: [{ key: "nome", label: "Nome", full: true }, { key: "celular", label: "Celular" }, { key: "cidade", label: "Unidade", type: "select", options: ["Cascavel", "São Paulo"] }],
      defaults: { ultima: "—", plano: "—", status: "Novo" }, newLabel: "Novo paciente",
      rowActions: [{ label: "Emitir receita", icon: "medication", go: "receitas" }, { label: "Abrir prontuário", icon: "clinical_notes", toast: "Prontuário aberto" }],
      rows: [
        { nome: "Ana Paula Teste", celular: "(45) 99988-7766", cidade: "Cascavel", ultima: "—", plano: "—", status: "Novo", _extra: { Origem: "WhatsApp (agente de IA)", CPF: "529.982.247-25" } },
        { nome: "Bruno Teste Souza", celular: "(41) 98877-6655", cidade: "Cascavel", ultima: "12/08/2026", plano: "Acne — isotretinoína", status: "Retorno pendente" },
        { nome: "Carla Teste Lima", celular: "(11) 98765-4321", cidade: "São Paulo", ultima: "01/10/2026", plano: "Melasma — clareamento", status: "Ativo", _timeline: [{ when: "01/10", text: "Consulta + peeling de ácido tranexâmico" }, { when: "03/09", text: "Primeira consulta (agendada pela IA)" }] },
        { nome: "Fernanda Lima", celular: "(45) 99000-1212", cidade: "Cascavel", ultima: "20/10/2026", plano: "Laser — rejuvenescimento", status: "Ativo" },
      ],
    },

    orcamentos: {
      type: "table", title: "Orçamentos", subtitle: "Procedimentos com papel timbrado e parcelas",
      columns: [
        { key: "id", label: "Nº" },
        { key: "paciente", label: "Paciente", type: "who" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Aprovado: "green", Enviado: "blue", Recusado: "red" } },
      ],
      doc: { title: "Orçamento", numberKey: "id", fields: [{ label: "Paciente", key: "paciente" }, { label: "Médica", key: "medico" }, { label: "Pagamento", key: "pagamento" }], note: "Orçamento válido por 30 dias. Valores sujeitos à avaliação clínica." },
      rowActions: [{ label: "Ver PDF", icon: "picture_as_pdf", kind: "pdf" }],
      rows: [
        { id: "2026-118", paciente: "Fernanda Lima", valor: 3600, status: "Aprovado", medico: "Dra. Beatriz Lemos", pagamento: "3x no cartão", _items: [{ desc: "Laser fracionado — sessão", qty: 3, unit: 1200 }] },
        { id: "2026-121", paciente: "Carla Teste Lima", valor: 1450, status: "Enviado", medico: "Dra. Beatriz Lemos", pagamento: "Pix", _items: [{ desc: "Peeling de ácido tranexâmico", qty: 2, unit: 450 }, { desc: "Microagulhamento", qty: 1, unit: 550 }] },
        { id: "2026-109", paciente: "Bruno Teste Souza", valor: 980, status: "Recusado", medico: "Dra. Beatriz Lemos", pagamento: "Pix", _items: [{ desc: "Limpeza de pele profunda", qty: 2, unit: 490 }] },
      ],
    },

    receitas: {
      type: "table", title: "Receitas (Memed)", subtitle: "O robô preenche e emite a prescrição na Memed a partir do atendimento",
      columns: [
        { key: "paciente", label: "Paciente", type: "who" },
        { key: "medicamentos", label: "Medicamentos" },
        { key: "data", label: "Data" },
        { key: "status", label: "Situação", type: "badge", map: { Emitida: "green", "Na fila do robô": "amber", Erro: "red" } },
      ],
      filter: { key: "status", options: ["Emitida", "Na fila do robô", "Erro"] },
      form: [{ key: "paciente", label: "Paciente", full: true }, { key: "medicamentos", label: "Medicamentos", type: "textarea" }],
      defaults: { data: "agora", status: "Na fila do robô" }, newLabel: "Nova receita",
      rowActions: [{ label: "Emitir na Memed", icon: "smart_toy", set: { status: "Emitida" }, toast: "Robô abriu a Memed, preencheu e emitiu a receita ✔" }],
      rows: [
        { paciente: "Carla Teste Lima", medicamentos: "Ácido tranexâmico 250 mg; Protetor FPS 60", data: "01/10/2026", status: "Emitida" },
        { paciente: "Bruno Teste Souza", medicamentos: "Isotretinoína 20 mg", data: "12/08/2026", status: "Emitida" },
        { paciente: "Fernanda Lima", medicamentos: "Creme de reparação de barreira", data: "29/10/2026", status: "Na fila do robô" },
        { paciente: "Ana Paula Teste", medicamentos: "Adapaleno 0,1% gel", data: "29/10/2026", status: "Erro", _note: "Sessão da Memed expirada — o robô vai reautenticar e tentar de novo." },
      ],
    },

    conversas: {
      type: "inbox", title: "Conversas", subtitle: "WhatsApp atendido pelo agente de IA", aiName: "Assistente Serena",
      tagMap: { "IA atendendo": "purple", Humano: "red", Agendado: "green" },
      conversations: [
        { name: "Ana Paula Teste", phone: "(45) 99988-7766 · Cascavel", time: "10:41", unread: 1, tag: "Agendado", ai: true, messages: [
          { from: "them", text: "Oi! Queria marcar consulta com a Dra. Beatriz", time: "10:32" },
          { from: "bot", text: "Olá, Ana Paula! 😊 A Dra. Beatriz atende em Cascavel (segunda a quarta) e em São Paulo (quinta e sexta). Em qual cidade você prefere?", time: "10:32", tools: ["listar_locais"] },
          { from: "them", text: "Cascavel", time: "10:34" },
          { from: "bot", text: "Tenho estes horários para primeira consulta em Cascavel:\n• Seg 02/11 às 08:30\n• Ter 03/11 às 16:00\n• Qua 04/11 às 11:00\nQual fica melhor?", time: "10:34", tools: ["consultar_valor_consulta", "consultar_agenda"] },
          { from: "them", text: "Segunda 8:30", time: "10:38" },
          { from: "bot", text: "Perfeito! Agendei sua primeira consulta para segunda, 02/11 às 08:30, em Cascavel ✅ O valor é R$ 450,00. Enviei o endereço e as orientações aqui.", time: "10:41", tools: ["validar_cadastro", "criar_agendamento"] },
        ] },
        { name: "Carla Teste Lima", phone: "(11) 98765-4321 · São Paulo", time: "09:58", unread: 1, tag: "Humano", ai: true, aiPaused: true, messages: [
          { from: "them", text: "Quero falar com uma pessoa, por favor", time: "09:55" },
          { from: "bot", text: "Claro! Já chamei a recepção, alguém te responde em instantes 🙏", time: "09:55", tools: ["transferir_humano"] },
          { from: "sys", text: "Recepção assumiu a conversa" },
        ] },
      ],
      rules: [
        { match: ["consulta", "marcar", "agendar", "horário", "horario"], reply: "Claro! Você prefere atendimento em Cascavel ou em São Paulo?", tools: ["listar_locais"] },
        { match: ["cascavel", "são paulo", "sao paulo"], reply: "Tenho horários na próxima semana: segunda 08:30, terça 16:00 ou quarta 11:00. Qual prefere?", tools: ["consultar_agenda"] },
        { match: ["valor", "preço", "quanto"], reply: "A primeira consulta com a Dra. Beatriz é R$ 450,00 e inclui retorno em até 30 dias.", tools: ["consultar_valor_consulta"] },
      ],
      fallback: { reply: "Vou verificar com a recepção e já te retorno 🙂", tools: ["registrar_gap", "transferir_humano"] },
    },

    aprovacao: {
      type: "table", title: "Aprovação da IA", subtitle: "Agendamentos feitos pelo agente aguardam a confirmação da recepção",
      columns: [
        { key: "paciente", label: "Paciente", type: "who" },
        { key: "quando", label: "Consulta" },
        { key: "local", label: "Unidade" },
        { key: "tipo", label: "Tipo" },
        { key: "status", label: "Situação", type: "badge", map: { Pendente: "amber", Aprovado: "green", Recusado: "red" } },
      ],
      filter: { key: "status", options: ["Pendente", "Aprovado", "Recusado"] },
      rowActions: [{ label: "Recusar", icon: "close", set: { status: "Recusado" }, toast: "Recusado — a IA vai oferecer outro horário ao paciente" }, { label: "Aprovar", icon: "check", set: { status: "Aprovado" }, toast: "Aprovado — confirmação enviada ao paciente no WhatsApp" }],
      rows: [
        { paciente: "Bruno Teste Souza", quando: "04/11 09:00", local: "Cascavel", tipo: "Retorno", status: "Pendente", _extra: { "Pagamento antecipado": "Não exigido", "Conversa": "6 mensagens" } },
        { paciente: "Renata Dias", quando: "05/11 14:00", local: "São Paulo", tipo: "Primeira consulta", status: "Pendente", _extra: { "Pagamento antecipado": "Comprovante enviado" } },
        { paciente: "Sônia Ribeiro", quando: "06/11 09:30", local: "São Paulo", tipo: "Retorno", status: "Pendente" },
        { paciente: "Ana Paula Teste", quando: "02/11 08:30", local: "Cascavel", tipo: "Primeira consulta", status: "Aprovado" },
      ],
    },

    playground: {
      type: "chat", title: "Testar o agente", subtitle: "Simule uma paciente no WhatsApp",
      botName: "Assistente Serena", botSub: "Agente de agendamento · regras no back-end, não no prompt",
      intro: "Olá! Sou a assistente virtual da Clínica Serena 💙 Posso tirar dúvidas e agendar sua consulta com a Dra. Beatriz Lemos. Como posso ajudar?",
      suggestions: ["Quero marcar uma consulta", "Quanto custa a consulta?", "Atendem Unimed?", "Quero cancelar meu horário"],
      side: { title: "Tools que o agente pode chamar", items: ["listar_locais — unidades e dias de atendimento", "consultar_agenda — horários reais livres", "consultar_valor_consulta", "validar_cadastro — CPF e celular", "criar_agendamento — vai para aprovação", "consultar_historico — só do próprio paciente", "registrar_gap — pergunta sem resposta na base", "transferir_humano — reclamação, cancelamento, pedido"] },
      rules: [
        { match: ["marcar", "consulta", "agendar"], reply: "Vamos lá! A Dra. Beatriz atende em Cascavel (seg–qua) e São Paulo (qui–sex). Qual cidade você prefere?", tools: ["listar_locais", "buscar_conhecimento"] },
        { match: ["cascavel", "são paulo", "sao paulo"], reply: "Horários livres para primeira consulta: segunda 02/11 às 08:30, terça 03/11 às 16:00 ou quarta 04/11 às 11:00. Qual prefere? Me envie também seu nome completo e CPF 🙂", tools: ["consultar_agenda"] },
        { match: ["segunda", "terça", "terca", "quarta", "08:30", "16", "11"], reply: "Ótimo! Pré-agendei sua consulta ✅ A recepção confirma em instantes e você recebe a confirmação aqui mesmo.", tools: ["validar_cadastro", "criar_agendamento"] },
        { match: ["custa", "valor", "preço", "preco"], reply: "A primeira consulta é R$ 450,00 e inclui um retorno em até 30 dias.", tools: ["consultar_valor_consulta"] },
        { match: ["cancelar", "desmarcar", "reclama"], reply: "Entendi. Para cancelamentos e alterações, vou te passar para a nossa recepção, tudo bem? Um instante 🙏", tools: ["transferir_humano"] },
      ],
      fallback: { reply: "Essa informação eu não tenho na minha base 😕 Registrei sua pergunta e chamei a recepção para te responder.", tools: ["buscar_conhecimento", "registrar_gap", "transferir_humano"] },
    },

    conhecimento: {
      type: "table", title: "Base de conhecimento", subtitle: "Conteúdo que o agente pode usar — aprovado pela equipe",
      columns: [
        { key: "titulo", label: "Artigo" },
        { key: "tipo", label: "Tipo" },
        { key: "status", label: "Situação", type: "badge", map: { Publicado: "green", "Aguardando aprovação": "gray", "Pendente de republicar": "amber" } },
        { key: "atualizado", label: "Atualizado" },
      ],
      filter: { key: "status", options: ["Publicado", "Aguardando aprovação", "Pendente de republicar"] },
      form: [{ key: "titulo", label: "Título", full: true }, { key: "tipo", label: "Tipo", type: "select", options: ["Informações gerais", "Procedimentos", "Preparo e cuidados"] }, { key: "texto", label: "Conteúdo", type: "textarea" }],
      defaults: { status: "Aguardando aprovação", atualizado: "agora" }, newLabel: "Novo artigo",
      rowActions: [{ label: "Republicar", icon: "publish", set: { status: "Publicado" }, toast: "Artigo publicado e reindexado" }],
      rows: [
        { titulo: "Locais e dias de atendimento", tipo: "Informações gerais", status: "Publicado", atualizado: "02/10" },
        { titulo: "Valores de consulta e retorno", tipo: "Informações gerais", status: "Publicado", atualizado: "01/10" },
        { titulo: "Cuidados após o laser", tipo: "Preparo e cuidados", status: "Pendente de republicar", atualizado: "27/10" },
        { titulo: "O que é o peeling de ácido", tipo: "Procedimentos", status: "Aguardando aprovação", atualizado: "28/10" },
      ],
    },

    lacunas: {
      type: "table", title: "Perguntas sem resposta", subtitle: "Dúvidas que o agente não encontrou na base — viram novos artigos",
      columns: [
        { key: "pergunta", label: "Pergunta do paciente" },
        { key: "vezes", label: "Vezes" },
        { key: "ultima", label: "Última vez" },
        { key: "status", label: "Situação", type: "badge", map: { Aberta: "amber", Respondida: "green" } },
      ],
      rowActions: [{ label: "Criar artigo", icon: "post_add", set: { status: "Respondida" }, toast: "Artigo criado a partir da pergunta" }],
      rows: [
        { pergunta: "Vocês atendem Unimed?", vezes: 14, ultima: "hoje", status: "Aberta" },
        { pergunta: "Tem estacionamento na clínica de São Paulo?", vezes: 6, ultima: "ontem", status: "Aberta" },
        { pergunta: "Posso tomar sol depois do peeling?", vezes: 4, ultima: "27/10", status: "Respondida" },
      ],
    },

    financeiro: {
      type: "table", title: "Financeiro", subtitle: "Lançamentos com trilha de auditoria",
      columns: [
        { key: "descricao", label: "Descrição" },
        { key: "categoria", label: "Categoria" },
        { key: "data", label: "Data" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Pago: "green", "A receber": "blue", "A pagar": "amber" } },
      ],
      filter: { key: "status", options: ["A receber", "A pagar", "Pago"] },
      rows: [
        { descricao: "Consulta — Ana Paula Teste", categoria: "Consultas", data: "02/11/2026", valor: 450, status: "A receber" },
        { descricao: "Laser — Fernanda Lima (1/3)", categoria: "Procedimentos", data: "20/10/2026", valor: 1200, status: "Pago" },
        { descricao: "Aluguel sala São Paulo", categoria: "Estrutura", data: "05/11/2026", valor: 5200, status: "A pagar" },
        { descricao: "Insumos dermatológicos", categoria: "Estoque", data: "08/11/2026", valor: 2380, status: "A pagar" },
      ],
    },
  },
};
