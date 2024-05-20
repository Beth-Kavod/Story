<script>
  import { enhance } from '$app/forms';
  import searchIcon from '$lib/assets/icons/searchWhite.svg';
  import UserPost from '$lib/components/UserPost.svelte';
  // import getCookie from '$lib/helpers/getClientCookies';
  export let form


  // TODO: Currently when you load the page no posts show up, you have to press the search button to get posts
  /* async function fetchInitialPosts() {
    const response = await fetch('/api/search/posts', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getCookie(document, "media_authentication")
      }
    })
    const data = await response.json()
    // form = data
  } */

  // fetchInitialPosts()
  // console.log(getCookie(document, "media_authentication"))
  // console.log(Document)
</script>

<h1 class="text-3xl mb-2">Search Posts</h1>
<!-- TODO: Add this back in when necessary -->
<!-- {#if form?.message !== undefined }
  <p>{form.message}</p>
{/if} -->
<form class="grid grid-flow-row grid-cols-4 bg-white p-2 border rounded-xl gap-3" method="POST" action="?/searchPosts" use:enhance>
  <label class="text-black flex items-center mr-2 col-span-1" for="title">
    Title:
  </label>
  <input type="text" id="title" name="title" value={form?.data.query.title || ''} placeholder="Concert at the park" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="description">
    Description:
  </label>
  <input type="text" id="description" name="description" value={form?.data.query.description || ''} placeholder="Today was the day that..." class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="tags">
    Tags:
  </label>
  <input type="text" id="tags" name="tags" value={form?.data.query.tags || ''} placeholder="concert, music, party" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="startDate">
    Start Date:
  </label>
  <input type="date" id="startDate" name="startDate" value={form?.data.query.startDate || ''} class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="endDate">
    End Date:
  </label>
  <input type="date" id="endDate" name="endDate" value={form?.data.query.endDate || ''} class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <button type="submit" class="w-1/3 col-span-4 mx-auto text-white p-2 bg-blue-600 rounded text-center">
    Search
    <!-- <img src={searchIcon} alt="search button" class="w-6 h-6"> -->
  </button>
</form>

<!-- <button on:click={console.log(form)}>log</button> -->


<!-- Post container -->
{#if form && form.data.searchResults}
  <div class="text-3xl my-4 w-full">Search Count: {form?.data.postCount}</div>
  <div class="grid grid-cols-4 grid-flow-row gap-6 mb-8">
    {#each form.data.searchResults as post}
      <UserPost postData={post}/>
    {/each}
  </div>

  {:else}

  <div class="text-3xl my-4 w-full">No Results Found</div>
{/if}