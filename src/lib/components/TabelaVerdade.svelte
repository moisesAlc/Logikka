<script>
  import Coluna from "./Coluna.svelte";
  import {
    gerarColunasIniciais,
    conetoresLogicos,
    avaliarLinhaIndividual,
    classificarTabela,
  } from "../logic.js";

  // Configuração inicial das premissas
  const colunasBase = gerarColunasIniciais(2);
  let valoresPremissaP = colunasBase[0].valores;
  let valoresPremissaQ = colunasBase[1].valores;

  export let titulo = "Minha Tabela Verdade";
  export let conetorAlvo = "XOR";
  export let labelSimbolo = "P ⊕ Q";
  const totalLinhas = valoresPremissaP.length;

  // Estado
  let respostasUsuario = ["?", "?", "?", "?"];
  let feedbackValidacao = ["", "", "", ""];

  // 1. Reatividade da classificação (Sempre funciona)
  $: classificacaoFinal = classificarTabela(respostasUsuario);

  // 2. LÓGICA DE LIMPEZA ÚNICA E PROTEGIDA
  // Monitoramos 'respostasUsuario', mas a limpeza só ocorre se NÃO estivermos validando
  let estaValidando = false;

  $: {
    // Apenas mencionar a variável para o Svelte observar a mudança
    respostasUsuario;

    if (!estaValidando && feedbackValidacao.some((f) => f !== "")) {
      // Usamos o método tradicional para garantir que o Svelte perceba a mudança de referência
      feedbackValidacao = ["", "", "", ""];
    }
  }

  function validarExercicio() {
    // Bloqueia a limpeza reativa imediatamente
    estaValidando = true;

    const operacao = conetoresLogicos[conetorAlvo];

    // Calculamos o novo feedback
    const novoFeedback = respostasUsuario.map((valor, i) => {
      return avaliarLinhaIndividual(
        valor,
        valoresPremissaP[i],
        valoresPremissaQ[i],
        operacao,
      );
    });

    // Atribuímos o novo array
    feedbackValidacao = novoFeedback;
  }

  function reiniciarCorrecao() {
    // 1. Voltamos as respostas para o estado de dúvida
    respostasUsuario = ["?", "?", "?", "?"];

    // 2. Limpamos qualquer feedback de erro ou acerto
    feedbackValidacao = ["", "", "", ""];

    // 3. Garantimos que o estado de validação seja resetado
    estaValidando = false;
  }
</script>

<div class="tabela-container">
  <h2>{titulo}</h2>

  <div class="grade-colunas">
    <Coluna titulo="P" {totalLinhas} valores={valoresPremissaP} readonly />
    <Coluna titulo="Q" {totalLinhas} valores={valoresPremissaQ} readonly />

    <Coluna
      titulo={labelSimbolo}
      {totalLinhas}
      bind:valores={respostasUsuario}
      {feedbackValidacao}
      destaque
    />
  </div>

  <!-- <div class="status-bar" class:finalizado={!classificacaoFinal.includes("..")}>
    <strong>Classificação:</strong>
    {classificacaoFinal}
  </div> -->

  <div class="acoes-container">
    <button class="btn-calcular" on:click={validarExercicio}>
      🔍 Calcular
    </button>

    <button class="btn-reiniciar" on:click={reiniciarCorrecao}>
      🔄 Reiniciar
    </button>
  </div>
</div>

<style>
  :global(th td) {
    width: 60px;
    height: 50px;
  }
  .tabela-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  /* O segredo para parecer uma tabela única: */
  .grade-colunas {
    display: flex;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #bbb;
    border-right: none; /* Como cada coluna já tem borda esquerda, evitamos o dobro na ponta */
  }

  .status-bar {
    margin-top: 1rem;
    padding: 10px 20px;
    background-color: #fff;
    min-width: 200px;
    text-align: center;
  }

  .btn-calcular {
    margin-top: 1rem;
    padding: 10px 20px;
    border: 1px solid #bbb;
    background-color: #0db3be;
    color: white;
    border-radius: 4px;
    min-width: 200px;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .btn-calcular:hover {
    filter: brightness(1.1);
  }
  .btn-calcular:active {
    transform: scale(0.98);
  }
  .status-bar.finalizado {
    background-color: #e3f2fd;
    color: #0d47a1;
  }

  .acoes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }

  .btn-calcular, .btn-reiniciar {
    padding: 10px 20px;
    border: 1px solid #bbb;
    border-radius: 4px;
    min-width: 150px;
    text-align: center;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-calcular {
    background-color: #0db3be;
    color: white;
  }

  .btn-reiniciar {
    background-color: #f8f9fa;
    color: #333;
  }

  .btn-reiniciar:hover {
    background-color: #e2e6ea;
  }

  .btn-calcular:hover {
    filter: brightness(1.1);
  }
</style>
