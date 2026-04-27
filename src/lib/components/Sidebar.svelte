<script>
  let menuAberto = true;

  // A estrutura agora vive dentro do componente
  const menuEstrutura = [
    { name: 'Símbolos Lógicos', href: '#simbolos' },
    { name: 'Proposições', href: '#implicacao' },
    { name: '3. Bicondicional', href: '#bicondicional' }
  ];

  function toggleMenu() {
    menuAberto = !menuAberto;
  }
</script>

<nav class="sidebar" class:colapsada={!menuAberto}>
  <div class="sidebar-header">
    <div class="logo-area">
      <img src="src/assets/favicon.svg" alt="logo" class="nav-icon">
      {#if menuAberto}<span class="brand">Logikka</span>{/if}
    </div>
    <button class="toggle-btn" on:click={toggleMenu} aria-label="Colapsar Menu">
      {menuAberto ? '❮' : '❯'}
    </button>
  </div>

  <ul class="nav-links">
    {#each menuEstrutura as item}
      <li class="nav-section">
        <span class="nav-label">{item.name}</span>
        {#if item.submenu}
          <ul class="submenu">
            {#each item.submenu as sub}
              <li><a href={sub.href}>{sub.name}</a></li>
            {/each}
          </ul>
        {:else if item.href}
          <a href={item.href} class="single-link">{item.name}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .sidebar {
    width: 260px;
    background-color: #ffffff;
    border-right: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: sticky;
    top: 0;
    height: 100vh;
    z-index: 100;
  }

  .sidebar.colapsada {
    width: 70px;
  }

  .sidebar-header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    height: 65px;
    box-sizing: border-box;
  }

  .logo-area {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nav-icon { width: 30px; height: 30px; }

  .brand {
    font-weight: 700;
    font-size: 1.1rem;
    color: #333;
    white-space: nowrap;
  }

  .toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #999;
    padding: 5px;
    font-size: 1.2rem;
  }

  .nav-links {
    list-style: none;
    padding: 20px 0;
    margin: 0;
    flex-grow: 1;
    overflow-y: auto;
  }

  .nav-section {
    padding: 0 20px 20px;
  }

  .nav-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: #aaa;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  .sidebar.colapsada .nav-label {
    display: none;
  }

  .submenu {
    list-style: none;
    padding-left: 10px;
    margin: 0;
  }

  .submenu li a, .single-link {
    text-decoration: none;
    color: #444;
    font-size: 0.95rem;
    padding: 8px 0;
    display: block;
    transition: color 0.2s;
  }

  .submenu li a:hover, .single-link:hover {
    color: var(--cor-v-texto);
  }

  /* Esconde o conteúdo textual quando colapsado */
  .sidebar.colapsada .submenu, 
  .sidebar.colapsada .single-link,
  .sidebar.colapsada .nav-label {
    display: none;
  }
</style>