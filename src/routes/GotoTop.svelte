<script>
    export let showAtPixel = 1000;
  
    let scrollHeight = 0;
  
    const gotoTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
    };
  
    $: showGotoTop = scrollHeight > showAtPixel;
  </script>
  
  {#if showGotoTop}
    <button on:click={gotoTop} class="fixed right-8 bottom-16 rounded-md z-50 bg-slate-300 p-2 duration-300" title="Go to top"
      ><i class="fa-solid text-verde-ensou fa-arrows-up-to-line"></i></button
    >
  {/if}
  
  <svelte:window bind:scrollY={scrollHeight} />