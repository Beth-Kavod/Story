<script>
  import UploadFileForm from '$lib/components/UploadFileForm.svelte'; // Assuming UploadFileForm is a Svelte component
  export let form


  function formFunction() {

  }

  export let index;
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
</script>

<h1 class="text-6xl my-8">Upload files</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<!-- <div class="border-4 bg-secondary border-slate-500 rounded-xl mb-12 mt-12 p-6"> -->
<div class=" bg-white shadow rounded-xl w-full p-6">
  <form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="grid grid-cols-4 text-black gap-3">
    <!-- <label for="files{index}" class=" text-lg">
        Upload:
        <input class="text-sm text-gray-900 rounded cursor-pointer bg-gray-50 focus:outline-none"  id="file{index}" type="file" name="file{index}" required>
        <input class="text-sm text-gray-900 rounded cursor-pointer focus:outline-none"  id="file{index}" type="file" name="file{index}" required>
      </label>
      <!-- <label for="date{index}" class=" text-lg"> -->
      <!-- <label for="date{index}" class=" text-lg"> -->
        <!-- Date: -->
        <!-- <p class="w-1/4">Date:</p> -->
        <!-- <input id="date{index}" type="date" name="date{index}" class="p-1 border border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded" required> -->
        <!-- <input id="date{index}" type="date" name="date{index}" class="w-3/4 p-1" required> -->
      <!-- </label> -->
      <label for="title{index}" class="text-lg flex">
        Title:
      </label>
        <!-- <input id="title{index}" type="text" name="title{index}" class="p-1 border border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded"> -->
      <input id="title{index}" type="text" name="title{index}" class="p-1 border-b-2 border-gray-300 col-span-3">

      <label for="description{index}" class="text-lg">
        Description:
      </label>

      <input id="description{index}" type="text" name="description{index}" class="p-1 border-b-2 col-span-3 border-gray-300">

      <label for="privacy{index}" class=" text-lg">
        Privacy:
      </label>
      
        <select id="privacy{index}" name="privacy{index}" class="col-span-3 p-1">
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Unlisted">Unlisted</option>
        </select>

      <label for="tags{index}" class=" text-lg">
        Add Tags:
      </label>
      <div class="col-span-3">
        <input list="knownTags" id="tags{index}" type="text" class="mx-1 p-1 border-b-2 border-gray-300">
        <datalist id="knownTags">
          <!-- TODO: Add more tags -->
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
        </datalist>
        <button class="text-primary font-semibold bg-white p-1 text-2xl" on:click={event => { addTag(`tags${index}`); event.preventDefault() }}>+</button>
      </div>
      <label for="files{index}" class=" text-lg">
        Upload:
      </label>
        <!-- <input class="text-sm text-gray-900 rounded cursor-pointer bg-gray-50 focus:outline-none"  id="file{index}" type="file" name="file{index}" required> -->
        <input class="col-span-3 text-sm text-gray-900 rounded cursor-pointer focus:outline-none"  id="file{index}" type="file" name="file{index}" required>
      <!-- <label for="date{index}" class=" text-lg"> -->
      <label for="date{index}" class=" text-lg">
        <!-- Date: -->
        <p class="w-1/4">Date:</p>
      </label>
        <!-- <input id="date{index}" type="date" name="date{index}" class="p-1 border border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded" required> -->
        <input id="date{index}" type="date" name="date{index}" class="w-fit p-1 col-span-3" required>
      
      <!-- Hidden input field to store the selectedTags array in FormData for request -->
      <input type="hidden" name="tags{index}" bind:value={selectedTags}>
      
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
  <button class="text-white mt-5" on:click={formFunction}>Add more files +</button>