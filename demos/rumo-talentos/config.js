window.DEMO = {
  slug: "rumo-talentos",
  name: "Rumo Talentos",
  company: "Rumo Talentos — Recrutamento e Seleção",
  logo: "logo.png",
  theme: { primary: "#2c1154", accent: "#a187eb", sidebarBg: "#2c1154", sidebarFg: "#ece6fb", bg: "#f6f4fb", radius: "12px" },
  user: { name: "Juliana Reis", role: "Recrutadora" },
  login: {
    title: "Bem-vinda",
    subtitle: "Pessoas certas nos lugares certos.",
    heroTitle: "Centenas de currículos filtrados em minutos",
    heroText: "Cadastre o processo seletivo com os critérios. O sistema coleta os candidatos no ATS Abler, pontua cada um e devolve os aprovados para a etapa certa do funil.",
    bullets: ["Coleta automática no banco de talentos do Abler", "Pontuação por critérios da vaga", "Contato com candidatos via WhatsApp (Digisac)"],
    bg: "radial-gradient(circle at 75% 20%, rgba(161,135,235,.55) 0, transparent 45%), linear-gradient(155deg,#1c0a38,#2c1154 60%,#4c2a8c)",
    email: "juliana@rumotalentos.exemplo.com",
  },
  notifications: [
    { icon: "task_alt", title: "Qualificação concluída: Auxiliar de produção", sub: "312 coletados · 41 qualificados" },
    { icon: "sync_problem", title: "Abler pediu código de verificação", sub: "OTP lido do e-mail automaticamente" },
    { icon: "chat", title: "5 candidatos responderam no WhatsApp", sub: "Digisac" },
  ],
  nav: [
    { items: [{ id: "dashboard", label: "Dashboard", icon: "dashboard" }] },
    { group: "Recrutamento", items: [
      { id: "processos", label: "Processos seletivos", icon: "work" },
      { id: "qualificacao", label: "Candidatos qualificados", icon: "how_to_reg" },
      { id: "execucoes", label: "Execuções do coletor", icon: "smart_toy" },
    ] },
    { group: "Comunicação", items: [{ id: "whatsapp", label: "WhatsApp (Digisac)", icon: "chat", count: 5 }] },
    { group: "Sistema", items: [{ id: "abler", label: "Integração Abler", icon: "settings_input_component" }] },
  ],
  home: "dashboard",
  screens: {
    dashboard: {
      type: "dashboard", title: "Dashboard", subtitle: "Outubro de 2026",
      kpis: [
        { label: "Processos ativos", value: "14", delta: "6 clientes", icon: "work" },
        { label: "Candidatos analisados", value: "3.926", delta: "▲ 41% vs. setembro", icon: "groups" },
        { label: "Qualificados", value: "418", delta: "10,6% de aproveitamento", icon: "verified" },
        { label: "Horas economizadas", value: "≈ 160 h", delta: "triagem manual evitada", icon: "timer" },
      ],
      widgets: [
        { title: "Funil de qualificação (mês)", chart: { type: "bar", labels: ["Coletados", "Localidade ok", "Faixa salarial ok", "Experiência ok", "Qualificados"], series: [{ name: "Candidatos", data: [3926, 2410, 1388, 702, 418], color: "#6d4bc3" }] } },
        { title: "Motivos de reprovação", chart: { type: "donut", labels: ["Localidade", "Pretensão salarial", "Experiência", "Escolaridade", "Idade"], series: [{ data: [1516, 1022, 686, 211, 73] }], colors: ["#2c1154", "#6d4bc3", "#a187eb", "#d4c6f7", "#f0abfc"] } },
        { title: "Processos em andamento", go: "processos", map: { Coletando: "blue", Concluído: "green", Pausado: "gray" }, span: true, items: [
          { title: "Auxiliar de produção — Mondelez Brasil", sub: "312 coletados · 41 qualificados", badge: "Concluído", go: "qualificacao" },
          { title: "Técnico de manutenção — Furukawa Industrial", sub: "coletando página 6 de 9…", badge: "Coletando" },
          { title: "Analista fiscal — Grupo Bello", sub: "aguardando critérios do cliente", badge: "Pausado" },
        ] },
      ],
    },

    processos: {
      type: "table", title: "Processos seletivos", subtitle: "Cada processo é vinculado a uma vaga no Abler e guarda os critérios de qualificação",
      columns: [
        { key: "vaga", label: "Vaga", type: "who", sub: "cliente" },
        { key: "abler", label: "ID Abler" },
        { key: "local", label: "Localidade" },
        { key: "coletados", label: "Coletados" },
        { key: "qualificados", label: "Qualificados" },
        { key: "status", label: "Situação", type: "badge", map: { Coletando: "blue", Concluído: "green", Pausado: "gray", Rascunho: "amber" } },
      ],
      filter: { key: "status", options: ["Rascunho", "Coletando", "Concluído", "Pausado"] },
      form: [{ key: "vaga", label: "Vaga", full: true }, { key: "cliente", label: "Cliente" }, { key: "abler", label: "ID do processo no Abler" }, { key: "local", label: "Localidade", value: "Curitiba/PR + 30 km" }, { key: "salario", label: "Faixa salarial", value: "R$ 2.000 a R$ 2.800" }, { key: "palavras", label: "Palavras-chave de experiência", type: "textarea", value: "linha de produção, operador, empilhadeira" }],
      defaults: { coletados: 0, qualificados: 0, status: "Rascunho" }, newLabel: "Novo processo",
      rowActions: [{ label: "Editar critérios", icon: "tune", toast: "Critérios abertos para edição" }, { label: "Buscar e qualificar", icon: "play_arrow", set: { status: "Coletando" }, toast: "Coletor iniciado: login no Abler, filtros do Hunting aplicados, extraindo candidatos…" }],
      rows: [
        { vaga: "Auxiliar de produção", cliente: "Mondelez Brasil", abler: "1205594", local: "Curitiba/PR + 30 km", coletados: 312, qualificados: 41, status: "Concluído", _extra: { "Faixa salarial": "R$ 2.000 a R$ 2.600", Idade: "18 a 45 anos", Escolaridade: "Ensino médio completo", "PCD": "Aceita", "Palavras-chave": "produção, linha, operador, alimentos", "Etapa de destino no Abler": "Triagem RH" }, _timeline: [{ when: "28/10 14:32", text: "41 candidatos enviados para a etapa “Triagem RH” no Abler" }, { when: "28/10 14:05", text: "Qualificação concluída — 312 avaliados" }, { when: "28/10 13:51", text: "Coleta iniciada no Hunting do Abler" }] },
        { vaga: "Técnico de manutenção", cliente: "Furukawa Industrial", abler: "1206110", local: "Curitiba/PR", coletados: 188, qualificados: 0, status: "Coletando" },
        { vaga: "Analista fiscal", cliente: "Grupo Bello", abler: "1204877", local: "São José dos Pinhais/PR", coletados: 96, qualificados: 11, status: "Pausado" },
        { vaga: "Motorista categoria D", cliente: "Budel Transportes", abler: "1203990", local: "Araucária/PR + 20 km", coletados: 241, qualificados: 37, status: "Concluído" },
      ],
    },

    qualificacao: {
      type: "table", title: "Candidatos qualificados", subtitle: "Auxiliar de produção — Mondelez Brasil · resultado da última rodada",
      actions: [{ label: "Enviar todos ao Abler", icon: "send", primary: true, toast: "41 candidatos movidos para “Triagem RH” no Abler" }],
      columns: [
        { key: "nome", label: "Candidato", type: "who", sub: "cidade" },
        { key: "score", label: "Pontuação", type: "score" },
        { key: "experiencia", label: "Experiência relevante" },
        { key: "pretensao", label: "Pretensão", type: "money" },
        { key: "status", label: "Situação", type: "badge", map: { Qualificado: "green", Reprovado: "red", "Enviado ao Abler": "purple" } },
      ],
      filter: { key: "status", options: ["Qualificado", "Enviado ao Abler", "Reprovado"] },
      rowActions: [{ label: "Chamar no WhatsApp", icon: "chat", go: "whatsapp" }, { label: "Enviar ao Abler", icon: "send", set: { status: "Enviado ao Abler" }, toast: "Candidato movido para “Triagem RH” no Abler" }],
      rows: [
        { nome: "Natan Daniel", cidade: "Curitiba/PR · 4 km", score: 94, experiencia: "3 anos em linha de produção de alimentos", pretensao: 2300, status: "Qualificado", _extra: { Escolaridade: "Ensino médio completo", Idade: "27 anos", "Critérios atendidos": "Localidade, salário, experiência, escolaridade" } },
        { nome: "Eloise Fantin", cidade: "Colombo/PR · 14 km", score: 88, experiencia: "Operadora de máquinas — 2 anos", pretensao: 2400, status: "Enviado ao Abler" },
        { nome: "Wagner Domingues", cidade: "Pinhais/PR · 9 km", score: 81, experiencia: "Auxiliar de expedição", pretensao: 2200, status: "Qualificado" },
        { nome: "Tamara Guedes", cidade: "Curitiba/PR · 7 km", score: 76, experiencia: "Embalagem e conferência", pretensao: 2500, status: "Qualificado" },
        { nome: "Osmar Pedroso", cidade: "Lapa/PR · 62 km", score: 41, experiencia: "Agricultura", pretensao: 3200, status: "Reprovado", _note: "Reprovado por localidade (62 km) e pretensão acima da faixa." },
      ],
    },

    execucoes: {
      type: "table", title: "Execuções do coletor", subtitle: "Serviço Node.js + Playwright que navega no Abler",
      columns: [
        { key: "quando", label: "Início" },
        { key: "processo", label: "Processo" },
        { key: "paginas", label: "Páginas" },
        { key: "duracao", label: "Duração" },
        { key: "status", label: "Resultado", type: "badge", map: { Sucesso: "green", "Em execução": "blue", Falha: "red" } },
      ],
      rows: [
        { quando: "29/10 10:12", processo: "Técnico de manutenção", paginas: "6 / 9", duracao: "em andamento", status: "Em execução" },
        { quando: "28/10 13:51", processo: "Auxiliar de produção", paginas: "13 / 13", duracao: "14 min", status: "Sucesso", _timeline: [{ when: "13:51:02", text: "Sessão do Abler reaproveitada (sem login)" }, { when: "13:51:20", text: "Filtros do Hunting aplicados pela URL" }, { when: "14:04:48", text: "312 candidatos extraídos" }] },
        { quando: "27/10 09:20", processo: "Motorista categoria D", paginas: "10 / 10", duracao: "11 min", status: "Sucesso" },
        { quando: "26/10 16:44", processo: "Analista fiscal", paginas: "2 / 4", duracao: "3 min", status: "Falha", _note: "Abler pediu código OTP; e-mail chegou depois do timeout. Nova tentativa com timeout de 150 s funcionou." },
      ],
    },

    whatsapp: {
      type: "inbox", title: "WhatsApp (Digisac)", subtitle: "Contato com candidatos qualificados",
      tagMap: { Interessado: "green", Agendado: "blue", "Sem interesse": "gray" },
      conversations: [
        { name: "Natan Daniel", phone: "+55 41 99000-0001", time: "10:40", unread: 2, tag: "Interessado", messages: [
          { from: "me", text: "Olá, Natan! Sou a Juliana, da Rumo Talentos. Vi seu perfil e você combina com uma vaga de Auxiliar de produção em Curitiba. Tem interesse?", time: "10:02" },
          { from: "them", text: "Tenho sim!", time: "10:38" },
          { from: "them", text: "Qual o horário de trabalho?", time: "10:40" },
        ] },
        { name: "Eloise Fantin", phone: "+55 41 99000-0002", time: "Ontem", tag: "Agendado", messages: [
          { from: "me", text: "Entrevista confirmada para quinta às 14h 😊", time: "16:10" },
          { from: "them", text: "Obrigada, estarei lá!", time: "16:12" },
        ] },
        { name: "Tamara Guedes", phone: "+55 41 99000-0003", time: "Seg", tag: "Sem interesse", messages: [
          { from: "them", text: "Obrigada, mas já comecei em outro emprego.", time: "11:20" },
        ] },
      ],
    },

    abler: {
      type: "form", title: "Integração Abler", subtitle: "Credenciais ficam só no servidor (não versionadas)", toast: "Conexão testada: sessão do Abler válida ✔",
      sections: [
        { title: "Acesso ao ATS", fields: [
          { key: "url", label: "Endereço da conta", value: "https://suaempresa.abler.com.br/app", full: true },
          { key: "usuario", label: "Usuário", value: "integracao@rumotalentos.exemplo.com" },
          { key: "senha", label: "Senha", value: "••••••••" },
        ] },
        { title: "Código de verificação (OTP)", fields: [
          { key: "imap", label: "Servidor IMAP", value: "imap.exemplo.com" },
          { key: "timeout", label: "Tempo máximo de espera (s)", type: "number", value: 150 },
        ] },
      ],
    },
  },
};
