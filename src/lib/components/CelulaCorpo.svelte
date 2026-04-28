<script>
  import CorrecaoCelula from "./CorrecaoCelula.svelte";

  export let valor = "";
  export let statusFeedback = ""; 

  const cicloValores = ["V", "F", "?"];
  let animacaoGiro = false; 

  function alternarValor() {

    animacaoGiro = !animacaoGiro;

    // 2. Troca o valor no "meio" do giro para suavidade visual
    setTimeout(() => {
      const indiceAtual = cicloValores.indexOf(valor);
      const proximoIndice = (indiceAtual + 1) % cicloValores.length;
      valor = cicloValores[proximoIndice];
    }, 250); // Ajustado para 250ms (pico do giro de 600ms)
  }
</script>

<td class="celula-container" on:click={alternarValor}>
  <div class="cartao-3d" class:is-flipped={animacaoGiro}>
    
    <div class="face front {obterClasseCor(valor)}">
      <span class="conteudo-valor">{valor}</span>
      <div class="feedback-container">
        <CorrecaoCelula statusValidacao={statusFeedback} />
      </div>
    </div>

    <div class="face back {obterClasseCor(valor)}">
      <span class="conteudo-valor">{valor}</span>
      <div class="feedback-container">
        <CorrecaoCelula statusValidacao={statusFeedback} />
      </div>
    </div>

  </div>
</td>

<script context="module">
  // Função utilitária interna para não poluir o script principal
  function obterClasseCor(v) {
    if (v === "V") return "verdade";
    if (v === "F") return "falso";
    if (v === "?") return "duvida";
    return "vazio";
  }
</script>

<style>
  .celula-container {
    width: var(--celula-width, 60px);
    height: var(--celula-height, 50px);
    padding: 0;
    cursor: pointer;
    perspective: 1000px;
    border-top: 1px solid #9c9c9c;
    border-right: 1px solid #9c9c9c;
  }

  .cartao-3d {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
  }

  .is-flipped {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .back {
    transform: rotateY(180deg);
  }

  /* Classes de Estado (Tema) */
  .verdade { color: var(--cor-v-texto); background-color: var(--cor-v-bg); }
  .falso { color: var(--cor-f-texto); background-color: var(--cor-f-bg); }
  .duvida { color: var(--cor-d-texto); background-color: var(--cor-d-bg); }
  .vazio { background-color: var(--cor-vazio-bg); }

  .feedback-container {
    position: absolute;
    top: 0;
    right: 2px;
    pointer-events: none; /* Garante que o ícone não atrapalhe o clique na célula */
  }

  .celula-container:hover .face {
    filter: contrast(1.1) brightness(0.98);
  }
</style>