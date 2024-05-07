<script>
  import logoutUser from '$lib/api/logoutUser';
  
  import searchIcon from '$lib/assets/icons/search.svg';
  import hamburgerIcon from '$lib/assets/icons/hamburger-menu.svg';
  import filterIcon from '$lib/assets/icons/filter.svg';
  import loading from '$lib/assets/icons/loading.svg';
  
  import { writable } from 'svelte/store';

  /* ----------------------------- Filtering logic ---------------------------- */

  // TODO: Add filtering logic
  function filter() {

  }

  let filterCount = writable(5);

  /* -------------------------- Navbar toggling logic ------------------------- */

  let navOpen = false;

</script>

<nav class="flex justify-between w-11/12 my-2">
  <h2 class="flex items-center">
    <!-- Logo will go here -->
    <a class="text-5xl" href="/">Story</a>
  </h2>
  
  <label for="search" class="flex w-4/6 bg-white p-2 rounded-lg border border-gray-500">
    <button class="flex justify-center align-center mr-2">
      <img src={filterIcon} alt="Filter button" class="w-9 h-9">
      {#if $filterCount > 0}
        <p class="text-lg text-center text-gray-500  flex align-center">({$filterCount})</p>
      {/if}
    </button>

    <input type="text" id="search" placeholder="Search" class="w-full border border-gray-200 px-2 rounded">
    
    <button on:click={() => {alert("Search works")}}>  <!-- TODO: Make this search -->
      <img src={searchIcon} alt="search button" class="w-9 h-9">
    </button>
  </label>
  
  <div class="relative">
    <button class="flex flex-col ml-2" on:click={() => navOpen = !navOpen}>
      <img src={hamburgerIcon} alt="" class="w-12 h-12">
      <!-- Hamburger -->
    </button>
  
    {#if navOpen}
      <div class="absolute w-full h-full bg-white z-10 text-black">
          <a href="/" class="my-2">Home</a>
          <a href="/about" class="my-2">About</a>
          <a href="/upload" class="my-2">Upload</a>
          <a href="/auth/login" class="my-2">Login</a>
          <a href="/auth/register" class="my-2">Register</a>
          <!-- You can add more menu items as needed -->
          <button on:click={logoutUser} class="my-2">Logout</button>
      </div>
    {/if}
  </div>
</nav>