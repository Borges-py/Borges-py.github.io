/*
 * Motor das demos navegáveis do portfólio.
 * Cada sistema carrega este arquivo e define window.DEMO (config.js) com marca, menu e telas.
 * Tudo roda no navegador, com dados fictícios em memória.
 */
(function () {
  "use strict";

  const D = window.DEMO;
  const params = new URLSearchParams(location.search);
  const THUMB = params.has("thumb");
  const KEY = "demo-login-" + D.slug;

  /* ---------- utilidades ---------- */
  const store = {
    get: (k) => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) { /* sem storage: segue sem lembrar */ } },
  };
  const state = { logged: THUMB || store.get(KEY) === "1", sort: {}, filters: {}, query: {} };

  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icon = (name, extra = "") => `<span class="ms" ${extra}>${name}</span>`;
  const money = (v) => typeof v === "number" ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : esc(v);
  const initials = (n) => String(n).split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  const PALETTE = ["#6366f1", "#0ea5e9", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#22c55e"];
  const colorFor = (s) => PALETTE[[...String(s)].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length];
  const now = () => new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const BADGE = { green: "b-green", red: "b-red", amber: "b-amber", blue: "b-blue", purple: "b-purple", teal: "b-teal", gray: "b-gray" };

  function avatar(name, sm) {
    return `<span class="avatar ${sm ? "avatar--sm" : ""}" style="background:${colorFor(name)}">${esc(initials(name))}</span>`;
  }

  function badge(value, map) {
    const cls = BADGE[(map && map[value]) || "gray"];
    return `<span class="badge ${cls}">${esc(value)}</span>`;
  }

  function cell(col, row) {
    const v = row[col.key];
    switch (col.type) {
      case "money": return money(v);
      case "badge": return badge(v, col.map);
      case "who": return `<span class="who">${avatar(v, true)}<span><strong>${esc(v)}</strong>${col.sub && row[col.sub] ? `<br><small style="color:var(--muted)">${esc(row[col.sub])}</small>` : ""}</span></span>`;
      case "progress": return `<div class="progress" title="${v}%"><i style="width:${Math.max(0, Math.min(100, v))}%"></i></div>`;
      case "score": return `<span class="score" style="color:${v >= 80 ? "#16a34a" : v >= 60 ? "#d97706" : "#dc2626"}">${esc(v)}</span>`;
      case "img": return `<img class="thumb" src="${esc(v)}" alt="">`;
      default: return esc(v);
    }
  }

  function toast(text, ico = "check_circle") {
    if (THUMB) return;
    let box = $(".toasts");
    if (!box) { box = document.createElement("div"); box.className = "toasts"; document.body.appendChild(box); }
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `${icon(ico)}<span>${esc(text)}</span>`;
    box.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  /* ---------- overlays ---------- */
  function openSheet({ title, body, foot = "", center = false, wide = false }) {
    closeSheet();
    const o = document.createElement("div");
    o.className = "overlay" + (center ? " overlay--center" : "");
    o.innerHTML = `<div class="${center ? "modal" + (wide ? " modal--wide" : "") : "drawer"}" role="dialog" aria-label="${esc(title)}">
      <div class="sheet__head"><h3>${title}</h3><button class="iconbtn" data-close aria-label="Fechar">${icon("close")}</button></div>
      <div class="sheet__body">${body}</div>${foot ? `<div class="sheet__foot">${foot}</div>` : ""}</div>`;
    o.addEventListener("click", (e) => { if (e.target === o || e.target.closest("[data-close]")) closeSheet(); });
    document.body.appendChild(o);
    return o;
  }
  function closeSheet() { document.querySelectorAll(".overlay").forEach((o) => o.remove()); }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });

  function facts(obj) {
    return `<div class="facts">${Object.entries(obj).filter(([, v]) => v !== undefined && v !== "").map(([k, v]) => `<div><small>${esc(k)}</small>${v}</div>`).join("")}</div>`;
  }
  function timeline(items) {
    return items && items.length ? `<div><p class="section-title">Histórico</p><div class="timeline">${items.map((t) => `<div><small>${esc(t.when)}</small>${esc(t.text)}</div>`).join("")}</div></div>` : "";
  }

  function formHtml(fields, values = {}) {
    return `<div class="form-grid">${fields.map((f) => {
      const v = values[f.key] ?? f.value ?? "";
      let input;
      if (f.type === "select") input = `<select class="select input" name="${f.key}">${f.options.map((o) => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
      else if (f.type === "textarea") input = `<textarea class="input" name="${f.key}" rows="3">${esc(v)}</textarea>`;
      else input = `<input class="input" name="${f.key}" type="${f.type === "date" ? "date" : f.type === "number" || f.type === "money" ? "number" : "text"}" value="${esc(v)}" placeholder="${esc(f.placeholder || "")}">`;
      return `<div class="field ${f.full || f.type === "textarea" ? "full" : ""}"><label>${esc(f.label)}</label>${input}</div>`;
    }).join("")}</div>`;
  }
  function readForm(root, fields) {
    const out = {};
    fields.forEach((f) => {
      const el = root.querySelector(`[name="${f.key}"]`);
      let v = el ? el.value : "";
      if (f.type === "money" || f.type === "number") v = Number(v || 0);
      out[f.key] = v;
    });
    return out;
  }
  function askForm(title, fields, onSave, saveLabel = "Salvar") {
    const o = openSheet({ title, center: true, body: formHtml(fields), foot: `<button class="btn" data-close>Cancelar</button><button class="btn btn--primary" data-save>${icon("check")}${esc(saveLabel)}</button>` });
    const first = o.querySelector("input,select,textarea");
    if (first) first.focus();
    o.querySelector("[data-save]").addEventListener("click", () => {
      const data = readForm(o, fields);
      closeSheet();
      onSave(data);
    });
  }

  /* Documento em PDF simulado (orçamento, contrato, proposta). */
  function showDoc(doc, row) {
    const items = row[doc.itemsKey || "_items"] || [];
    const total = items.reduce((a, i) => a + (i.total ?? (i.qty || 1) * (i.unit || 0)), 0);
    const body = `<div class="doc">
      <div class="doc__head"><img src="${esc(D.logo)}" alt=""><div>${esc(D.company || D.name)}<br>${esc(D.docFooter || "")}</div></div>
      <h4>${esc(doc.title)} ${esc(row[doc.numberKey || "id"] || "")}</h4>
      ${facts(Object.fromEntries((doc.fields || []).map((k) => [k.label, esc(row[k.key])])))}
      ${items.length ? `<table style="margin-top:16px"><thead><tr><th>Descrição</th><th>Qtd</th><th>Unitário</th><th style="text-align:right">Total</th></tr></thead><tbody>${items.map((i) => `<tr><td>${esc(i.desc)}</td><td>${esc(i.qty ?? 1)}</td><td>${money(i.unit)}</td><td style="text-align:right">${money(i.total ?? (i.qty || 1) * (i.unit || 0))}</td></tr>`).join("")}</tbody></table><div class="total">Total: ${money(total)}</div>` : ""}
      ${doc.note ? `<p class="note">${esc(doc.note)}</p>` : ""}
    </div>`;
    openSheet({ title: `${icon("picture_as_pdf")} ${esc(doc.title)}`, body, center: true, wide: true, foot: `<button class="btn" data-close>Fechar</button><button class="btn btn--primary" data-dl>${icon("download")}Baixar PDF</button>` })
      .querySelector("[data-dl]").addEventListener("click", () => toast("PDF gerado (demonstração)", "picture_as_pdf"));
  }

  /* Detalhe genérico de um registro (linha de tabela, card do kanban, produto, evento). */
  function showDetail(screen, row, cols) {
    const title = row[screen.titleKey || (cols && cols[0] && cols[0].key) || "title"] || row.title || "Detalhe";
    const info = {};
    (cols || []).forEach((c) => { if (c.key !== (screen.titleKey || cols[0].key)) info[c.label] = cell(c, row); });
    Object.assign(info, Object.fromEntries(Object.entries(row._extra || {}).map(([k, v]) => [k, esc(v)])));
    const actions = (screen.rowActions || []).map((a, i) => `<button class="btn ${i === (screen.rowActions.length - 1) ? "btn--primary" : ""}" data-act="${i}">${a.icon ? icon(a.icon) : ""}${esc(a.label)}</button>`).join("");
    const o = openSheet({
      title: esc(title),
      body: `${row.img ? `<img src="${esc(row.img)}" alt="" style="width:100%;max-height:280px;object-fit:contain;background:var(--bg);border-radius:10px">` : ""}${facts(info)}${row._note ? `<p style="margin:0;line-height:1.55">${esc(row._note)}</p>` : ""}${timeline(row._timeline)}`,
      foot: actions || `<button class="btn" data-close>Fechar</button>`,
    });
    o.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", () => {
      const a = screen.rowActions[+b.dataset.act];
      if (a.kind === "pdf") return showDoc(screen.doc, row);
      if (a.go) { closeSheet(); return go(a.go); }
      if (a.set) { Object.assign(row, a.set); closeSheet(); render(); }
      toast(a.toast || `${a.label}: feito (demonstração)`, a.icon || "check_circle");
    }));
  }

  /* ---------- gráficos SVG ---------- */
  function chart(c) {
    const W = 520, H = 200, P = 28;
    const colors = c.series.map((s, i) => s.color || (i ? "var(--accent)" : "var(--primary)"));
    if (c.type === "donut") {
      const s = c.series[0], total = s.data.reduce((a, b) => a + b, 0);
      let acc = 0;
      const R = 70, C = 2 * Math.PI * R;
      const segs = s.data.map((v, i) => {
        const len = (v / total) * C, off = acc; acc += len;
        return `<circle r="${R}" cx="100" cy="100" fill="none" stroke="${(c.colors || PALETTE)[i % 8]}" stroke-width="26" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 100 100)"><title>${esc(c.labels[i])}: ${v}</title></circle>`;
      }).join("");
      return `<div class="chart" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><svg viewBox="0 0 200 200" style="width:170px">${segs}<text x="100" y="96" text-anchor="middle" style="font-size:22px;font-weight:700;fill:var(--text)">${c.center || total}</text><text x="100" y="116" text-anchor="middle">${esc(c.centerLabel || "total")}</text></svg>
        <div class="legend" style="flex-direction:column">${c.labels.map((l, i) => `<span><i style="background:${(c.colors || PALETTE)[i % 8]}"></i>${esc(l)} <b>${s.data[i]}</b></span>`).join("")}</div></div>`;
    }
    const max = Math.max(...c.series.flatMap((s) => s.data)) * 1.15 || 1;
    const n = c.labels.length, step = (W - P * 2) / n;
    const y = (v) => H - P - (v / max) * (H - P * 2);
    let marks = "";
    for (let g = 0; g <= 3; g++) { const gy = P + g * (H - P * 2) / 3; marks += `<line x1="${P}" x2="${W - P}" y1="${gy}" y2="${gy}" stroke="var(--border)"/>`; }
    if (c.type === "bar") {
      const bw = (step * 0.7) / c.series.length;
      c.series.forEach((s, si) => s.data.forEach((v, i) => {
        const x = P + i * step + step * 0.15 + si * bw;
        marks += `<rect x="${x}" y="${y(v)}" width="${bw - 2}" height="${H - P - y(v)}" rx="4" fill="${colors[si]}"><title>${esc(c.labels[i])}: ${c.money ? money(v) : v}</title></rect>`;
      }));
    } else {
      c.series.forEach((s, si) => {
        const pts = s.data.map((v, i) => [P + i * step + step / 2, y(v)]);
        marks += `<path d="M${pts.map((p) => p.join(",")).join(" L")} L${pts[pts.length - 1][0]},${H - P} L${pts[0][0]},${H - P} Z" fill="${colors[si]}" opacity=".1"/>`;
        marks += `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="${colors[si]}" stroke-width="2.5" stroke-linejoin="round"/>`;
        marks += pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="${colors[si]}"><title>${esc(c.labels[i])}: ${c.money ? money(s.data[i]) : s.data[i]}</title></circle>`).join("");
      });
    }
    marks += c.labels.map((l, i) => `<text x="${P + i * step + step / 2}" y="${H - 8}" text-anchor="middle">${esc(l)}</text>`).join("");
    const legend = c.series.length > 1 ? `<div class="legend">${c.series.map((s, i) => `<span><i style="background:${colors[i]}"></i>${esc(s.name)}</span>`).join("")}</div>` : "";
    return `<div class="chart"><svg viewBox="0 0 ${W} ${H}">${marks}</svg>${legend}</div>`;
  }

  /* ---------- telas ---------- */
  const R = {};

  R.dashboard = (s) => {
    const kpis = `<div class="kpis">${(s.kpis || []).map((k) => `<div class="card kpi"><div class="kpi__icon">${icon(k.icon || "insights")}</div><div><div class="kpi__label">${esc(k.label)}</div><div class="kpi__value">${esc(k.value)}</div>${k.delta ? `<div class="kpi__delta ${k.down ? "down" : "up"}">${esc(k.delta)}</div>` : ""}</div></div>`).join("")}</div>`;
    const widgets = `<div class="grid-2">${(s.widgets || []).map((w, wi) => {
      let body = "";
      if (w.chart) body = chart(w.chart);
      if (w.items) body = `<div class="list">${w.items.map((it, ii) => `<div class="list__item" data-w="${wi}" data-i="${ii}">${it.icon ? `<div class="kpi__icon" style="width:36px;height:36px">${icon(it.icon)}</div>` : avatar(it.title, true)}<div><div class="list__title">${esc(it.title)}</div><div class="list__sub">${esc(it.sub || "")}</div></div><div class="list__meta">${it.badge ? badge(it.badge, w.map) : ""}${it.meta ? `<div>${esc(it.meta)}</div>` : ""}</div></div>`).join("")}</div>`;
      return `<div class="card" ${w.span ? 'style="grid-column:1/-1"' : ""}><div class="card__head"><h3>${esc(w.title)}</h3>${w.go ? `<span class="link" data-go="${w.go}">Ver tudo</span>` : ""}</div><div class="card__body">${body}</div></div>`;
    }).join("")}</div>`;
    return { html: kpis + widgets, bind(root) {
      root.querySelectorAll(".list__item").forEach((el) => el.addEventListener("click", () => {
        const it = s.widgets[+el.dataset.w].items[+el.dataset.i];
        if (it.go) go(it.go); else showDetail({}, { title: it.title, _extra: { Detalhe: it.sub, Situação: it.badge || it.meta } });
      }));
    } };
  };

  R.table = (s, id) => {
    const q = (state.query[id] || "").toLowerCase();
    const f = state.filters[id] || "Todos";
    const srt = state.sort[id];
    let rows = s.rows.filter((r) => (!q || s.columns.some((c) => String(r[c.key] ?? "").toLowerCase().includes(q))) && (f === "Todos" || !s.filter || r[s.filter.key] === f));
    if (srt) rows = [...rows].sort((a, b) => { const x = a[srt.key], y = b[srt.key]; return (x > y ? 1 : x < y ? -1 : 0) * srt.dir; });
    const chips = s.filter ? `<div class="chips">${["Todos", ...s.filter.options].map((o) => `<button class="chip ${o === f ? "on" : ""}" data-chip="${esc(o)}">${esc(o)}</button>`).join("")}</div>` : "";
    const html = `<div class="card">
      <div class="toolbar"><input class="input" data-q placeholder="${esc(s.search || "Buscar...")}" value="${esc(state.query[id] || "")}">${chips}</div>
      <div class="table-wrap"><table><thead><tr>${s.columns.map((c) => `<th data-sort="${c.key}">${esc(c.label)} ${srt && srt.key === c.key ? icon(srt.dir > 0 ? "arrow_upward" : "arrow_downward") : ""}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr data-row="${s.rows.indexOf(r)}" class="${r._new ? "new" : ""}">${s.columns.map((c) => `<td>${cell(c, r)}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${s.columns.length}" class="empty">Nenhum registro encontrado.</td></tr>`}</tbody></table></div>
      <div class="table-foot"><span>${rows.length} de ${s.rows.length} registros</span><span>Página 1 de 1</span></div></div>`;
    return { html, bind(root) {
      s.rows.forEach((r) => delete r._new);
      const qi = root.querySelector("[data-q]");
      qi.addEventListener("input", () => { state.query[id] = qi.value; render(); const n = $("[data-q]"); n.focus(); n.setSelectionRange(n.value.length, n.value.length); });
      root.querySelectorAll("[data-chip]").forEach((b) => b.addEventListener("click", () => { state.filters[id] = b.dataset.chip; render(); }));
      root.querySelectorAll("[data-sort]").forEach((th) => th.addEventListener("click", () => { const k = th.dataset.sort; state.sort[id] = { key: k, dir: srt && srt.key === k ? -srt.dir : 1 }; render(); }));
      root.querySelectorAll("[data-row]").forEach((tr) => tr.addEventListener("click", () => showDetail(s, s.rows[+tr.dataset.row], s.columns)));
    } };
  };

  R.kanban = (s) => {
    const html = `<div class="kanban">${s.columns.map((c, ci) => {
      const sum = s.money ? c.cards.reduce((a, k) => a + (k.value || 0), 0) : null;
      return `<div class="col" data-col="${ci}"><div class="col__head"><i style="background:${c.color || "var(--primary)"}"></i>${esc(c.title)}<span class="n">${c.cards.length}</span></div>${sum !== null ? `<div class="col__sum">${money(sum)}</div>` : ""}
        ${c.cards.map((k, ki) => `<div class="kcard" draggable="true" data-c="${ci}" data-k="${ki}"><div class="kcard__title">${esc(k.title)}</div>${k.sub ? `<div class="kcard__sub">${esc(k.sub)}</div>` : ""}
          <div class="kcard__foot">${(k.tags || []).map((t) => badge(t, s.tagMap)).join("")}${k.owner ? avatar(k.owner, true) : ""}${k.value !== undefined ? `<span class="value">${s.money ? money(k.value) : esc(k.value)}</span>` : ""}</div></div>`).join("")}
        ${s.form ? `<button class="col__add" data-add="${ci}">${icon("add")} Adicionar</button>` : ""}</div>`;
    }).join("")}</div>`;
    return { html, bind(root) {
      let drag = null;
      root.querySelectorAll(".kcard").forEach((el) => {
        el.addEventListener("dragstart", () => { drag = [+el.dataset.c, +el.dataset.k]; el.classList.add("dragging"); });
        el.addEventListener("dragend", () => el.classList.remove("dragging"));
        el.addEventListener("click", () => {
          const c = s.columns[+el.dataset.c], k = c.cards[+el.dataset.k];
          const move = s.columns.map((col, i) => i === +el.dataset.c ? "" : `<button class="btn btn--sm" data-mv="${i}">${icon("arrow_forward")}${esc(col.title)}</button>`).join("");
          const o = openSheet({ title: esc(k.title), body: facts({ Etapa: esc(c.title), Descrição: esc(k.sub), ...(k.value !== undefined ? { Valor: s.money ? money(k.value) : esc(k.value) } : {}), ...(k.owner ? { Responsável: esc(k.owner) } : {}), ...Object.fromEntries(Object.entries(k._extra || {}).map(([a, b]) => [a, esc(b)])) }) + (k._note ? `<p style="margin:0;line-height:1.55">${esc(k._note)}</p>` : "") + timeline(k._timeline) + `<div><p class="section-title">Mover para</p><div class="chips">${move}</div></div>` });
          o.querySelectorAll("[data-mv]").forEach((b) => b.addEventListener("click", () => {
            c.cards.splice(c.cards.indexOf(k), 1); s.columns[+b.dataset.mv].cards.unshift(k); closeSheet(); render();
            toast(`"${k.title}" movido para ${s.columns[+b.dataset.mv].title}`, "swap_horiz");
          }));
        });
      });
      root.querySelectorAll(".col").forEach((col) => {
        col.addEventListener("dragover", (e) => { e.preventDefault(); col.classList.add("over"); });
        col.addEventListener("dragleave", () => col.classList.remove("over"));
        col.addEventListener("drop", (e) => {
          e.preventDefault(); col.classList.remove("over");
          if (!drag) return;
          const [ci, ki] = drag, to = +col.dataset.col;
          if (ci === to) return;
          const [k] = s.columns[ci].cards.splice(ki, 1);
          s.columns[to].cards.unshift(k);
          drag = null; render();
          toast(`"${k.title}" movido para ${s.columns[to].title}`, "swap_horiz");
        });
      });
      root.querySelectorAll("[data-add]").forEach((b) => b.addEventListener("click", () => askForm(`Novo em ${s.columns[+b.dataset.add].title}`, s.form, (data) => {
        s.columns[+b.dataset.add].cards.unshift({ title: data.title || "Novo item", sub: data.sub, value: data.value, owner: D.user.name, tags: ["Novo"] });
        render(); toast("Card criado");
      })));
    } };
  };

  /* Resposta da IA: escolhe a regra pelas palavras da mensagem. */
  function aiReply(rules, fallback, text) {
    const t = text.toLowerCase();
    return rules.find((r) => r.match.some((m) => t.includes(m))) || fallback;
  }

  function msgHtml(m, botName) {
    if (m.from === "sys") return `<div class="msg msg--sys">${esc(m.text)}</div>`;
    const tools = m.tools ? `<div class="tools">${m.tools.map((t) => `<span class="tool">⚙ ${esc(t)}</span>`).join("")}</div>` : "";
    return `${tools}<div class="msg msg--${m.from}">${m.from === "bot" ? `<div class="botname">${icon("smart_toy", 'style="font-size:14px"')}${esc(botName)}</div>` : ""}${esc(m.text)}<small>${esc(m.time || "")}</small></div>`;
  }

  function botTurn(rules, fallback, text, push, done) {
    const r = aiReply(rules, fallback, text);
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.textContent = "digitando…";
    const box = $(".msgs");
    if (box) { box.appendChild(typing); box.scrollTop = box.scrollHeight; }
    setTimeout(() => { push({ from: "bot", text: r.reply, tools: r.tools, time: now() }); done(); }, 900 + Math.min(1600, r.reply.length * 8));
  }

  R.inbox = (s, id) => {
    const sel = state.query[id + ":sel"] ?? 0;
    const q = (state.query[id] || "").toLowerCase();
    const list = s.conversations.map((c, i) => ({ c, i })).filter(({ c }) => !q || c.name.toLowerCase().includes(q));
    const c = s.conversations[sel];
    if (c) c.unread = 0;
    const html = `<div class="card inbox"><div class="inbox__list"><div class="toolbar"><input class="input" data-q placeholder="Buscar conversa" value="${esc(state.query[id] || "")}"></div>
      <div class="inbox__items">${list.map(({ c: k, i }) => `<div class="conv ${i === sel ? "active" : ""}" data-sel="${i}">${avatar(k.name)}<div class="conv__body"><div class="conv__top"><strong>${esc(k.name)}</strong><small>${esc(k.time || "")}</small></div><div class="conv__last">${esc((k.messages[k.messages.length - 1] || {}).text || "")}</div>${k.tag ? badge(k.tag, s.tagMap) : ""}</div>${k.unread ? `<span class="unread">${k.unread}</span>` : ""}</div>`).join("")}</div></div>
      <div class="thread">${c ? `<div class="thread__head">${avatar(c.name)}<div><strong>${esc(c.name)}</strong><br><small style="color:var(--muted)">${esc(c.phone || "")}${c.ai ? ` · ${icon("smart_toy", 'style="font-size:14px"')} ${esc(s.aiName || "IA")} ${c.aiPaused ? "pausada" : "atendendo"}` : ""}</small></div>
        <div class="actions">${c.ai ? `<button class="btn btn--sm" data-ai>${icon(c.aiPaused ? "play_arrow" : "pause")}${c.aiPaused ? "Retomar IA" : "Assumir conversa"}</button>` : ""}${(s.threadActions || []).map((a, i) => `<button class="btn btn--sm" data-ta="${i}">${icon(a.icon || "bolt")}${esc(a.label)}</button>`).join("")}</div></div>
        <div class="msgs">${c.messages.map((m) => msgHtml(m, s.aiName)).join("")}</div>
        <form class="composer" data-send><input class="input" name="t" placeholder="${c.ai && !c.aiPaused ? "Escreva como se fosse o cliente para ver a IA responder…" : "Digite uma mensagem"}" autocomplete="off"><button class="btn btn--primary">${icon("send")}</button></form>` : `<div class="empty">Selecione uma conversa</div>`}</div></div>`;
    return { html, bind(root) {
      const box = root.querySelector(".msgs");
      if (box) box.scrollTop = box.scrollHeight;
      const qi = root.querySelector("[data-q]");
      qi.addEventListener("input", () => { state.query[id] = qi.value; render(); const n = $("[data-q]"); n.focus(); n.setSelectionRange(n.value.length, n.value.length); });
      root.querySelectorAll("[data-sel]").forEach((el) => el.addEventListener("click", () => { state.query[id + ":sel"] = +el.dataset.sel; render(); }));
      const ai = root.querySelector("[data-ai]");
      if (ai) ai.addEventListener("click", () => { c.aiPaused = !c.aiPaused; c.messages.push({ from: "sys", text: c.aiPaused ? `${D.user.name} assumiu a conversa` : `${s.aiName} voltou a atender` }); render(); });
      root.querySelectorAll("[data-ta]").forEach((b) => b.addEventListener("click", () => { const a = s.threadActions[+b.dataset.ta]; if (a.go) go(a.go); else toast(a.toast || a.label, a.icon); }));
      const f = root.querySelector("[data-send]");
      if (f) f.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = f.t.value.trim();
        if (!text) return;
        const viaAi = c.ai && !c.aiPaused;
        c.messages.push({ from: viaAi ? "them" : "me", text, time: now() });
        c.time = now();
        render();
        if (viaAi) botTurn(s.rules || [], s.fallback || { reply: "Vou verificar e já te retorno." }, text, (m) => c.messages.push(m), render);
      });
    } };
  };

  R.chat = (s, id) => {
    if (!s._msgs) s._msgs = [{ from: "bot", text: s.intro, time: now() }];
    const html = `<div class="card inbox" style="grid-template-columns:1fr ${s.side ? "300px" : ""}"><div class="thread">
      <div class="thread__head">${icon("smart_toy")}<div><strong>${esc(s.botName)}</strong><br><small style="color:var(--muted)">${esc(s.botSub || "Agente de IA · respostas simuladas para a demonstração")}</small></div><div class="actions"><button class="btn btn--sm" data-reset>${icon("restart_alt")}Reiniciar</button></div></div>
      <div class="msgs">${s._msgs.map((m) => msgHtml(m, s.botName)).join("")}</div>
      <div class="suggestions">${(s.suggestions || []).map((t) => `<button class="chip" data-sug="${esc(t)}">${esc(t)}</button>`).join("")}</div>
      <form class="composer" data-send><input class="input" name="t" placeholder="Escreva como se fosse o cliente…" autocomplete="off"><button class="btn btn--primary">${icon("send")}</button></form></div>
      ${s.side ? `<div style="border-left:1px solid var(--border);padding:18px;overflow-y:auto"><p class="section-title">${esc(s.side.title)}</p><div style="display:grid;gap:10px;font-size:13px;line-height:1.5">${s.side.items.map((t) => `<div style="display:flex;gap:8px">${icon("check_circle", 'style="font-size:18px;color:var(--primary)"')}<span>${esc(t)}</span></div>`).join("")}</div></div>` : ""}</div>`;
    return { html, bind(root) {
      const box = root.querySelector(".msgs"); box.scrollTop = box.scrollHeight;
      const send = (text) => {
        s._msgs.push({ from: "them", text, time: now() });
        render();
        botTurn(s.rules, s.fallback, text, (m) => s._msgs.push(m), render);
      };
      root.querySelector("[data-send]").addEventListener("submit", (e) => { e.preventDefault(); const t = e.target.t.value.trim(); if (t) send(t); });
      root.querySelectorAll("[data-sug]").forEach((b) => b.addEventListener("click", () => send(b.dataset.sug)));
      root.querySelector("[data-reset]").addEventListener("click", () => { s._msgs = null; render(); });
    } };
  };

  R.calendar = (s) => {
    const hours = []; for (let h = s.start || 8; h < (s.end || 19); h++) hours.push(h);
    const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
    const base = (s.start || 8) * 60;
    let grid = `<div class="cal__h"></div>${s.days.map((d, i) => `<div class="cal__h ${i === (s.today ?? -1) ? "today" : ""}">${esc(d.split(" ")[0])}<small>${esc(d.split(" ").slice(1).join(" "))}</small></div>`).join("")}`;
    hours.forEach((h, hi) => {
      grid += `<div class="cal__time">${String(h).padStart(2, "0")}:00</div>`;
      s.days.forEach((_, di) => {
        const evs = hi === 0 ? s.events.map((e, ei) => ({ e, ei })).filter(({ e }) => e.day === di) : [];
        grid += `<div class="cal__cell">${evs.map(({ e, ei }) => {
          const top = (toMin(e.start) - base) / 60 * 56, h2 = Math.max(28, (toMin(e.end) - toMin(e.start)) / 60 * 56 - 3);
          const col = e.color || "var(--primary)";
          return `<div class="ev" data-ev="${ei}" style="top:${top}px;height:${h2}px;color:${col};background:color-mix(in srgb, ${col} 14%, white)"><strong style="color:var(--text)">${esc(e.title)}</strong><span style="color:var(--muted)">${esc(e.start)} · ${esc(e.sub || "")}</span></div>`;
        }).join("")}</div>`;
      });
    });
    const html = `<div class="card"><div class="toolbar"><button class="btn btn--sm" data-w="-1">${icon("chevron_left")}</button><strong>${esc(s.week || "")}</strong><button class="btn btn--sm" data-w="1">${icon("chevron_right")}</button>${s.legend ? `<div class="legend" style="margin:0 0 0 auto">${s.legend.map((l) => `<span><i style="background:${l.color}"></i>${esc(l.label)}</span>`).join("")}</div>` : ""}</div>
      <div class="cal" style="--days:${s.days.length}">${grid}</div></div>`;
    return { html, bind(root) {
      root.querySelectorAll("[data-ev]").forEach((el) => el.addEventListener("click", () => {
        const e = s.events[+el.dataset.ev];
        showDetail({ rowActions: s.eventActions }, { title: e.title, _extra: { Dia: s.days[e.day], Horário: `${e.start} – ${e.end}`, ...(e.sub ? { Detalhe: e.sub } : {}), ...(e._extra || {}) }, _timeline: e._timeline }, null);
      }));
      root.querySelectorAll("[data-w]").forEach((b) => b.addEventListener("click", () => toast("Navegação de semanas desativada na demonstração", "calendar_month")));
    } };
  };

  R.catalog = (s) => {
    const html = `<div class="catalog">${s.items.map((p, i) => `<div class="card product" data-p="${i}">${p.img ? `<img src="${esc(p.img)}" alt="">` : ""}<div class="card__body"><strong>${esc(p.title)}</strong><span style="color:var(--muted);font-size:13px">${esc(p.sub || "")}</span><span class="price">${money(p.price)}</span></div></div>`).join("")}</div>`;
    return { html, bind(root) {
      root.querySelectorAll("[data-p]").forEach((el) => el.addEventListener("click", () => {
        const p = s.items[+el.dataset.p];
        showDetail(s, { title: p.title, img: p.img, _extra: { Descrição: p.sub, Preço: money(p.price), ...(p._extra || {}) } }, null);
      }));
    } };
  };

  R.form = (s) => ({
    html: `<div class="card"><div class="card__body">${s.sections.map((sec) => `<p class="section-title" style="margin-top:6px">${esc(sec.title)}</p>${formHtml(sec.fields)}`).join("")}<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><button class="btn">Cancelar</button><button class="btn btn--primary" data-save>${icon("save")}Salvar</button></div></div></div>`,
    bind(root) { root.querySelector("[data-save]").addEventListener("click", () => toast(s.toast || "Configurações salvas")); },
  });

  /* ---------- shell ---------- */
  function navItems() { return D.nav.flatMap((g) => g.items); }

  function current() {
    const id = location.hash.replace(/^#\/?/, "") || D.home;
    return D.screens[id] ? id : D.home;
  }

  function go(id) { location.hash = "#/" + id; }

  function headActions(s, id) {
    const acts = (s.actions || []).map((a, i) => `<button class="btn ${a.primary ? "btn--primary" : ""}" data-head="${i}">${a.icon ? icon(a.icon) : ""}${esc(a.label)}</button>`).join("");
    const add = s.form && s.type !== "kanban" ? `<button class="btn btn--primary" data-new>${icon("add")}${esc(s.newLabel || "Novo")}</button>` : "";
    return acts + add;
  }

  function bindHead(root, s) {
    root.querySelectorAll("[data-head]").forEach((b) => b.addEventListener("click", () => {
      const a = s.actions[+b.dataset.head];
      if (a.go) return go(a.go);
      if (a.form) return askForm(a.label, a.form, () => toast(a.toast || "Salvo"));
      toast(a.toast || `${a.label} (demonstração)`, a.icon);
    }));
    const n = root.querySelector("[data-new]");
    if (n) n.addEventListener("click", () => askForm(s.newLabel || "Novo registro", s.form, (data) => {
      const row = { ...(s.defaults || {}), ...data, _new: true };
      if (s.type === "catalog") s.items.unshift({ title: data.title, sub: data.sub, price: data.price, img: s.defaultImg });
      else s.rows.unshift(row);
      render(); toast("Registro criado");
    }));
  }

  function renderLogin() {
    const L = D.login || {};
    document.title = `${D.name} — Entrar`;
    document.body.innerHTML = `<div class="login"><div class="login__hero" style="${L.bg ? `background:${L.bg}` : ""}">
        <h2>${esc(L.heroTitle || D.name)}</h2><p>${esc(L.heroText || "")}</p>${L.bullets ? `<ul>${L.bullets.map((b) => `<li>${icon("check_circle")}${esc(b)}</li>`).join("")}</ul>` : ""}</div>
      <div class="login__panel"><form class="login__card" data-login><img class="login__logo" src="${esc(D.logo)}" alt="${esc(D.name)}">
        <h1>${esc(L.title || "Bem-vindo de volta")}</h1><p class="sub">${esc(L.subtitle || "Acesse com seu e-mail e senha.")}</p>
        <div class="field"><label>E-mail</label><input class="input" value="${esc(L.email || "demo@exemplo.com")}"></div>
        <div class="field"><label>Senha</label><input class="input" type="password" value="demonstracao"></div>
        <button class="btn btn--primary btn--block">${icon("login")}Entrar</button>
        <p class="login__hint">Demonstração com dados fictícios — é só clicar em Entrar.</p></form></div></div>`;
    $("[data-login]").addEventListener("submit", (e) => {
      e.preventDefault();
      const b = e.target.querySelector("button");
      b.disabled = true; b.innerHTML = `${icon("progress_activity")}Entrando…`;
      setTimeout(() => { state.logged = true; store.set(KEY, "1"); render(); }, 650);
    });
  }

  function render() {
    if (!state.logged) return renderLogin();
    const id = current(), s = D.screens[id];
    const nav = D.nav.map((g) => `${g.group ? `<div class="sidebar__group">${esc(g.group)}</div>` : ""}<nav class="nav">${g.items.map((it) => `<a data-nav="${it.id}" class="${it.id === id ? "active" : ""}">${icon(it.icon)}<span>${esc(it.label)}</span>${it.count ? `<span class="count">${it.count}</span>` : ""}</a>`).join("")}</nav>`).join("");
    const r = R[s.type](s, id);
    const label = (navItems().find((n) => n.id === id) || {}).label || s.title;
    document.title = `${label} · ${D.name}`;
    const wasOpen = $(".shell.menu-open");
    document.body.innerHTML = `<div class="shell ${wasOpen ? "" : ""}">
      <aside class="sidebar" ${D.theme.sidebarLight ? "data-light" : ""}><div class="sidebar__brand">${D.logoSidebar ? `<img src="${esc(D.logoSidebar)}" alt="${esc(D.name)}">` : `<strong>${esc(D.name)}</strong>`}</div>${nav}<div class="sidebar__foot">${esc(D.name)} · v${esc(D.version || "2.4")}</div></aside>
      <div class="main"><header class="topbar"><button class="iconbtn topbar__menu" data-menu aria-label="Menu">${icon("menu")}</button>
        <div class="topbar__search">${icon("search")}<input class="input" placeholder="Buscar em ${esc(D.name)}…"></div><div class="topbar__spacer"></div>
        <span class="demo-flag">Demonstração · dados fictícios</span>
        <div style="position:relative"><button class="iconbtn" data-bell aria-label="Notificações">${icon("notifications")}${(D.notifications || []).length ? '<span class="dot"></span>' : ""}</button></div>
        <div class="user" data-user>${avatar(D.user.name)}<div><strong>${esc(D.user.name)}</strong><small>${esc(D.user.role)}</small></div></div></header>
        <main class="content"><div class="page-head"><div><h1>${esc(s.title || label)}</h1>${s.subtitle ? `<p>${esc(s.subtitle)}</p>` : ""}</div><div class="actions">${headActions(s, id)}</div></div>${r.html}</main></div></div>`;
    const root = $("main.content");
    r.bind && r.bind(root);
    bindHead(root, s);
    document.querySelectorAll("[data-nav]").forEach((a) => a.addEventListener("click", () => { $(".shell").classList.remove("menu-open"); go(a.dataset.nav); }));
    document.querySelectorAll("[data-go]").forEach((a) => a.addEventListener("click", () => go(a.dataset.go)));
    $("[data-menu]").addEventListener("click", (e) => { e.stopPropagation(); $(".shell").classList.toggle("menu-open"); });
    $(".main").addEventListener("click", (e) => { if (!e.target.closest("[data-menu]")) $(".shell").classList.remove("menu-open"); });
    $("[data-bell]").addEventListener("click", (e) => {
      e.stopPropagation();
      const host = e.currentTarget.parentElement;
      if (host.querySelector(".dropdown")) return host.querySelector(".dropdown").remove();
      host.insertAdjacentHTML("beforeend", `<div class="dropdown">${(D.notifications || []).map((n) => `<div class="item">${icon(n.icon || "info")}<div>${esc(n.title)}<small>${esc(n.sub || "")}</small></div></div>`).join("")}</div>`);
    });
    $("[data-user]").addEventListener("click", (e) => {
      e.stopPropagation();
      const host = e.currentTarget;
      if (host.querySelector(".dropdown")) return host.querySelector(".dropdown").remove();
      host.insertAdjacentHTML("beforeend", `<div class="dropdown"><div class="item">${icon("person")}<div>Meu perfil<small>${esc(D.user.role)}</small></div></div><a data-logout>${icon("logout")}Sair</a></div>`);
      host.querySelector("[data-logout]").addEventListener("click", (ev) => { ev.stopPropagation(); state.logged = false; store.set(KEY, null); location.hash = ""; render(); });
    });
    document.addEventListener("click", () => document.querySelectorAll(".topbar .dropdown").forEach((d) => d.remove()), { once: true });
  }

  /* tema */
  const T = D.theme || {};
  const rs = document.documentElement.style;
  if (T.primary) rs.setProperty("--primary", T.primary);
  if (T.accent) rs.setProperty("--accent", T.accent);
  if (T.sidebarBg) rs.setProperty("--sidebar-bg", T.sidebarBg);
  if (T.sidebarFg) rs.setProperty("--sidebar-fg", T.sidebarFg);
  if (T.bg) rs.setProperty("--bg", T.bg);
  if (T.radius) rs.setProperty("--radius", T.radius);
  if (T.font) rs.setProperty("--font", T.font);
  if (THUMB) document.documentElement.style.pointerEvents = "none";

  window.addEventListener("hashchange", () => { closeSheet(); render(); window.scrollTo(0, 0); });
  render();
})();
