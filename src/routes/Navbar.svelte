<script>
    import { onMount } from 'svelte';

    let seccion = [
        {id: "entradas", nombre: "Entradas"},
        {id: "barra-fria", nombre: "Barra Fría"},
        {id: "arroces", nombre: "Arroces"},
        {id: "naturales", nombre: "Naturales"},
        {id: "empanizados", nombre: "Empanizados"},
        {id: "veggie", nombre: "Veggie"},
        {id: "especiales", nombre: "Especiales"},
        {id: "horneados", nombre: "Horneados"},
        {id: "casa", nombre: "De la Casa"},
        {id: "postres", nombre: "Postres"},
        {id: "bebidas", nombre: "Bebidas"},
        {id: "cocteleria", nombre: "Coctelería"},
    ]

    let isNavOpen = false;

    let toggleNav = () => {
    isNavOpen = !isNavOpen;
    updateAriaExpanded();
  };

  const closeNav = () => {
    isNavOpen = false;
    updateAriaExpanded();
  };

  const updateAriaExpanded = () => {
    const navBar = document.getElementById('nav-bar');
    if (navBar) {
      navBar.setAttribute('aria-expanded', isNavOpen.toString());
    }
  };

  onMount(() => {
    updateAriaExpanded();
  });
</script>

<section class="sticky top-0 flex py-1 h-16 flex-col z-30 bg-verde-claro-ensou w-full">
    <div class="flex items-center justify-between mx-4">
      <a href="/" class="px-4">
        <img src="/img/ensou-logo.png" alt="ensou" class="max-h-14">
      </a>
      <div class="text-verde-ensou">
        <span class="text-lg font-rampiro uppercase">Menú</span>
        <button class="pr-6" aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><i class="fa-solid text-xl fa-bars"></i></button>
      </div>
    </div>
{#if isNavOpen}
    <nav id="nav-bar" class="flex flex-col py-3 bg-verde-claro-ensou">
        {#each seccion as seccionItem}
            <a href="#{seccionItem.id}" class="px-4 py-1 w-full text-naranja-ensou font-acello drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] text-2xl font-bold uppercase" on:click={closeNav}>{seccionItem.nombre}</a>
        {/each}
    </nav>
{/if}
</section>
