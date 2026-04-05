<script>
  // Agora 'valor' aceita: "V", "F", "", "?"
  export let valor = ""; 

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
  {valor}
</td>

<style>
  .celula {
    border: 1px solid #bbb;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto', sans-serif; /* Agora com Roboto! */
    cursor: pointer;
    user-select: none; /* Evita que o texto fique azul ao clicar rápido */
    min-width: 45px;   /* Garante que a célula não mude de largura */
    height: 45px;
    transition: all 0.2s ease;
  }

  /* Feedback visual ao passar o mouse */
  .celula:hover {
    background-color: #f0f0f0;
    border-color: #888;
  }

  .verdade {
    color: #2e7d32;
    background-color: #e8f5e9;
  }

  .falso {
    color: #d32f2f;
    background-color: #ffebee;
  }

  .duvida {
    color: #ef6c00;
    background-color: #fff3e0;
  }

  .vazio {
    background-color: transparent;
  }
</style>