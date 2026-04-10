# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste ficheiro.
O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.0] - 2026-04-07

### Added
- **Componente `CorrecaoCelula`**: Novo componente para exibir feedback visual de acerto (`✔`) ou erro (`✘`).
- **Sistema de Temas Centralizado**: Criação do `theme.css` com Variáveis CSS (`--celula-width`, `--cor-v-bg`, etc.) para controlo global do layout.
- **Documentação**: Adicionados arquivos `README.md` com backlog de funcionalidades e este `CHANGELOG.md`.

### Changed
- **Arquitetura de CSS**: Migração de estilos locais nos componentes para estilos centralizados no componente Pai (`TabelaVerdade`) utilizando o seletor `:global()`.
- **Estilização de Células**: Implementação de `box-sizing: border-box` e dimensões fixas para garantir o alinhamento horizontal entre colunas independentes.

---

## [0.2.0] - 2026-04-07

### Added
- **Arquitetura Orientada a Colunas**: O projeto foi reestruturado para que cada coluna seja um componente independente (`Coluna.svelte`), facilitando a expansão de fórmulas.
- **Componentes de Célula**: Fragmentação da tabela em `CelulaCabecalho` (com suporte a slots) e `CelulaCorpo`.

### Fixed
- **Erro de Propriedade Desconhecida**: Resolvido o erro onde o componente `Coluna` não reconhecia a prop `valor`/`valores`.
- **Sincronização de Dados**: Implementado o uso de `bind:valores={array[i]}` para garantir que o clique na célula atualize o estado no componente Pai.

---

## [0.1.0] - 2026-04-06

### Added
- **MVP (Minimum Viable Product)**: Estrutura inicial da Tabela Verdade com suporte básico para premissas P e Q.
- **Lógica de Clique**: Implementação da alternância de estados (V, F, ?, "") nas células.
- **Classificação Reativa**: Lógica para identificar automaticamente Tautologia, Contradição ou Contingência baseada no resultado.

---

[0.3.0]: https://github.com/teu-utilizador/logikka/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/teu-utilizador/logikka/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/teu-utilizador/logikka/releases/tag/v0.1.0