<script>
  import loginUser from '$lib/api/loginUser';  
</script>

<div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
  <h2 class="text-center text-black text-4xl font-semibold">Account login</h2>
  <form on:submit={(event) => {loginUser(event); console.log("Works")}} class="w-full max-w-sm mt-12">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Username
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="username" placeholder="Jane Doe">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" name="password" placeholder="**************">
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

Gargabe

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