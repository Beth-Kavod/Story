<script>
  import LoadingSpinner from "$lib/assets/icons/loading.svg";
  import { userStore } from "$lib/stores/userStore";
  import { redirect } from '@sveltejs/kit'
  import { onMount } from 'svelte';

  // This is a bootleg solution. don't do this
  // This is the only way I could get it to set local storage. 
  // When you log in it redirects you to this page with query params, then sets those in local storage.
  // This is unsafe.  Which is funny.
  function setUserData() {
    const urlParams = new URLSearchParams(window.location.search);

    const login = urlParams.get("login")

    if (login === "true") { 
      const userData = {
        username: urlParams.get("username"),
        userId: urlParams.get("userId")
      }
      
      if (!userData.username || !userData.userId) {
        window.location.replace(`/auth/login`)
      }
      
      window.localStorage.setItem("userStore", JSON.stringify(userData))
    }

    const user = JSON.parse(window.localStorage.getItem("userStore")) || null

    if (!user) {
      window.location.replace(`/auth/login`)
      return
    }

    window.location.replace(`/profile/${user.userId}`)
  }

  onMount(setUserData)
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <img src={LoadingSpinner} alt="" class="w-96 h-96">
</div>