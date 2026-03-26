# 💸 Fluxo — Dashboard de Controle Financeiro

App 100% frontend (HTML/CSS/JS puro), zero dependências de backend.
Todos os dados ficam no `localStorage` do navegador.

---

## 🚀 Rodar localmente

1. Baixe o arquivo `index.html`
2. Abra no navegador — pronto. Sem instalação.

Ou com um servidor local:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

---

## 🌐 Deploy no GitHub Pages (gratuito)

### Passo a passo:

1. **Crie um repositório** no GitHub (ex: `meu-financeiro`)

2. **Faça upload** do `index.html` para a branch `main`

3. **Ative o GitHub Pages:**
   - Vá em `Settings` → `Pages`
   - Em **Source**, selecione `Deploy from a branch`
   - Branch: `main` / Folder: `/ (root)`
   - Clique em **Save**

4. **Acesse:** `https://seu-usuario.github.io/meu-financeiro`

> ⚡ Pronto em 2 minutos, sem custo nenhum.

---

## ✨ Funcionalidades

| Recurso                             | Status |
| ----------------------------------- | ------ |
| Cadastro de receitas e despesas     | ✅     |
| Categorias editáveis                | ✅     |
| Visualização por mês e ano          | ✅     |
| Navegação entre períodos            | ✅     |
| Cards: saldo, receitas, despesas    | ✅     |
| Gráfico pizza por categoria         | ✅     |
| Gráfico barras por semana/mês       | ✅     |
| Editar e excluir lançamentos        | ✅     |
| Filtros por categoria e tipo        | ✅     |
| Ordenação por coluna                | ✅     |
| Exportar CSV                        | ✅     |
| Dark mode / Light mode              | ✅     |
| Responsivo (mobile e desktop)       | ✅     |
| Persistência no localStorage        | ✅     |
| Dados de exemplo no primeiro acesso | ✅     |

---

## 🗂 Estrutura do código

Tudo em um único `index.html` com seções bem demarcadas:

```
index.html
├── <style>        — CSS com variáveis e temas (dark/light)
├── HTML           — Sidebar, Topbar, Modal, Confirm, Toast
└── <script>
    ├── STATE      — variáveis globais
    ├── STORAGE    — load/save localStorage
    ├── DATE       — helpers de período
    ├── CATEGORIES — gerenciamento de categorias
    ├── FILTER     — filtros e ordenação
    ├── TOTALS     — cálculo de saldo
    ├── CHART DATA — dados para Chart.js
    ├── RENDER     — dashboard e listagem
    ├── MODAL      — abertura/fechamento/submit
    ├── DELETE     — confirmação e exclusão
    ├── EXPORT     — geração de CSV
    ├── THEME      — dark/light toggle
    └── INIT       — inicialização e seed data
```

---

## 🛠 Tecnologias

- HTML5 / CSS3 / JavaScript ES6+
- [Chart.js 4](https://www.chartjs.org/) (via CDN)
- Google Fonts: Syne + DM Sans
- localStorage para persistência
