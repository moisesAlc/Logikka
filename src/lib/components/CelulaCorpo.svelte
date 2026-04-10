<script>
  import CorrecaoCelula from "./CorrecaoCelula.svelte";

  export let valor = "";
  export let estadoCorrecao = "";

  const estados = ["V", "F", "", "?"];
  let girar = false; // Variável para controlar o estado da animação

  function handleClick() {
    // 1. Primeiro, iniciamos o giro visual
    girar = !girar;

    // 2. Esperamos exatamente metade da animação (300ms de 600ms)
    // para trocar o valor. Nesse ponto, o cartão está a 90°, invisível ao olho.
    setTimeout(() => {
      const atualIdx = estados.indexOf(valor);
      const proximoIdx = (atualIdx + 1) % estados.length;
      valor = estados[proximoIdx];
    }, 200);
  }
</script>

<td class="celula-container" on:click={handleClick}>
  <div class="flip-card-inner" class:is-flipped={girar}>
    <div
      class="face front"
      class:verdade={valor === "V"}
      class:falso={valor === "F"}
      class:duvida={valor === "?"}
      class:vazio={valor === ""}
    >
      {valor}
      <span class="correcao-pos"
        ><CorrecaoCelula estado={estadoCorrecao} /></span
      >
    </div>

    <div
      class="face back"
      class:verdade={valor === "V"}
      class:falso={valor === "F"}
      class:duvida={valor === "?"}
      class:vazio={valor === ""}
    >
      {valor}
      <span class="correcao-pos"
        ><CorrecaoCelula estado={estadoCorrecao} /></span
      >
    </div>
  </div>
</td>

<style>
  .celula-container {
    /* Dimensões do seu tema */
    width: var(--celula-width);
    height: var(--celula-height);
    padding: 0;
    cursor: pointer;
    user-select: none;
    /* O "palco" para o 3D ocorrer */
    perspective: 1000px;
    border-top: #9c9c9c 1px solid;
    border-right: #9c9c9c 1px solid; /* Adicionei para fechar a grade */
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
  }

  /* Classe disparada pelo clique */
  .is-flipped {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    /* Esconde a face que estiver de costas */
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
  }

  /* Posicionamento da face traseira */
  .back {
    transform: rotateY(180deg);
  }

  /* Estilos de Cores (Reutilizando os seus) */
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

  /* Posicionamento do seu componente de correção */
  .correcao-pos {
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 0.8rem;
  }

  .celula-container:hover .face {
    filter: brightness(0.95);
  }
</style>
