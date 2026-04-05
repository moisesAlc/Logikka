<script>
  import CelulaCabecalho from './CelulaCabecalho.svelte';
  import CelulaCorpo from './CelulaCorpo.svelte';

  export let titulo = "";
  export let destaque = false;
  export let totalLinhas = 4;
  
  // O segredo: inicializar o array caso o pai não passe nada
  export let valores = Array(totalLinhas).fill("");
</script>

<div class="coluna-container" class:is-destaque={destaque}>
  <table>
    <thead>
      <tr>
        <CelulaCabecalho valor={titulo} />
      </tr>
    </thead>
    <tbody>
      {#each valores as _, i}
        <tr>
          <CelulaCorpo bind:valor={valores[i]} />
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>

  table {
    border-collapse: collapse;
    border: #9c9c9c 1px solid;
  }

  .is-destaque :global(td) {
    background-color: #d9d9d9;
  }

</style>