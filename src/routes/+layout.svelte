<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import '$lib/css/output.css';
</script>

<div class="flex flex-col items-center justify-between bg-background min-h-screen text-white">
  <Header />

  <main class="flex flex-col flex-grow items-center">
    <slot />
  </main>
  
  <Footer />
</div>