<script>
  import Coluna from "./Coluna.svelte";

  export let titulo = "Minha Tabela Verdade";

  // Definimos a quantidade de linhas globalmente
  let totalLinhas = 4;

  // Criamos os arrays de dados para cada coluna.
  // Eles precisam ser 'let' para que o 'bind' funcione e a reatividade dispare.
  let dadosP = ["V", "V", "F", "F"];
  let dadosQ = ["V", "F", "V", "F"];
  let dadosRes = ["", "", "", ""]; // Começa vazio para o usuário preencher

  // Lógica reativa para o rodapé:
  // Sempre que 'dadosRes' mudar (via clique na célula), 'tipo' será recalculado.
  $: tipo =
    dadosRes.includes("") || dadosRes.includes("?")
      ? "Aguardando preenchimento..."
      : dadosRes.every((v) => v === "V")
        ? "Tautologia"
        : dadosRes.every((v) => v === "F")
          ? "Contradição"
          : "Contingência";
</script>

<div class="tabela-container">
  <h2>{titulo}</h2>

  <span class="grade-colunas">
    <Coluna titulo="P" {totalLinhas} bind:valores={dadosP} />

    <Coluna titulo="Q" {totalLinhas} bind:valores={dadosQ} />

    <Coluna titulo="P ∧ Q" {totalLinhas} bind:valores={dadosRes} destaque/>
  </span>

  <div class="status-bar">
    <strong>Classificação:</strong>
    {tipo}
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
    display: flex; /* Alinha as colunas lado a lado */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #bbb; /* Fecha a última borda que as colunas não têm */
  }

  .status-bar {
    margin-top: 1rem;
    padding: 10px 20px;
    border: 1px solid #bbb;
    background-color: #fff;
    border-radius: 4px;
    min-width: 200px;
    text-align: center;
  }
</style>
