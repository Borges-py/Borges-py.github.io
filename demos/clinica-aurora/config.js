window.DEMO = {
  slug: "clinica-aurora",
  name: "Clínica Aurora",
  company: "Clínica Aurora — Harmonização Facial e Medicina Estética",
  docFooter: "Av. das Araucárias, 500 · Curitiba/PR",
  logo: "logo.svg",
  logoSidebar: "logo-branco.svg",
  theme: { primary: "#0b3d33", accent: "#ac7e31", sidebarBg: "#082b24", sidebarFg: "#f1ebdf", bg: "#faf8f4", radius: "14px" },
  user: { name: "Dra. Beatriz Lemos", role: "Médica responsável" },
  login: {
    title: "Bem-vinda de volta",
    subtitle: "Acesse com o e-mail da clínica.",
    heroTitle: "Cuidado clínico com clareza para a recepção e o consultório",
    heroText: "Agenda, prontuário com fotos de antes e depois, orçamentos, estoque e financeiro de uma clínica de estética.",
    bullets: ["Agenda e pacientes", "Prontuário e fotos com comparativo", "Finanças e orçamentos"],
    bg: "radial-gradient(circle at 25% 15%, rgba(172,126,49,.55) 0, transparent 45%), linear-gradient(160deg,#082b24,#0b3d33 60%,#1d5a4c)",
    email: "beatriz@clinicaaurora.exemplo.com",
  },
  notifications: [
    { icon: "cake", title: "2 pacientes fazem aniversário hoje", sub: "Enviar mensagem pelo WhatsApp" },
    { icon: "inventory", title: "Toxina botulínica abaixo do estoque mínimo", sub: "Restam 3 frascos" },
    { icon: "event_available", title: "Mariana Duarte confirmou o retorno de amanhã", sub: "WhatsApp" },
  ],
  nav: [
    { items: [{ id: "inicio", label: "Início", icon: "home" }] },
    { group: "Atendimento", items: [
      { id: "agenda", label: "Agenda", icon: "calendar_month" },
      { id: "pacientes", label: "Pacientes", icon: "face" },
      { id: "whatsapp", label: "WhatsApp", icon: "chat", count: 3 },
    ] },
    { group: "Clínico", items: [
      { id: "procedimentos", label: "Procedimentos", icon: "vaccines" },
      { id: "orcamentos", label: "Orçamentos", icon: "request_quote" },
      { id: "estoque", label: "Estoque", icon: "inventory_2" },
    ] },
    { group: "Gestão", items: [
      { id: "financeiro", label: "Financeiro", icon: "account_balance" },
      { id: "relatorios", label: "Relatórios", icon: "bar_chart" },
    ] },
  ],
  home: "inicio",
  screens: {
    inicio: {
      type: "dashboard", title: "Bom dia, Dra. Beatriz", subtitle: "Quinta-feira, 29 de outubro",
      kpis: [
        { label: "Atendimentos hoje", value: "9", delta: "2 primeiras consultas", icon: "event" },
        { label: "Faturamento do mês", value: "R$ 87,6 mil", delta: "▲ 14% vs. setembro", icon: "payments" },
        { label: "Orçamentos em aberto", value: "12", delta: "R$ 31,2 mil", icon: "request_quote" },
        { label: "Taxa de retorno", value: "68%", delta: "▲ 5 p.p.", icon: "autorenew" },
      ],
      widgets: [
        { title: "Agenda de hoje", go: "agenda", map: { Confirmado: "green", "Aguardando": "amber", "Em atendimento": "blue" }, items: [
          { title: "Mariana Duarte", sub: "09:00 · Toxina botulínica — retorno", badge: "Em atendimento", meta: "Sala 1" },
          { title: "Fernanda Lima", sub: "10:00 · Preenchimento labial", badge: "Confirmado", meta: "Sala 2" },
          { title: "Patrícia Alves", sub: "11:30 · Bioestimulador de colágeno", badge: "Aguardando", meta: "Sala 1" },
          { title: "Renata Dias", sub: "14:00 · Consulta de avaliação", badge: "Confirmado", meta: "Sala 1" },
        ] },
        { title: "Procedimentos mais realizados", chart: { type: "donut", labels: ["Toxina botulínica", "Preenchimento", "Bioestimulador", "Skinbooster", "Peeling"], series: [{ data: [58, 34, 21, 17, 12] }], centerLabel: "no mês", colors: ["#0b3d33", "#ac7e31", "#3f7d6e", "#d9b779", "#8fb8ad"] } },
        { title: "Faturamento por mês", span: true, chart: { type: "bar", money: true, labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "Faturamento", data: [61200, 66800, 70100, 73900, 76800, 87600], color: "#0b3d33" }] } },
      ],
    },

    agenda: {
      type: "calendar", title: "Agenda", subtitle: "Por profissional e sala", week: "26 a 30 de outubro de 2026", today: 3,
      actions: [{ label: "Novo agendamento", icon: "add", primary: true, form: [{ key: "p", label: "Paciente", full: true }, { key: "proc", label: "Procedimento", type: "select", options: ["Consulta de avaliação", "Toxina botulínica", "Preenchimento", "Bioestimulador"] }, { key: "d", label: "Data", type: "date" }, { key: "h", label: "Horário", value: "15:00" }], toast: "Agendamento criado e confirmação enviada no WhatsApp" }],
      legend: [{ label: "Consulta", color: "#0b3d33" }, { label: "Procedimento", color: "#ac7e31" }, { label: "Retorno", color: "#3f7d6e" }],
      days: ["Seg 26/10", "Ter 27/10", "Qua 28/10", "Qui 29/10", "Sex 30/10"],
      start: 8, end: 18,
      events: [
        { day: 0, start: "09:00", end: "10:00", title: "Ana Paula Souza", sub: "Toxina", color: "#ac7e31" },
        { day: 0, start: "14:00", end: "15:00", title: "Beatriz Nogueira", sub: "Avaliação", color: "#0b3d33" },
        { day: 1, start: "10:00", end: "11:30", title: "Carla Mendes", sub: "Bioestimulador", color: "#ac7e31" },
        { day: 2, start: "15:00", end: "16:00", title: "Juliana Prado", sub: "Retorno", color: "#3f7d6e" },
        { day: 3, start: "09:00", end: "10:00", title: "Mariana Duarte", sub: "Retorno toxina", color: "#3f7d6e" },
        { day: 3, start: "10:00", end: "11:00", title: "Fernanda Lima", sub: "Preenchimento", color: "#ac7e31" },
        { day: 3, start: "11:30", end: "13:00", title: "Patrícia Alves", sub: "Bioestimulador", color: "#ac7e31" },
        { day: 3, start: "14:00", end: "15:00", title: "Renata Dias", sub: "Avaliação", color: "#0b3d33" },
        { day: 4, start: "09:30", end: "10:30", title: "Sônia Ribeiro", sub: "Skinbooster", color: "#ac7e31" },
      ],
      eventActions: [{ label: "Enviar lembrete", icon: "chat", toast: "Lembrete enviado no WhatsApp" }, { label: "Fazer check-in", icon: "how_to_reg", toast: "Paciente na recepção — consultório avisado no chat interno" }],
    },

    pacientes: {
      type: "table", title: "Pacientes", subtitle: "Ficha com anamnese, histórico, fotos e documentos",
      columns: [
        { key: "nome", label: "Paciente", type: "who", sub: "celular" },
        { key: "ultimo", label: "Último atendimento" },
        { key: "procedimento", label: "Procedimento" },
        { key: "proximo", label: "Próximo retorno" },
        { key: "status", label: "Situação", type: "badge", map: { Ativa: "green", "Retorno vencido": "amber", Inativa: "gray" } },
      ],
      filter: { key: "status", options: ["Ativa", "Retorno vencido", "Inativa"] },
      form: [{ key: "nome", label: "Nome completo", full: true }, { key: "celular", label: "Celular" }, { key: "procedimento", label: "Interesse", type: "select", options: ["Toxina botulínica", "Preenchimento", "Bioestimulador", "Avaliação"] }],
      defaults: { ultimo: "—", proximo: "—", status: "Ativa" },
      newLabel: "Nova paciente",
      rowActions: [{ label: "Fotos antes e depois", icon: "compare", toast: "Comparativo de fotos aberto" }, { label: "Novo orçamento", icon: "request_quote", go: "orcamentos" }],
      rows: [
        { nome: "Mariana Duarte", celular: "(41) 99000-2222", ultimo: "29/10/2026", procedimento: "Toxina botulínica", proximo: "26/11/2026", status: "Ativa", _extra: { Idade: "34 anos", Alergias: "Nenhuma informada", "Total investido": "R$ 6.420,00" }, _timeline: [{ when: "29/10", text: "Retorno de toxina — 4 UI complementares" }, { when: "15/10", text: "Toxina botulínica — terço superior (50 UI)" }, { when: "02/09", text: "Preenchimento labial 1 ml" }] },
        { nome: "Fernanda Lima", celular: "(41) 99000-3030", ultimo: "12/09/2026", procedimento: "Preenchimento labial", proximo: "29/10/2026", status: "Ativa" },
        { nome: "Patrícia Alves", celular: "(41) 99000-4141", ultimo: "20/08/2026", procedimento: "Bioestimulador", proximo: "20/10/2026", status: "Retorno vencido" },
        { nome: "Renata Dias", celular: "(41) 99000-5252", ultimo: "—", procedimento: "Avaliação", proximo: "29/10/2026", status: "Ativa" },
        { nome: "Sônia Ribeiro", celular: "(41) 99000-6363", ultimo: "03/03/2026", procedimento: "Skinbooster", proximo: "—", status: "Inativa" },
      ],
    },

    whatsapp: {
      type: "inbox", title: "WhatsApp", subtitle: "Inbox da recepção com etapas de atendimento",
      tagMap: { Agendamento: "blue", "Pós-procedimento": "green", Orçamento: "amber" },
      threadActions: [{ label: "Agendar", icon: "event", go: "agenda" }],
      conversations: [
        { name: "Mariana Duarte", phone: "(41) 99000-2222", time: "08:12", unread: 1, tag: "Agendamento", messages: [
          { from: "me", text: "Olá, Mariana! Confirmando seu retorno amanhã às 9h com a Dra. Beatriz 💚", time: "Ontem 17:00" },
          { from: "them", text: "Confirmado! Obrigada 😊", time: "08:12" },
        ] },
        { name: "Fernanda Lima", phone: "(41) 99000-3030", time: "Ontem", unread: 2, tag: "Pós-procedimento", messages: [
          { from: "them", text: "É normal ficar um pouco inchado no segundo dia?", time: "19:40" },
          { from: "them", text: "Mandei foto", time: "19:41" },
        ] },
        { name: "Carolina Reis", phone: "(41) 99000-7474", time: "Seg", tag: "Orçamento", messages: [
          { from: "them", text: "Qual o valor do bioestimulador?", time: "10:20" },
          { from: "me", text: "Oi, Carolina! O valor depende da avaliação. Posso agendar uma consulta para você esta semana?", time: "10:31" },
        ] },
      ],
    },

    procedimentos: {
      type: "table", title: "Procedimentos", subtitle: "Valores, duração e insumos consumidos (baixa automática no estoque)",
      columns: [
        { key: "nome", label: "Procedimento" },
        { key: "duracao", label: "Duração" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "insumos", label: "Insumos" },
        { key: "retorno", label: "Retorno" },
      ],
      form: [{ key: "nome", label: "Procedimento", full: true }, { key: "duracao", label: "Duração" }, { key: "valor", label: "Valor (R$)", type: "money" }],
      defaults: { insumos: "—", retorno: "—" }, newLabel: "Novo procedimento",
      rows: [
        { nome: "Toxina botulínica — terço superior", duracao: "40 min", valor: 1490, insumos: "Toxina 50 UI, seringa, agulha 30G", retorno: "15 dias" },
        { nome: "Preenchimento labial 1 ml", duracao: "60 min", valor: 1690, insumos: "Ácido hialurônico 1 ml, cânula 25G", retorno: "30 dias" },
        { nome: "Bioestimulador de colágeno", duracao: "60 min", valor: 2890, insumos: "Bioestimulador 1 frasco, cânula", retorno: "60 dias" },
        { nome: "Skinbooster", duracao: "45 min", valor: 1290, insumos: "Ácido hialurônico 1 ml", retorno: "30 dias" },
        { nome: "Consulta de avaliação", duracao: "50 min", valor: 450, insumos: "—", retorno: "—" },
      ],
    },

    orcamentos: {
      type: "table", title: "Orçamentos", subtitle: "Plano de tratamento com parcelas e PDF timbrado",
      columns: [
        { key: "id", label: "Nº" },
        { key: "paciente", label: "Paciente", type: "who" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "parcelas", label: "Pagamento" },
        { key: "status", label: "Situação", type: "badge", map: { Aprovado: "green", Pendente: "amber", Recusado: "red" } },
      ],
      filter: { key: "status", options: ["Pendente", "Aprovado", "Recusado"] },
      doc: { title: "Orçamento", numberKey: "id", fields: [{ label: "Paciente", key: "paciente" }, { label: "Profissional", key: "medico" }, { label: "Pagamento", key: "parcelas" }, { label: "Validade", key: "validade" }], note: "Os resultados variam de pessoa para pessoa. Orçamento válido por 15 dias." },
      rowActions: [{ label: "Ver PDF", icon: "picture_as_pdf", kind: "pdf" }, { label: "Aprovar", icon: "check", set: { status: "Aprovado" }, toast: "Orçamento aprovado — parcelas lançadas no financeiro" }],
      rows: [
        { id: "0412", paciente: "Patrícia Alves", valor: 5780, parcelas: "4x no cartão", status: "Pendente", medico: "Dra. Beatriz Lemos", validade: "13/11/2026", _items: [{ desc: "Bioestimulador de colágeno — 2 sessões", qty: 2, unit: 2890 }] },
        { id: "0411", paciente: "Carolina Reis", valor: 3180, parcelas: "Pix à vista", status: "Pendente", medico: "Dra. Beatriz Lemos", validade: "10/11/2026", _items: [{ desc: "Toxina botulínica — terço superior", qty: 1, unit: 1490 }, { desc: "Preenchimento labial 1 ml", qty: 1, unit: 1690 }] },
        { id: "0405", paciente: "Mariana Duarte", valor: 1490, parcelas: "2x no cartão", status: "Aprovado", medico: "Dra. Beatriz Lemos", validade: "—", _items: [{ desc: "Toxina botulínica — terço superior", qty: 1, unit: 1490 }] },
        { id: "0398", paciente: "Sônia Ribeiro", valor: 2580, parcelas: "Pix à vista", status: "Recusado", medico: "Dra. Beatriz Lemos", validade: "—", _items: [{ desc: "Skinbooster — 2 sessões", qty: 2, unit: 1290 }] },
      ],
    },

    estoque: {
      type: "table", title: "Estoque", subtitle: "Insumos e medicamentos por lote e validade",
      columns: [
        { key: "item", label: "Item" },
        { key: "lote", label: "Lote" },
        { key: "validade", label: "Validade" },
        { key: "qtd", label: "Quantidade" },
        { key: "status", label: "Situação", type: "badge", map: { OK: "green", "Estoque baixo": "amber", "Vence em breve": "red" } },
      ],
      filter: { key: "status", options: ["OK", "Estoque baixo", "Vence em breve"] },
      rowActions: [{ label: "Registrar entrada", icon: "add_box", toast: "Entrada de lote registrada" }],
      rows: [
        { item: "Toxina botulínica 100 UI", lote: "TB2410", validade: "08/2027", qtd: "3 frascos", status: "Estoque baixo" },
        { item: "Ácido hialurônico 1 ml", lote: "AH8831", validade: "12/2026", qtd: "14 seringas", status: "Vence em breve" },
        { item: "Bioestimulador de colágeno", lote: "BC0192", validade: "03/2028", qtd: "9 frascos", status: "OK" },
        { item: "Cânula 25G", lote: "CN5521", validade: "01/2029", qtd: "120 un", status: "OK" },
        { item: "Agulha 30G", lote: "AG7710", validade: "06/2028", qtd: "40 un", status: "Estoque baixo" },
      ],
    },

    financeiro: {
      type: "table", title: "Financeiro", subtitle: "Contas a receber e a pagar",
      actions: [{ label: "Cotação do dólar", icon: "currency_exchange", toast: "US$ 1 = R$ 5,42 (cotação de hoje) — usada nos insumos importados" }],
      columns: [
        { key: "descricao", label: "Descrição" },
        { key: "tipo", label: "Tipo", type: "badge", map: { Receber: "green", Pagar: "red" } },
        { key: "vencimento", label: "Vencimento" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "conta", label: "Conta" },
        { key: "status", label: "Situação", type: "badge", map: { Pago: "green", "Em aberto": "blue", Atrasado: "red" } },
      ],
      filter: { key: "tipo", options: ["Receber", "Pagar"] },
      rowActions: [{ label: "Dar baixa", icon: "price_check", set: { status: "Pago" }, toast: "Lançamento baixado" }],
      rows: [
        { descricao: "Mariana Duarte — orçamento 0405 (2/2)", tipo: "Receber", vencimento: "29/11/2026", valor: 745, conta: "Cartão", status: "Em aberto" },
        { descricao: "Fornecedor de toxina — NF 8812", tipo: "Pagar", vencimento: "05/11/2026", valor: 6200, conta: "Banco", status: "Em aberto" },
        { descricao: "Aluguel do consultório", tipo: "Pagar", vencimento: "10/11/2026", valor: 4800, conta: "Banco", status: "Em aberto" },
        { descricao: "Fernanda Lima — preenchimento", tipo: "Receber", vencimento: "12/09/2026", valor: 1690, conta: "Pix", status: "Pago" },
        { descricao: "Patrícia Alves — retorno", tipo: "Receber", vencimento: "20/10/2026", valor: 450, conta: "Pix", status: "Atrasado" },
      ],
    },

    relatorios: {
      type: "dashboard", title: "Relatórios", subtitle: "Indicadores de atendimento e faturamento",
      kpis: [
        { label: "Ticket médio", value: "R$ 1.840", delta: "▲ R$ 120", icon: "receipt_long" },
        { label: "Novos pacientes", value: "17", delta: "▲ 4", icon: "person_add" },
        { label: "Faltas", value: "3%", delta: "▼ 2 p.p.", icon: "event_busy" },
      ],
      widgets: [
        { title: "Atendimentos por dia da semana", chart: { type: "bar", labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], series: [{ name: "Atendimentos", data: [18, 22, 19, 25, 27, 9], color: "#ac7e31" }] } },
        { title: "Receita por procedimento", chart: { type: "line", money: true, labels: ["Jul", "Ago", "Set", "Out"], series: [{ name: "Toxina", data: [31000, 33400, 35800, 41200], color: "#0b3d33" }, { name: "Preenchimento", data: [21000, 22100, 23900, 26800], color: "#ac7e31" }] } },
      ],
    },
  },
};
