<script>
  import { enhance } from '$app/forms';
  export let form
</script>

<div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
  <h2 class="text-center text-black text-4xl font-semibold">Account register</h2>
  <form method="POST" action="?/register" class="w-full max-w-sm mt-2" use:enhance>
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
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
          Email
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" name="email" placeholder="emample@gmail.com" value={form?.formData.email || ''} required>
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
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-confirm-password">
          Confirm Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-confirm-password" type="password" name="confirm_password" placeholder="**************" value={form?.formData.confirm_password || ''} required>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <a href="/auth/login" class="text-center block w-full text-gray-500 font-bold">
        <span class="text-sm">
          Already have an account? Login Here.
        </span>
      </a>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button class="shadow bg-accent hover:bg-accent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Register
        </button>
      </div>
    </div>
  </form>
</div>