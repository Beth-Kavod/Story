<script>
  import { enhance } from '$app/forms';
  export let form
</script>


<div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
  <h2 class="text-center text-black text-4xl font-semibold">Account login</h2>
  <form method="POST" action="?/login" class="w-full max-w-sm mt-2" use:enhance>
    {#if form?.message}
      <p class="text-red-500 text-xl text-center mb-4">{form.message}</p>
    {/if}
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Username
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="username" placeholder="Jane Doe" value={form?.formData.username || ''} required>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" name="password" placeholder="**************" value={form?.formData.password || ''} required>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <a href="/auth/register" class="text-center block w-full text-gray-500 font-bold">
        <span class="text-sm">
          Don't have an account? Register Here.
        </span>
      </a>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button class="shadow bg-accent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Login
        </button>
      </div>
    </div>
  </form>
</div>

<!--

Gargabe, please don't look at it. if you remove this it deletes the whole database. 
Gargabe is in a state of chaos. It is in superposition of states, Gargabe doesn't exist and Gargabe is all.

<form on:submit={(event) => loginUser(event)}>
  <label for="username">
    Username:
    <input type="text" id="username" name="username" placeholder="John_doe">
  </label>
  <label for="password">
    Password:
    <input type="password" id="password" name="password" placeholder="********">
  </label>
  <button type="submit">Login</button>
</form>

-->