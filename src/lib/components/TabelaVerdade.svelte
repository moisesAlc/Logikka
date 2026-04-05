<script>
  // Título da tabela
  export let titulo = "Tabela Verdade Xpto";

  import CelulaCorpo from './CelulaCorpo.svelte'; // Ajuste o caminho se necessário

  // Dados da tabela
  const linhas = [
    { p: true, q: true },
    { p: true, q: false },
    { p: false, q: true },
    { p: false, q: false },
  ];

  // Função para formatar booleano para string
  const format = (val) => (val ? "V" : "F");

  // Lógica da Conjunção (P ∧ Q)
  const calcularResultado = (p, q) => p && q;

  // Determinar se é Tautologia, Contradição ou Contingência
  $: resultados = linhas.map(l => calcularResultado(l.p, l.q));
  $: tipo = resultados.every(r => r === true) 
           ? "Tautologia" 
           : resultados.every(r => r === false) 
           ? "Contradição" 
           : "Contingência";
</script>

<table>
  <caption>{titulo}</caption>
  <colgroup>
    <col span="2">
    <col class="resultado-col">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">P</th>
      <th scope="col">Q</th>
      <th scope="col">P ∧ Q</th>
    </tr>
  </thead>
  <tbody>
    {#each linhas as { p, q }}
      <tr>
        <CelulaCorpo valor={p} />
        <CelulaCorpo valor={q} />
        <CelulaCorpo valor={p && q} />
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3"><strong>Resultado:</strong> {tipo}</td>
    </tr>
  </tfoot>
</table>

<style>
  table {
    border-collapse: collapse;
    font-family: "Roboto",sans-serif;
    margin: 1rem 0;
  }

  th, td {
    border: 1px solid #bbb;
    padding: 10px;
    text-align: center;
  }

  th {
    font-size: 1.3rem;
  }

  /* Estilizando a coluna via classe para manter o padrão que você usou */
  .resultado-col {
    background-color: #f0f0f0;
  }

  .resultado-celula {
    background-color: #f0f0f0; /* Garante o visual se o colgroup falhar */
  }

  tfoot td {
    background-color: #fff;
    font-size: 0.9rem;
  }
</style>