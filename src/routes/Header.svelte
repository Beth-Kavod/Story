<script>
  import logoutUser from '$lib/helpers/logoutUser';
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/auth/login">Login</a>
  <button on:click={logoutUser}>Logout</button>
</nav>