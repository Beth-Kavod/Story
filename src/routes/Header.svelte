<script>
  import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
  
  import searchIcon from '$lib/assets/icons/search.svg';
  import filterIcon from '$lib/assets/icons/filter.svg';
  import loading from '$lib/assets/icons/loading.svg';
  
  import { writable } from 'svelte/store';

  /* ----------------------------- Filtering logic ---------------------------- */

  // TODO: Add filtering logic
  function filter() {

  }

  let filterCount = writable(5);

  /* -------------------------- Navbar toggling logic ------------------------- */
</script>

<nav class="flex justify-between w-11/12 my-2">
  <h2 class="flex items-center">
    <!-- Logo will go here -->
    <a class="text-5xl" href="/">Story</a>
  </h2>
  
  <label for="search" class="w-4/6 bg-white p-2 rounded-lg border border-gray-500 hidden sm:flex">
    <button class="flex justify-center align-center mx-2">
      <img src={filterIcon} alt="Filter button" class="w-9 h-9">
      {#if $filterCount > 0}
        <p class="text-lg text-center text-gray-500  flex align-center">({$filterCount})</p>
      {/if}
    </button>

    <input type="text" id="search" placeholder="Search" class="w-full border border-gray-200 px-2 rounded">
    
    <button class="ml-2" on:click={() => {alert("Search works")}}>  <!-- TODO: Make this search -->
      <img src={searchIcon} alt="search button" class="w-9 h-9">
    </button>
  </label>

  <HamburgerMenu />
</nav>