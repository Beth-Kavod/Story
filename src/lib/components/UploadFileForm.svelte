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

<label for="files{index}" class="mb-2 flex justify-between items-center text-lg">
  Upload:
  <input class="text-sm text-gray-900 rounded cursor-pointer bg-gray-50 focus:outline-none"  id="file{index}" type="file" name="file{index}" required>
</label>
<label for="date{index}" class="mb-2 flex justify-between items-center text-lg">
  Date:
  <input id="date{index}" type="date" name="date{index}" class="p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded" required>
</label>
<label for="title{index}" class="mb-2 flex justify-between items-center text-lg">
  Title:
  <input id="title{index}" type="text" name="title{index}" class="p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded">
</label>
<label for="description{index}" class="mb-2 flex justify-between items-center text-lg">
  Description:
  <input id="description{index}" type="text" name="description{index}" class="p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded">
</label>
<label for="privacy{index}" class="mb-2 flex justify-between items-center text-lg">
  Privacy:
  <select id="privacy{index}" name="privacy{index}" class="p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded">
    <option value="Private">Private</option>
    <option value="Public">Public</option>
    <option value="Unlisted">Unlisted</option>
  </select>
</label>
<label for="tags{index}" class="mb-2 flex justify-between items-center text-lg">
  Add Tags:
  <input list="knownTags" id="tags{index}" type="text" class="mx-1 p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded">
  <datalist id="knownTags">
    <!-- TODO: Add more tags -->
    <option value="tag1">Tag 1</option>
    <option value="tag2">Tag 2</option>
  </datalist>
  <button class="text-primary font-semibold bg-white p-1 border-4 border-slate-500 border-l-slate-700 border-t-slate-700 rounded" on:click={event => { addTag(`tags${index}`); event.preventDefault() }}>Add</button>
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
