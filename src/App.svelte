<script>
  import "@fontsource/roboto";
  import './lib/theme.css';
  import Sidebar from './lib/components/Sidebar.svelte';
  import TabelaVerdade from './lib/components/TabelaVerdade.svelte';
</script>

<div class="app-layout">
  <Sidebar />

  <main class="content">
    <header class="content-header">
      <h1>Logikka</h1>
    </header>
    
    <section class="table-container">
      <TabelaVerdade titulo="Tabela do Exercício 1" />
    </section>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: #fcfcfc;
  }

  .app-layout {
    display: flex;
    min-height: 100vh;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-header {
    width: 100%;
    padding: 20px 40px;
    background: white;
    border-bottom: 1px solid #eee;
    margin-bottom: 40px;
  }

  .table-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
</style>