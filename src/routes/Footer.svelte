<script>
    import { onMount, onDestroy } from 'svelte';
    import { tick } from 'svelte';

    let showFooter = false;
    let lastScrollY = 0;

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            if (currentScrollY > screenHeight / 2) {
                // Show footer if scrolling down
                showFooter = currentScrollY > lastScrollY;
            } else {
                // Hide footer if above half the screen height
                showFooter = false;
            }

            lastScrollY = currentScrollY;
            tick(); // Ensure Svelte updates the DOM
        }
    };

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<style>
    .show {
        transform: translateY(0);
    }
    .hide {
        transform: translateY(100%);
    }
</style>

<footer class="fixed bottom-0 left-0 transition-all duration-300 w-full py-2 bg-verde-claro-ensou flex flex-col items-center" class:show={showFooter} class:hide={!showFooter}>
    <div class="flex items-center justify-around gap-5 px-5">
        <!-- <a href="https://www.facebook.com/" target="_top"><i class="text-3xl text-blue-800 fa-brands fa-facebook"></i></a> -->
        <a href="https://maps.app.goo.gl/H8Naw99hamR1ALRg7" class="flex px-2 max-w-[75%] items-center" target="_blank"><i class="fa fa-location-dot text-3xl text-red-600"></i><p class="text-center text-pretty">&thinsp; Valle de los Lirios, 80050 Culiacán Rosales, Sin.</p></a>
        <a href="https://www.tiktok.com/@ensousushi" target="_blank"><i class="text-2xl [text-shadow:_0_1px_0_rgb(255_0_0_/_100%)] fa-brands fa-tiktok"></i></a>
        <a href="https://www.instagram.com/ensousushi/" target="_blank"><i class="text-4xl fa-brands fa-square fa-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i></a>
        <!-- <a href="tel:+526674221577"><i class="text-3xl fa fa-phone"></i></a> -->
    </div>
    <!-- <div class="w-4/5">
        <a href="https://maps.app.goo.gl/H8Naw99hamR1ALRg7" class="flex px-2 items-center" target="_blank"><i class="fa fa-location-dot text-3xl text-red-600"></i><p class="text-center text-pretty font-museosans">&thinsp; Valle de los Lirios, 80050 Culiacán Rosales, Sin.</p></a>
    </div> -->
</footer>