<script>
  import { onMount } from 'svelte'
  import UserPost from '$lib/components/UserPost.svelte'
  import pageCache from '$lib/stores/pageCache'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  export let data

  const searchParams = $page.url.searchParams

  let currentPage
  // Cache the data for the current page
  /* onMount(() => {
    const currentCache = get(pageCache)
    console.log(currentCache)
    if (!currentCache[$page.url.pathname]) {
      pageCache.update(cache => {
        cache[$page.url.pathname] = form
        return cache
      })
    }
    // form = currentCache[$page.url.pathname]
  })

  $: if (form) {
    pageCache.update(cache => {
      cache[$page.url.pathname] = form
      return cache
    })
  }

  // Before the component is created, check if we have cached data
  let cachedData = form
  // console.log($pageCache)
  $: if ($pageCache[$page.url.pathname]) {
    cachedData = JSON.parse($pageCache[$page.url.pathname])
  } */

  function submitForm(event) {
    event.preventDefault()

    const formElement = document.getElementById('searchForm')
    const formData = new FormData(formElement)

    // Construct URLSearchParams object with input names and values
    const queryParams = new URLSearchParams()
    for (const [name, value] of formData) {
      if (!value) continue
      queryParams.set(name, value)
    }

    // Update the URL query parameters
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`
    goto(newUrl)
  }

  /* ---------------------------- Handle pagination --------------------------- */

  // Event handlers for the pagination buttons
  function previousPage(event) {
    if (currentPage.value > 1) {
      currentPage.value = currentPage.value - 1
      submitForm(event)
    }
  }

  function nextPage(event) {
    console.log(currentPage.value < data?.data.pageCount)
    if (currentPage.value < data?.data.pageCount) { 
      currentPage.value++
      submitForm(event)
    }
  }
</script>


<!-- ! TEST -->
<!-- {#if cachedData}
    <p>Cached data: {JSON.stringify(cachedData)}</p>
{:else}
    <p>Fresh data: {JSON.stringify(form)}</p>
{/if} -->

<h1 class="text-6xl my-8">Search Posts</h1>

{#if data?.success === false }
  <p class="mb-2 text-error">{data.message}</p>
{/if}

<form class="grid grid-flow-row grid-cols-4 bg-white p-2 border rounded-xl gap-3" id="searchForm" on:submit={event => { currentPage.value = 1; submitForm(event) }}>
  <label class="text-black flex items-center mr-2 col-span-1" for="title">
    Title:
  </label>
  <input type="text" id="title" name="title" value={data?.data.query.title || ''} placeholder="Concert at the park" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="description">
    Description:
  </label>
  <input type="text" id="description" name="description" value={data?.data.query.description || ''} placeholder="Today was the day that..." class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">
  
  <label class="text-black flex items-center mr-2 col-span-1" for="transcription">
    Transcription:
  </label>
  <input type="text" id="transcription" name="transcription" value={data?.data.query.transcription || ''} placeholder="we then went to the park..." class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="tags">
    Tags:
  </label>
  <input type="text" id="tags" name="tags" value={data?.data.query.tags || ''} placeholder="concert, music, party" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="startDate">
    Start Date:
  </label>
  <input type="date" id="startDate" name="startDate" value={data?.data.query.startDate || ''} class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <label class="text-black flex items-center mr-2 col-span-1" for="endDate">
    End Date:
  </label>
  <input type="date" id="endDate" name="endDate" value={data?.data.query.endDate || ''} class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3">

  <input type="hidden" name="page" bind:this={currentPage} value={data?.data.page || 1}>

  <button type="submit" class="w-1/3 col-span-4 mx-auto text-white p-2 bg-blue-600 rounded text-center">
    Search
  </button>
</form>

<!-- Post container -->
{#if data}
  <div class="flex justify-between text-3xl my-4 w-full">
    <span>Search Count: {data?.data.total}</span>
    
    <!-- TODO: Add limit buttons to change number of returned posts -->
    <!-- <div>
      <button on:click={}></button>
    </div> -->

    <div class="flex items-center">
      <button type="button" on:click={previousPage} class="text-black px-4 py-2 mx-1 bg-gray-200 rounded">Previous</button>
      <span>{currentPage?.value}/{data?.data.pageCount || 1}</span>
      <button type="button" on:click={nextPage} class="text-black px-4 py-2 mx-1 bg-gray-200 rounded">Next</button>
    </div>
  </div>
  <div class="grid grid-cols-4 grid-flow-row gap-6 mb-8">
    {#if data?.data.searchResults.length > 0}
      {#each data.data.searchResults as post}
        <UserPost postData={post}/>
      {/each}

      {:else}

      <div class="text-3xl my-4 w-full">No Results Found</div>
    {/if}
  </div>
{/if}