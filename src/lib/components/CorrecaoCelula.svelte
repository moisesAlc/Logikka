<script>
  /**
   * Status possíveis: "correto", "errado" ou "" (pendente)
   * @type {string}
   */
  export let statusValidacao = "";

  // Mapeamento semântico de símbolos
  const simbolosFeedback = {
    "correto": "✓",
    "errado": "✖",
    "": ""
  };
</script>

<span 
  class="feedback-visual {statusValidacao}" 
  aria-hidden={statusValidacao === ""}
>
  {simbolosFeedback[statusValidacao] || ""}
</span>

<style>
  .feedback-visual {
    font-family: "Roboto", sans-serif;
    font-weight: 900; /* Mais peso para o ícone se destacar */
    font-size: 1.3rem;
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-left: 10px;
    vertical-align: middle;
  }

  /* Efeito de "Pop-in" quando o status muda */
  .correto, .errado {
    animation: popIn 0.3s forwards;
  }

  @keyframes popIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1.1); opacity: 1; }
  }

  .correto {
    color: var(--cor-v-texto, #2e7d32);
    text-shadow: 0 0 5px rgba(46, 125, 50, 0.2);
  }

  .errado {
    color: var(--cor-f-texto, #d32f2f);
    text-shadow: 0 0 5px rgba(211, 47, 47, 0.2);
  }
</style>