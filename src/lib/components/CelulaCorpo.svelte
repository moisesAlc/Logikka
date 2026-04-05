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

    border-top: #9c9c9c 1px solid;
    
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
    background-color: #f8f8f8;
    filter: brightness(0.95);
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
    background-color: #ffffff;
  }
</style>