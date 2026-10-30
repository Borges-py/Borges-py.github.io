window.DEMO = {
  slug: "sintravida",
  name: "Sintravida",
  company: "Sintravida — Sindicato dos Trabalhadores da Saúde",
  docFooter: "CNPJ 20.501.009/0001-93",
  logo: "logo.png",
  logoSidebar: "logo.png",
  theme: { primary: "#0b5d4f", accent: "#19b394", sidebarBg: "#0a3d35", sidebarFg: "#dcf3ee", bg: "#f2f5f4", radius: "10px" },
  user: { name: "Antônio Pereira", role: "Sócio · matrícula 10482" },
  login: {
    title: "Portal do Associado",
    subtitle: "Entre com seu CPF ou e-mail cadastrado.",
    heroTitle: "Lazer e benefícios do sindicato na palma da mão",
    heroText: "Ingressos do parque aquático conveniado, sorteio da casa de praia, pagamento por Pix e check-in por QR Code.",
    bullets: ["Reserva para sócio, dependentes e convidados", "Sorteio de temporada com convites", "Pix com confirmação automática"],
    bg: "linear-gradient(180deg,rgba(10,61,53,.2),rgba(10,61,53,.8)),url(fundo.jpg) center/cover",
    email: "antonio.pereira@exemplo.com",
  },
  notifications: [
    { icon: "celebration", title: "Você foi sorteado! Casa de praia — 14 a 16/11", sub: "Confirme até 03/11 pagando a taxa" },
    { icon: "pix", title: "Pagamento do ingresso confirmado", sub: "Parque aquático · 08/11" },
    { icon: "campaign", title: "Assembleia geral em 10/11 às 19h", sub: "Sede do sindicato" },
  ],
  nav: [
    { items: [{ id: "inicio", label: "Início", icon: "home" }] },
    { group: "Lazer", items: [
      { id: "parque", label: "Parque aquático", icon: "pool" },
      { id: "sorteios", label: "Sorteio casa de praia", icon: "beach_access" },
      { id: "checkin", label: "Check-in", icon: "qr_code_scanner" },
    ] },
    { group: "Administração", items: [
      { id: "disponibilidade", label: "Datas e vagas", icon: "event_available" },
      { id: "associados", label: "Associados", icon: "groups" },
      { id: "notificacoes", label: "Notificações", icon: "notifications" },
      { id: "relatorios", label: "Relatórios", icon: "analytics" },
    ] },
  ],
  home: "inicio",
  screens: {
    inicio: {
      type: "dashboard", title: "Olá, Antônio", subtitle: "Sócio desde 2014 · situação regular",
      actions: [{ label: "Comprar ingresso", icon: "confirmation_number", primary: true, go: "parque" }],
      kpis: [
        { label: "Reservas ativas", value: "2", delta: "próxima em 08/11", icon: "pool" },
        { label: "Sorteios inscritos", value: "1", delta: "resultado saiu ✔", icon: "beach_access" },
        { label: "Dependentes", value: "3", delta: "todos ativos", icon: "family_restroom" },
        { label: "Pagamentos pendentes", value: "1", delta: "taxa da casa de praia", down: true, icon: "pix" },
      ],
      widgets: [
        { title: "Minhas reservas", go: "parque", map: { Pago: "green", "Aguardando Pix": "amber" }, items: [
          { icon: "pool", title: "Parque aquático — 08/11/2026", sub: "Sócio + 2 dependentes + 1 convidado", badge: "Pago", meta: "R$ 40,00" },
          { icon: "beach_access", title: "Casa de praia — 14 a 16/11", sub: "Quarto 3 · sorteio de novembro", badge: "Aguardando Pix", meta: "R$ 180,00" },
        ] },
        { title: "Ocupação do parque (próximos sábados)", chart: { type: "bar", labels: ["01/11", "08/11", "15/11", "22/11", "29/11"], series: [{ name: "Ingressos vendidos", data: [86, 72, 41, 18, 9] }] } },
      ],
    },

    parque: {
      type: "table", title: "Parque aquático", subtitle: "Ingressos do convênio · reserva sincronizada com o sistema do parque",
      search: "Buscar por data ou nome",
      columns: [
        { key: "data", label: "Data" },
        { key: "titular", label: "Titular", type: "who" },
        { key: "pessoas", label: "Pessoas" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Pago: "green", "Aguardando Pix": "amber", Cancelado: "red" } },
      ],
      filter: { key: "status", options: ["Pago", "Aguardando Pix", "Cancelado"] },
      form: [{ key: "data", label: "Data da visita", type: "date" }, { key: "pessoas", label: "Pessoas", type: "select", options: ["Sócio", "Sócio + 1 dependente", "Sócio + 2 dependentes", "Sócio + 2 dependentes + 1 convidado"] }, { key: "valor", label: "Valor (R$)", type: "money", value: 40 }],
      defaults: { titular: "Antônio Pereira", status: "Aguardando Pix" }, newLabel: "Comprar ingresso",
      doc: { title: "Comprovante de reserva", numberKey: "codigo", fields: [{ label: "Titular", key: "titular" }, { label: "Data", key: "data" }, { label: "Pessoas", key: "pessoas" }], note: "Apresente o QR Code na portaria do parque. Documento com foto obrigatório." },
      rowActions: [{ label: "Ver comprovante", icon: "receipt", kind: "pdf" }, { label: "Pagar com Pix", icon: "pix", set: { status: "Pago" }, toast: "Pix confirmado pelo Asaas — reserva enviada ao parque" }],
      rows: [
        { codigo: "AQ-0116", data: "08/11/2026", titular: "Antônio Pereira", pessoas: "Sócio + 2 dependentes + 1 convidado", valor: 40, status: "Pago", _items: [{ desc: "Ingresso sócio", qty: 1, unit: 0 }, { desc: "Ingresso dependente", qty: 2, unit: 10 }, { desc: "Ingresso convidado", qty: 1, unit: 20 }] },
        { codigo: "AQ-0121", data: "15/11/2026", titular: "Carla Souza", pessoas: "Sócio + 1 dependente", valor: 10, status: "Aguardando Pix", _items: [{ desc: "Ingresso sócio", qty: 1, unit: 0 }, { desc: "Ingresso dependente", qty: 1, unit: 10 }] },
        { codigo: "AQ-0109", data: "01/11/2026", titular: "Marcos Lima", pessoas: "Sócio", valor: 0, status: "Pago", _items: [{ desc: "Ingresso sócio", qty: 1, unit: 0 }] },
        { codigo: "AQ-0098", data: "25/10/2026", titular: "Joana Prates", pessoas: "Sócio + 3 convidados", valor: 60, status: "Cancelado", _items: [{ desc: "Ingresso convidado", qty: 3, unit: 20 }] },
      ],
    },

    sorteios: {
      type: "table", title: "Sorteio da casa de praia", subtitle: "Inscrição, sorteio por quarto, convites e lista de espera",
      columns: [
        { key: "periodo", label: "Período" },
        { key: "inscritos", label: "Inscritos" },
        { key: "quartos", label: "Quartos" },
        { key: "resultado", label: "Seu resultado" },
        { key: "status", label: "Situação", type: "badge", map: { "Sorteio aberto": "blue", "Aguardando sorteio": "amber", "Sorteio realizado": "green" } },
      ],
      filter: { key: "status", options: ["Sorteio aberto", "Aguardando sorteio", "Sorteio realizado"] },
      rowActions: [{ label: "Ver regulamento", icon: "gavel", toast: "Regulamento aberto" }, { label: "Inscrever-me", icon: "how_to_reg", toast: "Inscrição confirmada! Avisaremos quando o sorteio for encerrado. Boa sorte!" }],
      rows: [
        { periodo: "14 a 16/11/2026", inscritos: 128, quartos: 6, resultado: "Sorteado · quarto 3", status: "Sorteio realizado", _timeline: [{ when: "28/10 20:00", text: "Sorteio realizado — 6 quartos + 10 na lista de espera" }, { when: "09/10", text: "Inscrições abertas" }] },
        { periodo: "21 a 23/11/2026", inscritos: 96, quartos: 6, resultado: "Inscrito", status: "Aguardando sorteio" },
        { periodo: "05 a 07/12/2026", inscritos: 41, quartos: 6, resultado: "—", status: "Sorteio aberto" },
        { periodo: "Réveillon 2027", inscritos: 312, quartos: 6, resultado: "—", status: "Sorteio aberto" },
      ],
    },

    checkin: {
      type: "table", title: "Check-in", subtitle: "Validação na portaria por QR Code",
      actions: [{ label: "Escanear QR Code", icon: "qr_code_scanner", primary: true, toast: "QR válido: Antônio Pereira + 3 — entrada liberada ✔" }],
      columns: [
        { key: "nome", label: "Titular", type: "who" },
        { key: "evento", label: "Evento" },
        { key: "hora", label: "Horário" },
        { key: "status", label: "Situação", type: "badge", map: { "Check-in feito": "green", Aguardando: "gray", Recusado: "red" } },
      ],
      rows: [
        { nome: "Marcos Lima", evento: "Parque aquático 01/11", hora: "09:12", status: "Check-in feito" },
        { nome: "Lúcia Andrade", evento: "Parque aquático 01/11", hora: "09:30", status: "Check-in feito" },
        { nome: "Paulo Vieira", evento: "Parque aquático 01/11", hora: "—", status: "Aguardando" },
        { nome: "Rita Nogueira", evento: "Parque aquático 01/11", hora: "09:41", status: "Recusado", _note: "QR Code de outra data (25/10)." },
      ],
    },

    disponibilidade: {
      type: "table", title: "Datas e vagas do parque", subtitle: "Capacidade e preço por tipo de ingresso",
      columns: [
        { key: "data", label: "Data" },
        { key: "vagas", label: "Vagas" },
        { key: "vendidos", label: "Vendidos" },
        { key: "ocupacao", label: "Ocupação", type: "progress" },
        { key: "convidado", label: "Convidado", type: "money" },
      ],
      form: [{ key: "data", label: "Data", type: "date" }, { key: "vagas", label: "Vagas", type: "number", value: 100 }, { key: "convidado", label: "Preço convidado (R$)", type: "money", value: 20 }],
      defaults: { vendidos: 0, ocupacao: 0 }, newLabel: "Nova data",
      rows: [
        { data: "01/11/2026", vagas: 100, vendidos: 86, ocupacao: 86, convidado: 20 },
        { data: "08/11/2026", vagas: 100, vendidos: 72, ocupacao: 72, convidado: 20 },
        { data: "15/11/2026", vagas: 100, vendidos: 41, ocupacao: 41, convidado: 20 },
        { data: "22/11/2026", vagas: 120, vendidos: 18, ocupacao: 15, convidado: 25 },
      ],
    },

    associados: {
      type: "table", title: "Associados", subtitle: "Base sincronizada com o sistema de gestão do sindicato",
      actions: [{ label: "Sincronizar base", icon: "sync", toast: "Base sincronizada: 3.418 sócios ativos" }],
      columns: [
        { key: "nome", label: "Nome", type: "who", sub: "matricula" },
        { key: "perfil", label: "Perfil", type: "badge", map: { Sócio: "green", "Não sócio": "gray", Funcionário: "blue" } },
        { key: "dependentes", label: "Dependentes" },
        { key: "desde", label: "Desde" },
      ],
      filter: { key: "perfil", options: ["Sócio", "Não sócio", "Funcionário"] },
      rows: [
        { nome: "Antônio Pereira", matricula: "Matrícula 10482", perfil: "Sócio", dependentes: 3, desde: "2014" },
        { nome: "Carla Souza", matricula: "Matrícula 11937", perfil: "Sócio", dependentes: 1, desde: "2019" },
        { nome: "Marcos Lima", matricula: "Matrícula 09811", perfil: "Sócio", dependentes: 0, desde: "2011" },
        { nome: "Joana Prates", matricula: "—", perfil: "Não sócio", dependentes: 0, desde: "2026" },
        { nome: "Equipe de atendimento", matricula: "—", perfil: "Funcionário", dependentes: 0, desde: "2020" },
      ],
    },

    notificacoes: {
      type: "table", title: "Notificações", subtitle: "Avisos enviados dentro do portal",
      form: [{ key: "titulo", label: "Título", full: true }, { key: "publico", label: "Público", type: "select", options: ["Todos os sócios", "Inscritos no sorteio", "Reservas do parque"] }],
      defaults: { enviada: "agora", lidas: "0%" }, newLabel: "Nova notificação",
      columns: [
        { key: "titulo", label: "Título" },
        { key: "publico", label: "Público" },
        { key: "enviada", label: "Enviada" },
        { key: "lidas", label: "Lidas" },
      ],
      rows: [
        { titulo: "Resultado do sorteio — novembro", publico: "Inscritos no sorteio", enviada: "28/10 20:05", lidas: "91%" },
        { titulo: "Assembleia geral 10/11", publico: "Todos os sócios", enviada: "25/10 10:00", lidas: "63%" },
        { titulo: "Parque fechado para manutenção 18/10", publico: "Reservas do parque", enviada: "12/10 08:00", lidas: "88%" },
      ],
    },

    relatorios: {
      type: "dashboard", title: "Relatórios", subtitle: "Uso dos benefícios",
      kpis: [
        { label: "Ingressos no ano", value: "4.812", delta: "▲ 23%", icon: "confirmation_number" },
        { label: "Arrecadado com convidados", value: "R$ 31,4 mil", icon: "payments" },
        { label: "Taxa de comparecimento", value: "94%", icon: "how_to_reg" },
      ],
      widgets: [
        { title: "Ingressos por mês", chart: { type: "line", labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "Ingressos", data: [210, 180, 340, 290, 410, 520] }] } },
        { title: "Perfil das reservas", chart: { type: "donut", labels: ["Sócio", "Dependente", "Convidado"], series: [{ data: [1890, 2140, 782] }], colors: ["#0b5d4f", "#19b394", "#a7f3d0"] } },
      ],
    },
  },
};
