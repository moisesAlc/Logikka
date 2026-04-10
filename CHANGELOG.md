# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste ficheiro.
O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.4.0] - 2026-04-10

### Added
- **Efeito 3D Flip**: Implementação de rotação 3D nas células ao alternar valores, utilizando a técnica de "card flipping" com faces `front` e `back`.
- **Sincronização de Animação**: Adicionado um atraso reativo (`setTimeout`) de 300ms na troca do valor lógico para garantir que o texto mude apenas quando a célula estiver de perfil, evitando "glitches" visuais.

### Changed
- **Estrutura da Célula**: Refatoração do `CelulaCorpo.svelte` para incluir containers de perspectiva (`flip-card-inner`) e suporte a múltiplas faces.
- **Melhoria de UX**: O feedback de clique agora é acompanhado por uma transição suave de 0.6s com curva de aceleração `cubic-bezier`.

---

## [0.3.0] - 2026-04-07

### Added
- **Componente `CorrecaoCelula`**: Novo componente para exibir feedback visual de acerto (`✔`) ou erro (`✘`).
- **Sistema de Temas Centralizado**: Criação do `theme.css` com Variáveis CSS (`--celula-width`, `--cor-v-bg`, etc.).
- **Documentação Inicial**: Criação do `README.md` com arquitetura e backlog de funcionalidades.

### Changed
- **Arquitetura de CSS**: Migração de estilos locais para estilos centralizados no componente Pai utilizando `:global()`.
- **Estilização de Células**: Implementação de `box-sizing: border-box` para garantir o alinhamento horizontal perfeito entre colunas.

---

## [0.2.0] - 2026-04-07

### Added
- **Arquitetura Orientada a Colunas**: Reestruturação total para componentes independentes (`Coluna.svelte`).
- **Componentes de Célula**: Fragmentação da tabela em `CelulaCabecalho` (com suporte a slots) e `CelulaCorpo`.

### Fixed
- **Erro de Propriedade Desconhecida**: Corrigido o erro onde o componente `Coluna` não reconhecia a prop `valores`.
- **Sincronização de Dados**: Implementação de `bind:valores` para fluxo bidirecional de dados.

---

## [0.1.0] - 2026-04-06

### Added
- **MVP (Minimum Viable Product)**: Estrutura inicial da Tabela Verdade com suporte a P e Q.
- **Lógica de Clique Circular**: Alternância entre estados (V, F, ?, "").
- **Classificação Reativa**: Identificação automática de Tautologia, Contradição ou Contingência.

---

[0.4.0]: https://github.com/teu-utilizador/logikka/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/teu-utilizador/logikka/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/teu-utilizador/logikka/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/teu-utilizador/logikka/releases/tag/v0.1.0