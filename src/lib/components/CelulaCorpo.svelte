<script>
  import CorrecaoCelula from "./CorrecaoCelula.svelte";

  export let valor = "";
  export let estadoCorrecao = ""; // Recebe do pai: "correto", "errado" ou ""

  // Lista circular de estados
  const estados = ["V", "F", "", "?"];

  function alternarValor() {
    const atualIdx = estados.indexOf(valor);
    // Pega o próximo índice (volta para 0 se chegar no fim)
    const proximoIdx = (atualIdx + 1) % estados.length;
    valor = estados[proximoIdx];
  }
</script>

<td
  class="celula"
  class:verdade={valor === "V"}
  class:falso={valor === "F"}
  class:duvida={valor === "?"}
  class:vazio={valor === ""}
  on:click={alternarValor}
>
  {valor}<span><CorrecaoCelula estado={estadoCorrecao} /></span>
</td>

<style>
  .celula {
    border-top: #9c9c9c 1px solid;
    padding-left: 3px;

    /* Dimensões Fixas (Crucial para alinhar colunas separadas) */
    width: var(--celula-width);
    height: var(--celula-height);

    /* Centralização Total com Flexbox */
    display: flex;
    align-items: center;
    justify-content: center;

    /* 4. Tipografia e Estilo */
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.6s ease;
  }

  .celula:hover {
    background-color: var(--cor-header-bg);
    filter: brightness(0.95);
  }

  .verdade {
    color: var(--cor-v-texto);
    background-color: var(--cor-v-bg);
  }

  .falso {
    color: var(--cor-f-texto);
    background-color: var(--cor-f-bg);
  }

  .duvida {
    color: var(--cor-d-texto);
    background-color: var(--cor-d-bg);
  }

  .vazio {
    background-color: var(--cor-vazio-bg);
  }
</style>
