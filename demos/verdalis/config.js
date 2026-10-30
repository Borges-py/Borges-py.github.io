window.DEMO = {
  slug: "verdalis",
  name: "Verdalis",
  company: "Verdalis Papel & Embalagens S/A",
  docFooter: "Gestão documental FSC / EUDR",
  logo: "logo.png",
  theme: { primary: "#1f3f8f", accent: "#1f3f8f", sidebarBg: "#ffffff", sidebarFg: "#1e293b", bg: "#f3f6f9", radius: "8px", sidebarLight: true },
  user: { name: "Simone Torres", role: "Analista de certificação" },
  login: {
    title: "Gestão Documental",
    subtitle: "Certificações FSC e EUDR",
    heroTitle: "Toda a cadeia de fornecimento com a documentação em dia",
    heroText: "Madeireiras, reflorestadoras, transportadoras e certificadoras: documentos versionados, vigências controladas e alertas automáticos antes do vencimento.",
    bullets: ["Fim das planilhas e e-mails", "Alertas automáticos de vencimento", "Rastreabilidade para auditoria"],
    bg: "radial-gradient(circle at 75% 25%, rgba(96,165,250,.45) 0, transparent 45%), linear-gradient(150deg,#0f2557,#1f3f8f 60%,#2f6f4f)",
    email: "simone.torres@verdalis.exemplo.com",
  },
  notifications: [
    { icon: "warning", title: "Licença ambiental da Madeireira São Francisco vence em 12 dias", sub: "Alerta enviado ao fornecedor" },
    { icon: "upload_file", title: "Reflorestamento Paraná enviou nova versão do CAR", sub: "Aguardando conferência" },
    { icon: "gpp_bad", title: "2 fornecedores com documentos vencidos", sub: "Homologação suspensa" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Dashboard", icon: "dashboard" }] },
    { group: "Documental", items: [
      { id: "documentos", label: "Documentos", icon: "folder_open" },
      { id: "empresas", label: "Empresas", icon: "domain" },
      { id: "colaboradores", label: "Colaboradores", icon: "badge" },
      { id: "tipos", label: "Tipos de documento", icon: "category" },
    ] },
    { group: "Controle", items: [
      { id: "homologacao", label: "Homologação", icon: "verified" },
      { id: "alertas", label: "Alertas enviados", icon: "mark_email_unread" },
    ] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Painel de conformidade", subtitle: "Situação dos fornecedores para a auditoria FSC de dezembro",
      kpis: [
        { label: "Fornecedores ativos", value: "38", delta: "31 homologados", icon: "domain" },
        { label: "Documentos vigentes", value: "412", delta: "92% do total", icon: "task" },
        { label: "Vencem em 30 dias", value: "17", delta: "alertas já enviados", icon: "schedule" },
        { label: "Vencidos", value: "6", delta: "2 fornecedores suspensos", down: true, icon: "gpp_bad" },
      ],
      widgets: [
        { title: "Situação dos documentos", chart: { type: "donut", labels: ["Vigente", "Vence em 30 dias", "Vencido", "Em análise"], series: [{ data: [412, 17, 6, 13] }], colors: ["#16a34a", "#f59e0b", "#dc2626", "#1f3f8f"], centerLabel: "documentos" } },
        { title: "Vencimentos nos próximos meses", chart: { type: "bar", labels: ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr"], series: [{ name: "Documentos", data: [17, 22, 9, 31, 14, 8], color: "#1f3f8f" }] } },
        { title: "Vencendo primeiro", go: "documentos", map: { "12 dias": "amber", "Vencido": "red", "19 dias": "amber" }, span: true, items: [
          { title: "Madeireira São Francisco Ltda", sub: "Licença de operação ambiental (IAT)", badge: "12 dias", go: "documentos" },
          { title: "Transportes Norte Ltda", sub: "Certificado de cadeia de custódia FSC", badge: "Vencido", go: "documentos" },
          { title: "Serraria Boa Vista", sub: "DOF — Documento de Origem Florestal", badge: "19 dias", go: "documentos" },
        ] },
      ],
    },

    documentos: {
      type: "table", title: "Documentos", subtitle: "Upload com versionamento e controle de vigência",
      search: "Buscar por empresa ou documento",
      columns: [
        { key: "documento", label: "Documento" },
        { key: "empresa", label: "Empresa" },
        { key: "versao", label: "Versão" },
        { key: "vigencia", label: "Vigência até" },
        { key: "status", label: "Situação", type: "badge", map: { Vigente: "green", "Vence em breve": "amber", Vencido: "red", "Em análise": "blue" } },
      ],
      filter: { key: "status", options: ["Vigente", "Vence em breve", "Vencido", "Em análise"] },
      form: [{ key: "documento", label: "Tipo de documento", type: "select", options: ["Licença ambiental", "Certificado FSC", "CAR", "DOF", "Alvará"], full: true }, { key: "empresa", label: "Empresa" }, { key: "vigencia", label: "Vigência até", type: "date" }],
      defaults: { versao: "v1", status: "Em análise" }, newLabel: "Enviar documento",
      rowActions: [{ label: "Baixar arquivo", icon: "download", toast: "Download iniciado (demonstração)" }, { label: "Aprovar versão", icon: "verified", set: { status: "Vigente" }, toast: "Versão aprovada — vigência atualizada" }],
      rows: [
        { documento: "Licença de operação ambiental", empresa: "Madeireira São Francisco Ltda", versao: "v3", vigencia: "10/11/2026", status: "Vence em breve", _timeline: [{ when: "29/10", text: "Alerta de 15 dias enviado para contato@madeireirafs.com.br" }, { when: "10/11/2024", text: "Versão v3 aprovada" }, { when: "08/11/2022", text: "Versão v2" }] },
        { documento: "Certificado de cadeia de custódia FSC", empresa: "Transportes Norte Ltda", versao: "v2", vigencia: "15/10/2026", status: "Vencido" },
        { documento: "CAR — Cadastro Ambiental Rural", empresa: "Reflorestamento Paraná S/A", versao: "v4", vigencia: "—", status: "Em análise" },
        { documento: "DOF — Documento de Origem Florestal", empresa: "Serraria Boa Vista", versao: "v7", vigencia: "17/11/2026", status: "Vence em breve" },
        { documento: "Certificado FSC FM", empresa: "Florestal Sul Ltda", versao: "v2", vigencia: "30/06/2028", status: "Vigente" },
        { documento: "Declaração EUDR de não desmatamento", empresa: "Plantações Santa Cruz", versao: "v1", vigencia: "31/12/2026", status: "Vigente" },
      ],
    },

    empresas: {
      type: "table", title: "Empresas", subtitle: "Fornecedores e prestadores da cadeia florestal — CNPJ consultado na BrasilAPI",
      columns: [
        { key: "nome", label: "Empresa", type: "who", sub: "cidade" },
        { key: "tipo", label: "Tipo" },
        { key: "origem", label: "Origem da matéria-prima" },
        { key: "docs", label: "Documentação", type: "progress" },
        { key: "status", label: "Homologação", type: "badge", map: { Homologada: "green", Pendente: "amber", Suspensa: "red" } },
      ],
      filter: { key: "status", options: ["Homologada", "Pendente", "Suspensa"] },
      form: [{ key: "nome", label: "Razão social", full: true }, { key: "cnpj", label: "CNPJ" }, { key: "tipo", label: "Tipo", type: "select", options: ["Madeireira", "Reflorestamento", "Transportadora", "Certificadora", "Serraria"] }],
      defaults: { cidade: "—", origem: "—", docs: 0, status: "Pendente" }, newLabel: "Nova empresa",
      rowActions: [{ label: "Ver documentos", icon: "folder_open", go: "documentos" }],
      rows: [
        { nome: "Madeireira São Francisco Ltda", cidade: "Telêmaco Borba/PR", tipo: "Madeireira", origem: "Plantio próprio — pinus", docs: 85, status: "Homologada" },
        { nome: "Reflorestamento Paraná S/A", cidade: "Ponta Grossa/PR", tipo: "Reflorestamento", origem: "Eucalipto certificado", docs: 70, status: "Pendente" },
        { nome: "Transportes Norte Ltda", cidade: "Castro/PR", tipo: "Transportadora", origem: "—", docs: 50, status: "Suspensa" },
        { nome: "Certificadora Verde Ltda", cidade: "São Paulo/SP", tipo: "Certificadora", origem: "—", docs: 100, status: "Homologada" },
        { nome: "Serraria Boa Vista", cidade: "Lages/SC", tipo: "Serraria", origem: "Terceiros — pinus", docs: 90, status: "Homologada" },
      ],
    },

    colaboradores: {
      type: "table", title: "Colaboradores", subtitle: "Contatos dos fornecedores que recebem os alertas",
      columns: [
        { key: "nome", label: "Nome", type: "who", sub: "email" },
        { key: "empresa", label: "Empresa" },
        { key: "funcao", label: "Função" },
        { key: "alertas", label: "Recebe alertas", type: "badge", map: { Sim: "green", Não: "gray" } },
      ],
      rows: [
        { nome: "Carlos Moreira", email: "carlos.moreira@madeireirafs.com.br", empresa: "Madeireira São Francisco", funcao: "Gerente ambiental", alertas: "Sim" },
        { nome: "Fernanda Lima", email: "fernanda.lima@reflorpr.com.br", empresa: "Reflorestamento Paraná", funcao: "Coordenadora de certificação", alertas: "Sim" },
        { nome: "Marcos Alves", email: "marcos.alves@transnorte.com.br", empresa: "Transportes Norte", funcao: "Operacional", alertas: "Sim" },
        { nome: "Ricardo Bueno", email: "ricardo.bueno@serraria.com.br", empresa: "Serraria Boa Vista", funcao: "Diretor", alertas: "Não" },
      ],
    },

    tipos: {
      type: "table", title: "Tipos de documento", subtitle: "Quais documentos cada tipo de empresa precisa ter",
      columns: [
        { key: "nome", label: "Documento" },
        { key: "aplica", label: "Aplica-se a" },
        { key: "norma", label: "Exigência" },
        { key: "alerta", label: "Alertar com antecedência" },
      ],
      form: [{ key: "nome", label: "Documento", full: true }, { key: "aplica", label: "Aplica-se a" }, { key: "alerta", label: "Antecedência do alerta", value: "30 dias" }],
      defaults: { norma: "FSC" }, newLabel: "Novo tipo",
      rows: [
        { nome: "Licença de operação ambiental", aplica: "Madeireira, Serraria", norma: "FSC / legal", alerta: "60 dias" },
        { nome: "Certificado de cadeia de custódia", aplica: "Todos", norma: "FSC", alerta: "90 dias" },
        { nome: "CAR — Cadastro Ambiental Rural", aplica: "Reflorestamento", norma: "EUDR", alerta: "30 dias" },
        { nome: "Declaração de não desmatamento", aplica: "Reflorestamento, Madeireira", norma: "EUDR", alerta: "30 dias" },
        { nome: "DOF", aplica: "Madeireira, Transportadora", norma: "Legal", alerta: "15 dias" },
      ],
    },

    homologacao: {
      type: "kanban", title: "Homologação de fornecedores", subtitle: "A empresa avança quando a documentação obrigatória está vigente",
      tagMap: { FSC: "green", EUDR: "blue", "Doc. vencido": "red" },
      columns: [
        { title: "Cadastro", color: "#94a3b8", cards: [{ title: "Plantações Santa Cruz", sub: "3 de 5 documentos enviados", tags: ["EUDR"] }] },
        { title: "Documentos em análise", color: "#1f3f8f", cards: [{ title: "Reflorestamento Paraná S/A", sub: "CAR v4 em conferência", tags: ["FSC", "EUDR"] }] },
        { title: "Homologada", color: "#16a34a", cards: [
          { title: "Madeireira São Francisco", sub: "Válida até 10/11/2026", tags: ["FSC"] },
          { title: "Serraria Boa Vista", sub: "Válida até 17/11/2026", tags: ["FSC"] },
        ] },
        { title: "Suspensa", color: "#dc2626", cards: [{ title: "Transportes Norte Ltda", sub: "Cadeia de custódia vencida em 15/10", tags: ["Doc. vencido"] }] },
      ],
    },

    alertas: {
      type: "table", title: "Alertas enviados", subtitle: "E-mails automáticos para fornecedores e equipe interna",
      actions: [{ label: "Rodar verificação agora", icon: "notifications_active", primary: true, toast: "Verificação concluída: 3 novos alertas enviados" }],
      columns: [
        { key: "quando", label: "Enviado em" },
        { key: "para", label: "Destinatário" },
        { key: "documento", label: "Documento" },
        { key: "tipo", label: "Alerta", type: "badge", map: { "60 dias": "blue", "15 dias": "amber", Vencido: "red" } },
      ],
      rows: [
        { quando: "29/10 07:00", para: "carlos.moreira@madeireirafs.com.br", documento: "Licença de operação", tipo: "15 dias" },
        { quando: "28/10 07:00", para: "operacional@transnorte.com.br", documento: "Cadeia de custódia FSC", tipo: "Vencido" },
        { quando: "18/10 07:00", para: "ricardo.bueno@serraria.com.br", documento: "DOF", tipo: "60 dias" },
      ],
    },
  },
};
