
---

# 🧠 Logikka - Tabela Verdade Interativa

Um motor de Tabelas Verdade interativo construído com **Svelte** e **Vite**. O projeto permite a criação de tabelas dinâmicas onde o usuário pode alternar estados lógicos e receber feedback visual instantâneo.

## 🚀 Tecnologias
* [Svelte](https://svelte.dev/) - Framework reativo.
* [Vite](https://vitejs.dev/) - Build tool ultra-rápido.
* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Sistema de temas centralizado.

## 🏗️ Arquitetura de Componentes

O projeto utiliza uma abordagem **orientada a colunas** para garantir a flexibilidade na montagem de diferentes expressões lógicas.

* **`TabelaVerdade.svelte`**: O orquestrador principal. Gerencia os arrays de dados e a lógica de classificação (Tautologia, Contradição, Contingência).
* **`Coluna.svelte`**: Gerencia uma vertical completa. Recebe um título e um array de valores, renderizando o cabeçalho e o corpo.
* **`CelulaCabecalho.svelte`**: Componente visual para os títulos das colunas (P, Q, etc).
* **`CelulaCorpo.svelte`**: Célula interativa que alterna entre os estados `V`, `F`, `?` e `""` ao ser clicada.
* **`CorrecaoCelula.svelte`**: Pequeno componente de feedback que exibe `✔` ou `✘` baseado na validade da resposta.

## 🎨 Sistema de Temas

As propriedades visuais estão centralizadas no arquivo `src/lib/theme.css`. Para alterar o layout de todas as tabelas simultaneamente, basta editar as variáveis globais:

```css
:root {
  --celula-width: 60px;
  --celula-height: 50px;
  --cor-v-bg: #e8f5e9;
  /* ... */
}
```

## 🛠️ Instalação e Uso

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/logikka.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 📝 Como Adicionar Novas Colunas

No componente `TabelaVerdade.svelte`, basta declarar um novo array e adicionar o componente `Coluna`:

```svelte
<script>
  let dadosP = ["V", "V", "F", "F"];
  let dadosNovo = ["", "", "", ""];
</script>

<div class="grade-colunas">
  <Coluna titulo="P" bind:valores={dadosP} />
  <Coluna titulo="Nova Expressão" bind:valores={dadosNovo} destaque />
</div>
```

---

### 💡 Dica de manutenção
Se precisar ajustar o alinhamento das colunas, lembre-se que o CSS centralizado no `TabelaVerdade.svelte` utiliza o seletor `:global(td)` para garantir que todos os componentes de coluna tenham dimensões idênticas.

---

## 🔮 Funcionalidades Futuras (Backlog)

Atualmente, o projeto está em desenvolvimento ativo. As seguintes funcionalidades estão planeadas para as próximas versões:

### ⚙️ Automação e Lógica
- [ ] **Gerador Automático de Linhas**: Criar dinamicamente as $2^n$ combinações de premissas (V/F) baseadas no número de variáveis (P, Q, R, etc.).
- [ ] **Validação por Expressão**: Comparar o preenchimento do utilizador com uma expressão lógica real (ex: `P && Q`) e ativar o componente `CorrecaoCelula` automaticamente.
- [ ] **Importação de Fórmulas**: Permitir que o utilizador digite uma fórmula e a tabela seja montada sozinha.

### 🎨 Interface e UX
- [ ] **Modo Escuro (Dark Mode)**: Implementar uma variante do `theme.css` para ambientes de baixa luminosidade.
- [ ] **Suporte a LaTeX**: Integrar o suporte para símbolos matemáticos complexos nos cabeçalhos através de slots e bibliotecas como KaTeX.
- [ ] **Animações de Feedback**: Adicionar micro-interações quando uma linha é preenchida corretamente.

### 📤 Exportação e Partilha
- [ ] **Exportar para PDF/PNG**: Permitir que estudantes e professores descarreguem a tabela preenchida para trabalhos académicos.
- [ ] **Persistência Local**: Salvar o progresso da tabela no `localStorage` do navegador para evitar perda de dados ao atualizar a página.