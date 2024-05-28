<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';
  import UserPost from '$lib/components/UserPost.svelte';
  import pageCache from '$lib/stores/pageCache'
  import { get } from 'svelte/store';
  import { page } from '$app/stores';
  export let form

  $: console.log($pageCache)
  // Cache the data for the current page
  onMount(() => {
    const currentCache = get(pageCache);
    if (!currentCache[$page.url.pathname]) {
      pageCache.update(cache => {
        cache[$page.url.pathname] = form;
        return cache;
      });
    }
  });

  $: if (form) {
    pageCache.update(cache => {
      cache[$page.url.pathname] = form;
      return cache;
    });
  }

  // Before the component is created, check if we have cached data
  let cachedData = form
  $: if ($pageCache[$page.url.pathname]) {
    cachedData = JSON.parse($pageCache[$page.url.pathname])
  }
</script>


<!-- ! TEST -->
{#if cachedData}
    <p>Cached data: {JSON.stringify(cachedData)}</p>
{:else}
    <p>Fresh data: {JSON.stringify(form)}</p>
{/if}


<h1 class="text-6xl my-8">Search Posts</h1>
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
    {#if cachedData}
      {#each cachedData.data.searchResults as post}
        <UserPost postData={post}/>
      {/each}
    {/if}
  </div>

  {:else}

  <div class="text-3xl my-4 w-full">No Results Found</div>
{/if}