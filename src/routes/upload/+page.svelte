<script>
  import { enhance } from '$app/forms';
  export let form

  /* ---------------------------- Tag functionality --------------------------- */

  let selectedTags = [];

  function addTag(event) {
    const tag = event.target.value;
    if (tag && !selectedTags.includes(tag)) {
      selectedTags = [...selectedTags, tag];
      event.target.value = ''; // Clear the input field
    }
  }

  function removeTag(tag) {
    selectedTags = selectedTags.filter(t => t !== tag);
  }
</script>

<h1>Upload page</h1>
{#if form?.message}
  {console.log(form)}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<form method="POST" action="?/uploadFiles" enctype="multipart/form-data" use:enhance  class="flex flex-col bg-white text-black gap-y-2">
  <!-- TODO: Make the upload form look like the figma -->
  <label for="files">
    Upload:
    <input id="files" type="file" name="files">
  </label>
  <label for="date">
    Date:
    <input id="date" type="date" name="date">
  </label>
  <label for="title">
    Title:
    <input id="title" type="text" name="title">
  </label>
  <label for="description">
    Description:
    <input id="description" type="text" name="description">
  </label>
  <label for="tags">
    Tags:
    <input list="knownTags" id="tags" type="text" on:input={addTag}>
    <datalist id="knownTags">
      <option value="tag1">Tag 1</option>
      <option value="tag2">Tag 2</option>
    </datalist>
  </label>

  <!-- Hidden input field to store the selectedTags array in FormData for request -->
  <input type="hidden" name="tags" bind:value={selectedTags}>

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
  <button type="submit">Submit</button>
</form>