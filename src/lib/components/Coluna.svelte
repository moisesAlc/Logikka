<script>
  import CelulaCabecalho from './CelulaCabecalho.svelte';
  import CelulaCorpo from './CelulaCorpo.svelte';

  export let titulo = "";
  export let destaque = false;
  export let valores = [];
  export let feedbackValidacao = []; // Certifique-se de que esta prop existe aqui!
</script>

<div class="coluna-container" class:is-destaque={destaque}>
  <table>
    <thead>
      <tr><CelulaCabecalho valor={titulo} /></tr>
    </thead>
    <tbody>
      {#each valores as _, i}
        <tr>
          <CelulaCorpo 
            bind:valor={valores[i]} 
            statusFeedback={feedbackValidacao[i]} 
          />
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table {
    border-collapse: collapse;
    /* Removemos a borda individual daqui para evitar duplicidade 
       quando as colunas se encostam na grade principal */
    border-left: 1px solid #9c9c9c;
  }

  .coluna-container {
    display: flex;
    flex-direction: column;
  }

  /* Estilo para a coluna de resultado */
  .is-destaque :global(.face) {
    background-color: var(--cor-destaque-bg, #f0f0f0);
    border-left: 2px solid var(--cor-destaque-borda, #0db3be);
  }

  /* Caso queira desabilitar cliques em P e Q */
  .is-readonly {
    pointer-events: none;
  }
</style>