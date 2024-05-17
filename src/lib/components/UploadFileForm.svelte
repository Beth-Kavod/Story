<script>
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

<label for="files{index}" class="mb-2"> Upload:
  <input class="text-sm text-gray-900 rounded cursor-pointer bg-gray-50 focus:outline-none"  id="file{index}" type="file" name="file{index}" required>
</label>
<label for="date{index}" class="mb-2">
  Date:
  <input id="date{index}" type="date" name="date{index}" required>
</label>
<label for="title{index}" class="mb-2">
  Title:
  <input id="title{index}" type="text" name="title{index}">
</label>
<label for="description{index}" class="mb-2">
  Description:
  <input id="description{index}" type="text" name="description{index}">
</label>
<label for="privacy{index}" class="mb-2">
  Privacy:
  <select id="privacy{index}" name="privacy{index}">
    <option value="Private">Private</option>
    <option value="Public">Public</option>
    <option value="Unlisted">Unlisted</option>
  </select>
</label>
<label for="tags{index}" class="mb-2">
  Tags:
  <input list="knownTags" id="tags{index}" type="text">
  <datalist id="knownTags">
    <!-- TODO: Add more tags -->
    <option value="tag1">Tag 1</option>
    <option value="tag2">Tag 2</option>
  </datalist>
  <button class="text-blue-500 bg-slate-500" on:click={event => { addTag(`tags${index}`); event.preventDefault() }}>Add</button>
</label>

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
