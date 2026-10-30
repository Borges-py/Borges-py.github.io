# Site do portfólio

Página estática: abra `index.html` por um servidor (XAMPP em `http://localhost/portfolio/site/` ou
`python -m http.server --directory site`). Não precisa de build. Pode ser publicada no GitHub Pages,
Netlify ou Vercel copiando a pasta inteira.

## Personalizar

- **Foto**: em `index.html`, troque o `PB` dentro de `<div class="photo">` por `<img src="foto.jpg" alt="Seu nome">`
  e coloque `foto.jpg` nesta pasta.
- **Texto, links e contato**: seção `.hero` e o `<footer id="contato">` em `index.html`.
- **Skills**: array `SKILLS` no `<script>` de `index.html`.
- **Cards dos projetos**: array `PROJETOS` (nome, setor, cor, descrição, destaques, stack, tags dos filtros).

## Demos navegáveis

Cada sistema fica em `demos/<slug>/`:

| Arquivo | O que é |
|---|---|
| `index.html` | Cópia de `demos/_engine/template.html` (igual em todas) |
| `config.js` | Marca, cores, usuário, menu e telas com os dados fictícios |
| logos e imagens | Usados no login, menu e PDFs |

O motor (`demos/_engine/engine.js` e `engine.css`) desenha as telas a partir do config. Tipos de tela:

| `type` | Uso |
|---|---|
| `dashboard` | KPIs, gráficos (`bar`, `line`, `donut`) e listas |
| `table` | Busca, filtro por chips, ordenação, detalhe em painel lateral, "Novo" com formulário, ações e PDF (`doc` + `_items`) |
| `kanban` | Colunas com arrastar e soltar e mover pelo detalhe |
| `inbox` | Conversas de WhatsApp; com `ai: true` a IA responde pelas `rules` |
| `chat` | Playground do agente de IA, mostrando as tools chamadas |
| `calendar` | Agenda semanal com eventos clicáveis |
| `catalog` | Grade de produtos com imagem |
| `form` | Tela de configurações |

Para um sistema novo: crie `demos/<slug>/`, copie o `template.html` como `index.html`, escreva o `config.js`
(use um existente como base) e adicione o card em `PROJETOS`.

Ao alterar o motor, aumente o `?v=` dos links em `template.html` e copie de novo para as pastas,
para os navegadores não usarem a versão antiga em cache.
