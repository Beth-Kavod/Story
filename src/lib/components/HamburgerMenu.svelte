<script>
  import hamburgerIcon from '$lib/assets/icons/hamburger-menu.svg';

  import { fly } from 'svelte/transition';
  import { userStore } from "$lib/stores/userStore";
  import { writable } from "svelte/store";

  let menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.set(!$menuOpen)
  }

  function logout() {
    localStorage.removeItem('userStore')
    userStore.set({ username: "", userId: "" })
  }
</script>

<div class="relative inline-block text-left">
	<div>
		<button on:click={toggleMenu} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
			<img src={hamburgerIcon} alt="menu icon" class="w-10 h-10">
		</button>
	</div>

	{#if $menuOpen}
    <div transition:fly="{{ y: -10, duration: 150 }}"  class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <a href="/" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="home">Home</a>
        <a href="/profile" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="profile">Profile</a>
      </div>
      <div class="py-1" role="none">
        <a href="/posts" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Posts</a>
      </div>
      <div class="py-1" role="none">
        <a href="/upload" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Upload</a>
      </div>
      <div class="py-1 group" role="none">
        <a href="/auth/login" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="login">Login</a>
        <a href="/auth/register" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="register">Register</a>
        <a href="/auth/logout" on:click={logout}  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="logout">Logout</a>
      </div>
  </div>
{/if}

</div>