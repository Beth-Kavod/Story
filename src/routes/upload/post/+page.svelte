<script>
  import { showModal, selectedMedia, mediaType, selectableMedia } from '$lib/stores/mediaModal';
  import { onMount } from 'svelte';
  import getCookie from '$lib/helpers/getClientCookies';
  import MediaModal from '$lib/components/MediaModal.svelte';

  export let form

  /* ---------------------------- Tag functionality --------------------------- */

  let selectedTags = [];

  function addTag(tagsId) {
    const tagElement = document.getElementById(tagsId)
    const tagInput = tagElement.value
    if (tagInput && !selectedTags.includes(tagInput)) {
      selectedTags = [...selectedTags, tagInput];
      tagElement.value = ''; // Clear the input field
    }
  }

  function removeTag(tag) {
    selectedTags = selectedTags.filter(t => t !== tag);
  }

  /* -------------------------------- Add media ------------------------------- */

  async function getFileOptions() {
    const fileRequest = await fetch('/api/user/media-titles', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getCookie(document, "media_authentication")
      }
    }) 

    const response = await fileRequest.json()

    return response.data
  }

  onMount(async () => {
    $selectableMedia = await getFileOptions()
  })
</script>

<h1 class="text-6xl my-8">Upload post</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<div class=" bg-white shadow rounded-xl w-full p-6">
  <form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="grid grid-cols-4 text-black gap-3">
    <label for="title" class="text-lg flex">
      Title:
    </label>
    <input id="title" type="text" name="title" class="p-1 border-b-2 border-gray-300 col-span-3">

    <label for="description" class="text-lg">
      Description:
    </label>

    <input id="description" type="text" name="description" class="p-1 border-b-2 col-span-3 border-gray-300">

    <p class="text-lg col-span-1 text-start">Add Media:</p>
    <button class="col-span-1 text-lg" on:click={event => { event.preventDefault(); showModal.set(true); mediaType.set('images') }}>Images ({$selectedMedia.images.length})</button>  
    <button class="col-span-1 text-lg" on:click={event => { event.preventDefault(); showModal.set(true); mediaType.set('videos') }}>Videos ({$selectedMedia.videos.length})</button>  
    <button class="col-span-1 text-lg" on:click={event => { event.preventDefault(); showModal.set(true); mediaType.set('audios') }}>Audios ({$selectedMedia.audios.length})</button>  
    <MediaModal showModal mediaType selectedMedia={[]}/>

    <label for="privacy" class=" text-lg">
      Privacy:
    </label>
    
      <select id="privacy" name="privacy" class="col-span-3 p-1">
        <option value="Private">Private</option>
        <option value="Public">Public</option>
        <option value="Unlisted">Unlisted</option>
      </select>

    <label for="tags" class=" text-lg">
      Add Tags:
    </label>
    <div class="col-span-3">
      <input list="knownTags" id="tags" type="text" class="mx-1 p-1 border-b-2 border-gray-300">
      <datalist id="knownTags">
        <!-- TODO: Add more tags -->
        <option value="tag1">Tag 1</option>
        <option value="tag2">Tag 2</option>
      </datalist>
      <button class="text-primary font-semibold bg-white p-1 text-2xl" on:click={event => { addTag(`tags$`); event.preventDefault() }}>+</button>
    </div>

    <label for="date" class=" text-lg">
      <p class="w-1/4">Date:</p>
    </label>
      <input id="date" type="date" name="date" class="w-fit p-1 col-span-3 mb-4" required>
    
    <!-- Hidden input fields to store the arrays in FormData for request -->
    <input type="hidden" name="tags" bind:value={selectedTags}>
    <input type="hidden" name="images" bind:value={$selectedMedia.images}>
    <input type="hidden" name="videos" bind:value={$selectedMedia.videos}>
    <input type="hidden" name="audios" bind:value={$selectedMedia.audios}>
    
    {#if selectedTags.length > 0}
      <div>
        Selected Tags:
        <ul>
          {#each selectedTags as tag}
            <li>
              {tag}
              <button class="text-red-500" on:click={event => { removeTag(tag); event.preventDefault() }}>Remove</button>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    <button type="submit" class="bg-blue-600 text-white rounded-md p-2 w-1/3 col-span-4 mx-auto">Submit</button>
  </form>
</div>