<script>
  import logoutUser from '$lib/helpers/logoutUser';
  import searchIcon from '$lib/assets/icons/search.svg';
  import hamburgerIcon from '$lib/assets/icons/hamburger-menu.svg';
</script>

<nav class="flex justify-between w-11/12 mt-2">
  <h2 class="text-4xl">Story</h2>
  <label for="search" class="flex justify-center align-center w-4/6 bg-white p-2 rounded-lg">
    <input type="text" id="search" placeholder="Search" class="w-full">
    <button on:click={() => {console.log("Hello")}}>  <!-- Make this search -->
      <img src={searchIcon} alt="search button">
    </button>
  </label>
  <button class="flex flex-col">
    <img src={hamburgerIcon} alt="" class="w-9 h-9">
    <!-- Hamburger -->
    <!-- <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
    <a href="/auth/login">Login</a> -->
    <!-- <button on:click={logoutUser}>Logout</button> -->
  </button>
</nav>