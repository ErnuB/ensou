<script>
    export let images = [];
    let offsets = [];

    // Function to get a random left value within the range [20%, 100%] of the container width
    function getRandomLeft() {
        return window.innerWidth * 0.2 + Math.random() * (window.innerWidth * 0.8 - window.innerWidth * 0.2);
    }

    // Initialize offsets with random left values and original offsets
    function initializeOffsets() {
        if (typeof window !== 'undefined') {
            offsets = images.map(image => {
                const left = getRandomLeft();
                return { 
                    ...image, 
                    offset: 0,
                    originalOffset: 0,
                    left 
                };
            });
        }
    }

    function handleScroll() {
        if (typeof window !== 'undefined') {
            const scrollY = window.scrollY;
            offsets = offsets.map(image => {
                // Calculate new offset based on scroll speed (adjusted for slower scrolling)
                let newOffset = (scrollY * image.speed * 0.1) % window.innerHeight;

                // Check if the image has scrolled off the top or bottom of the screen
                if (newOffset < 0 || newOffset > window.innerHeight) {
                    newOffset = window.innerHeight;
                    return { ...image, offset: newOffset, left: getRandomLeft() }; // Assign a new random left value
                }

                // Update the offset without changing the left value
                return { ...image, offset: newOffset };
            });
        }
    }

    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        initializeOffsets();
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
    .parallax-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: -1;
    }

    .parallax-image {
        position: absolute;
        width: 25%;
    }
</style>

<div class="parallax-container">
    {#each offsets as image (image.src)}
        <img src={image.src} alt={image.alt} class="parallax-image" style="top: {image.offset}px; left: {image.left}px;" />
    {/each}
</div>




