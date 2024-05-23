<script>
  import hamburgerIcon from '$lib/assets/icons/hamburger-menu.svg';

  import { fly } from 'svelte/transition';
  import { writable } from "svelte/store";
  import { onMount } from 'svelte';

  let menuOpen = writable(false);

  function toggleMenu() {
    menuOpen.set(!$menuOpen)
  }

  /* ------------ Close the menu when the user clicks outside of it ----------- */

  function handleClick(event) {
    if (!event.target.closest('#menu-button') && $menuOpen) {
      toggleMenu()
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
</script>

<div class="relative inline-block text-left">
	<div>
		<button on:click={toggleMenu} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-30" id="menu-button" aria-expanded="true" aria-haspopup="true">
			<img src={hamburgerIcon} alt="menu icon" class="w-10 h-10">
		</button>
	</div>

	{#if $menuOpen}
    <div transition:fly="{{ y: -10, duration: 150 }}"  class="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="border-t border-gray-200 rounded" role="none">
        <div class="text-gray-800 block pl-4 pr-16 py-2 bg-gray-300 w-full rounded-t">Account</div>
        <a href="/" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="home">Home</a>
        <a href="/account/profile" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="profile">Profile</a>
        <a href="/account/my-files" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="myFiles">My Files</a>
        <!-- TODO: add in this page -->
        <!-- <a href="/account/my-posts" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="myFiles">My posts</a> -->
      </div>
      <div class="" role="none">
        <div class="text-gray-800 block pl-4 pr-8 py-2 bg-gray-300">View</div>
        <a href="/posts" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Posts</a>
        <!-- TODO: make these routes -->
        <!-- <a href="/view/images" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Images</a>
        <a href="/view/videos" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Videos</a>
        <a href="/view/audios" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Audios</a> -->
      </div>
      <div class="" role="none">
        <div class="text-gray-800 block pl-4 pr-8 py-2 bg-gray-300" role="menuitem">Upload</div>
        <a href="/upload/files" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Files</a>
        <a href="/upload/post" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Post</a>
        <a href="/upload/journal" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-4">Journal entry</a>
      </div>
      <div class="" role="none">
        <div class="text-gray-800 block pl-4 pr-8 py-2 bg-gray-300">Auth</div>
        <a href="/auth/login" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="login">Login</a>
        <a href="/auth/register" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="register">Register</a>
        <a href="/auth/logout"  class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:rounded-b rounded-b" role="menuitem" tabindex="-1" id="logout">Logout</a>
      </div>
    </div>
  {/if}
</div>