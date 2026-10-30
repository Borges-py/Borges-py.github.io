window.DEMO = {
  slug: "ferrum",
  name: "Ferrum",
  company: "Ferrum Comércio de Metais Ltda",
  docFooter: "Ferro e aço · Curitiba/PR",
  logo: "logo.jpg",
  logoSidebar: "logo.jpg",
  theme: { primary: "#163a6b", accent: "#3b82f6", sidebarBg: "#0d1f3a", sidebarFg: "#dbe7fb", bg: "#f3f5f8", radius: "12px" },
  user: { name: "Ricardo Nunes", role: "Vendedor externo" },
  login: {
    title: "Bem-vindo de volta",
    subtitle: "Acesse o portal comercial com seu e-mail.",
    heroTitle: "Portal comercial para vender com ritmo, clareza e presença de marca",
    heroText: "Clientes, orçamentos e notas vêm direto do ERP Sankhya. O vendedor vê carteira, oportunidades e WhatsApp numa tela só.",
    bullets: ["Conversas WhatsApp no CRM", "Oportunidades e funil em tempo real", "Catálogo, reativação e carteira"],
    bg: "radial-gradient(circle at 80% 80%, rgba(59,130,246,.45) 0, transparent 45%), linear-gradient(150deg,#0d1f3a,#163a6b)",
    email: "ricardo@ferrum.exemplo.com",
  },
  notifications: [
    { icon: "sync", title: "Sincronização com o Sankhya concluída", sub: "312 notas · 08:00" },
    { icon: "person_alert", title: "14 clientes da sua carteira sem compra há 90 dias", sub: "Reativação" },
    { icon: "chat", title: "Nova mensagem de Metalúrgica Alpha", sub: "WhatsApp" },
  ],
  nav: [
    { items: [{ id: "portal", label: "Portal de vendas", icon: "monitoring" }] },
    { group: "CRM", items: [
      { id: "conversas", label: "Conversas", icon: "forum", count: 2 },
      { id: "oportunidades", label: "Oportunidades", icon: "view_kanban" },
      { id: "clientes", label: "Clientes", icon: "factory" },
      { id: "reativacao", label: "Reativação", icon: "restart_alt" },
    ] },
    { group: "ERP Sankhya", items: [
      { id: "pedidos", label: "Pedidos e notas", icon: "receipt_long" },
      { id: "vendedores", label: "Vendedores", icon: "badge" },
    ] },
  ],
  home: "portal",
  screens: {
    portal: {
      type: "dashboard", title: "Portal de vendas", subtitle: "Sua carteira em outubro · dados do Sankhya",
      kpis: [
        { label: "Vendido no mês", value: "R$ 318 mil", delta: "79% da meta", icon: "payments" },
        { label: "Toneladas", value: "64,2 t", delta: "▲ 8,1 t", icon: "scale" },
        { label: "Orçamentos abertos", value: "23", delta: "R$ 441 mil", icon: "request_quote" },
        { label: "Clientes para reativar", value: "14", delta: "sem compra há 90+ dias", down: true, icon: "person_alert" },
      ],
      widgets: [
        { title: "Vendas x meta", chart: { type: "bar", money: true, labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"], series: [{ name: "Vendido", data: [352000, 389000, 371000, 402000, 395000, 318000] }, { name: "Meta", data: [380000, 380000, 390000, 400000, 400000, 400000], color: "#cbd5e1" }] } },
        { title: "Mix por linha de produto", chart: { type: "donut", labels: ["Chapas", "Tubos", "Perfis", "Vergalhão", "Telas"], series: [{ data: [38, 24, 18, 12, 8] }], center: "100%", centerLabel: "do faturamento", colors: ["#163a6b", "#3b82f6", "#60a5fa", "#93c5fd", "#cbd5e1"] } },
        { title: "Maiores clientes do mês", go: "clientes", items: [
          { title: "Metalúrgica Alpha S/A", sub: "Chapas e perfis · 9 notas", meta: "R$ 64.200" },
          { title: "Estruturas Sul Ltda", sub: "Tubos industriais · 6 notas", meta: "R$ 51.800" },
          { title: "Serralheria Ponte Nova", sub: "Perfis e telas · 11 notas", meta: "R$ 22.950" },
        ] },
        { title: "Orçamentos esfriando", go: "oportunidades", map: { "7 dias": "amber", "12 dias": "red" }, items: [
          { title: "Galpão Logístico Norte", sub: "Perfil W 200 — 12 t", badge: "7 dias", meta: "R$ 118.000" },
          { title: "Construtora Horizonte", sub: "Vergalhão CA-50 — 8 t", badge: "12 dias", meta: "R$ 54.400" },
        ] },
      ],
    },

    conversas: {
      type: "inbox", title: "Conversas", subtitle: "WhatsApp (uazapi e ChatGuru) vinculado ao cliente do ERP",
      tagMap: { Cliente: "blue", Lead: "amber", Orçamento: "green" },
      threadActions: [{ label: "Abrir oportunidade", icon: "add_task", go: "oportunidades" }],
      conversations: [
        { name: "Metalúrgica Alpha S/A", phone: "+55 41 3000-1239 · Cód. Sankhya 808", time: "09:31", unread: 2, tag: "Cliente", messages: [
          { from: "them", text: "Ricardo, preciso de 40 chapas 1/4 4x2 até quarta. Tem em estoque?", time: "09:28" },
          { from: "them", text: "Mesmo preço da última nota?", time: "09:31" },
        ] },
        { name: "Galpão Logístico Norte", phone: "+55 41 99000-5050", time: "Ontem", tag: "Orçamento", messages: [
          { from: "me", text: "Bom dia! Segue o orçamento 13255 do perfil W 200 com entrega em 10 dias.", time: "08:40" },
          { from: "them", text: "Recebido. Vou passar para a diretoria.", time: "11:02" },
        ] },
        { name: "Oficina Torno Fino", phone: "+55 41 99000-6161", time: "Seg", tag: "Lead", messages: [
          { from: "them", text: "Vocês cortam barra redonda sob medida?", time: "15:10" },
          { from: "me", text: "Cortamos sim! Qual diâmetro e comprimento?", time: "15:22" },
        ] },
      ],
    },

    oportunidades: {
      type: "kanban", title: "Oportunidades", subtitle: "Orçamentos do Sankhya vinculados ao funil", money: true,
      tagMap: { Chapas: "blue", Tubos: "teal", Perfis: "purple", Vergalhão: "amber", Reativação: "red" },
      form: [{ key: "title", label: "Cliente", full: true }, { key: "sub", label: "Produto" }, { key: "value", label: "Valor (R$)", type: "money" }],
      columns: [
        { title: "Prospecção", color: "#94a3b8", cards: [
          { title: "Oficina Torno Fino", sub: "Barra redonda SAE 1045", value: 3800, tags: ["Perfis"], owner: "Ricardo Nunes" },
          { title: "Caldeiraria Irmãos Lima", sub: "Chapa grossa 1/2", value: 27600, tags: ["Chapas", "Reativação"], owner: "Ricardo Nunes" },
        ] },
        { title: "Orçamento enviado", color: "#3b82f6", cards: [
          { title: "Galpão Logístico Norte", sub: "Perfil W 200 — 12 t · orç. 13255", value: 118000, tags: ["Perfis"], owner: "Ricardo Nunes", _timeline: [{ when: "Ontem", text: "Cliente levou para aprovação da diretoria" }, { when: "22/10", text: "Orçamento 13255 criado no Sankhya" }] },
          { title: "Construtora Horizonte", sub: "Vergalhão CA-50 — 8 t", value: 54400, tags: ["Vergalhão"], owner: "Ricardo Nunes" },
        ] },
        { title: "Negociação", color: "#f59e0b", cards: [
          { title: "Metalúrgica Alpha S/A", sub: "40 chapas 1/4 4x2", value: 31600, tags: ["Chapas"], owner: "Ricardo Nunes" },
        ] },
        { title: "Faturado", color: "#22c55e", cards: [
          { title: "Estruturas Sul Ltda", sub: "Tubo industrial 4\" — NF 6238", value: 20158, tags: ["Tubos"], owner: "Ricardo Nunes" },
        ] },
      ],
    },

    clientes: {
      type: "table", title: "Clientes", subtitle: "Parceiros sincronizados do ERP Sankhya",
      columns: [
        { key: "nome", label: "Cliente", type: "who", sub: "cidade" },
        { key: "codigo", label: "Cód. ERP" },
        { key: "ticket", label: "Ticket médio", type: "money" },
        { key: "ultima", label: "Última compra" },
        { key: "status", label: "Situação", type: "badge", map: { Ativo: "green", "Em risco": "amber", Inativo: "red" } },
      ],
      filter: { key: "status", options: ["Ativo", "Em risco", "Inativo"] },
      rowActions: [{ label: "Ver notas", icon: "receipt_long", go: "pedidos" }, { label: "Abrir conversa", icon: "forum", go: "conversas" }],
      rows: [
        { nome: "Metalúrgica Alpha S/A", cidade: "Curitiba/PR", codigo: "808", ticket: 7130, ultima: "27/10/2026", status: "Ativo", _timeline: [{ when: "27/10", text: "NF 6241 — chapas 3/16 — R$ 8.420" }, { when: "13/10", text: "NF 6219 — perfil U — R$ 5.980" }] },
        { nome: "Estruturas Sul Ltda", cidade: "Araucária/PR", codigo: "612", ticket: 8630, ultima: "24/10/2026", status: "Ativo" },
        { nome: "Serralheria Ponte Nova", cidade: "Colombo/PR", codigo: "1044", ticket: 2090, ultima: "21/10/2026", status: "Ativo" },
        { nome: "Caldeiraria Irmãos Lima", cidade: "Campo Largo/PR", codigo: "377", ticket: 13800, ultima: "02/07/2026", status: "Inativo" },
        { nome: "Tornearia Precisa", cidade: "Pinhais/PR", codigo: "951", ticket: 1540, ultima: "11/08/2026", status: "Em risco" },
      ],
    },

    reativacao: {
      type: "table", title: "Reativação", subtitle: "Clientes que pararam de comprar, ordenados por potencial",
      columns: [
        { key: "nome", label: "Cliente", type: "who" },
        { key: "dias", label: "Dias sem compra" },
        { key: "historico", label: "Comprado em 12 meses", type: "money" },
        { key: "linha", label: "Linha principal" },
        { key: "potencial", label: "Potencial", type: "score" },
      ],
      rowActions: [{ label: "Registrar tentativa", icon: "call", toast: "Tentativa de reativação registrada" }, { label: "Criar oportunidade", icon: "add_task", go: "oportunidades" }],
      rows: [
        { nome: "Caldeiraria Irmãos Lima", dias: 119, historico: 96400, linha: "Chapas grossas", potencial: 92 },
        { nome: "Montagens Industriais MS", dias: 104, historico: 58200, linha: "Perfis estruturais", potencial: 81 },
        { nome: "Tornearia Precisa", dias: 79, historico: 18480, linha: "Barras", potencial: 64 },
        { nome: "Guindastes Freire", dias: 142, historico: 12300, linha: "Tubos", potencial: 48 },
      ],
    },

    pedidos: {
      type: "table", title: "Pedidos e notas", subtitle: "Cabeçalhos e itens de nota importados do Sankhya",
      actions: [{ label: "Sincronizar Sankhya", icon: "sync", primary: true, toast: "Sincronização iniciada: clientes, vendedores e notas" }],
      columns: [
        { key: "nota", label: "Nota" },
        { key: "cliente", label: "Cliente" },
        { key: "data", label: "Data" },
        { key: "tipo", label: "Operação" },
        { key: "valor", label: "Valor", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Faturada: "green", Orçamento: "blue", Pendente: "amber" } },
      ],
      filter: { key: "status", options: ["Orçamento", "Pendente", "Faturada"] },
      doc: { title: "Pedido", numberKey: "nota", fields: [{ label: "Cliente", key: "cliente" }, { label: "Data", key: "data" }, { label: "Operação", key: "tipo" }], note: "Documento gerado a partir dos dados do ERP (simulação)." },
      rowActions: [{ label: "Ver documento", icon: "description", kind: "pdf" }],
      rows: [
        { nota: "6241", cliente: "Metalúrgica Alpha S/A", data: "27/10/2026", tipo: "Venda", valor: 8420, status: "Faturada", _items: [{ desc: "Chapa 3/16 2000x1000", qty: 20, unit: 421 }] },
        { nota: "6238", cliente: "Estruturas Sul Ltda", data: "24/10/2026", tipo: "Venda", valor: 20158, status: "Faturada", _items: [{ desc: "Tubo industrial 4\" x 6 m", qty: 38, unit: 530.47 }] },
        { nota: "13255", cliente: "Galpão Logístico Norte", data: "22/10/2026", tipo: "Cotação de venda", valor: 118000, status: "Orçamento", _items: [{ desc: "Perfil W 200 x 26,6 (t)", qty: 12, unit: 9833.33 }] },
        { nota: "13249", cliente: "Construtora Horizonte", data: "17/10/2026", tipo: "Cotação de venda", valor: 54400, status: "Orçamento", _items: [{ desc: "Vergalhão CA-50 10 mm (t)", qty: 8, unit: 6800 }] },
        { nota: "6230", cliente: "Serralheria Ponte Nova", data: "15/10/2026", tipo: "Venda", valor: 3110, status: "Pendente", _items: [{ desc: "Perfil U 3\"", qty: 30, unit: 103.67 }] },
      ],
    },

    vendedores: {
      type: "table", title: "Vendedores", subtitle: "Cadastro sincronizado com o ERP",
      columns: [
        { key: "nome", label: "Vendedor", type: "who", sub: "email" },
        { key: "codigo", label: "Cód. ERP" },
        { key: "carteira", label: "Clientes" },
        { key: "meta", label: "Meta atingida", type: "progress" },
        { key: "whats", label: "WhatsApp", type: "badge", map: { Conectado: "green", Desconectado: "red" } },
      ],
      rows: [
        { nome: "Ricardo Nunes", email: "ricardo@ferrum.exemplo.com", codigo: "5", carteira: 86, meta: 79, whats: "Conectado" },
        { nome: "Maria Silva", email: "maria@ferrum.exemplo.com", codigo: "7", carteira: 71, meta: 92, whats: "Conectado" },
        { nome: "Zeca Andrade", email: "zeca@ferrum.exemplo.com", codigo: "9", carteira: 54, meta: 61, whats: "Desconectado" },
      ],
    },
  },
};
