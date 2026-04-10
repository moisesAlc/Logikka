<script>
  // Valores possíveis: "correto", "errado" ou ""
  export let estado = "";

  // Mapeamento interno de ícones
  const icones = {
    "correto": "✓",
    "errado": "✖",
    "": "○"
  };
</script>

<span class="icon-correcao {estado}">
  {icones[estado] || ""}
</span>

<style>
  .icon-correcao {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    line-height: 1;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-left: 8px;
  }

  /* Animação simples quando o ícone aparece */
  .correto, .errado {
    transform: scale(1.1);
  }

  /* Podes usar as tuas variáveis globais aqui também */
  .correto {
    color: var(--cor-v-texto, #2e7d32);
  }

  .errado {
    color: var(--cor-f-texto, #d32f2f);
  }
</style>