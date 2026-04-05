<script>
  // Propriedade para definir se é uma coluna de resultado (cinza)
  export let destaque = false;
</script>

<col class:destaque />

<style>
  col {
    /* Define uma largura mínima padrão para todas as colunas */
    min-width: 60px;
  }

  .destaque {
    background-color: #f0f0f0;
    /* Você poderia até colocar uma borda esquerda 
       diferente para separar premissas de resultados */
    border-left: 2px solid #ddd;
  }
</style>