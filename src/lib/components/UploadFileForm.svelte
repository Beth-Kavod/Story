<script>
  export let index;
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

<label for="files{index}" class="mb-2">
  Upload:
  <input class="text-sm text-gray-900 rounded cursor-pointer bg-gray-50 focus:outline-none"  id="files{index}" type="file" name={"files" + index}>
</label>
<label for="date{index}" class="mb-2">
  Date:
  <input id="date{index}" type="date" name={"date" + index}>
</label>
<label for="title{index}" class="mb-2">
  Title:
  <input id="title{index}" type="text" name={"title" + index}>
</label>
<label for="description{index}" class="mb-2">
  Description:
  <input id="description{index}" type="text" name={"description" + index}>
</label>
<label for="tags{index}" class="mb-2">
  Tags:
  <input list="knownTags" id="tags{index}" type="text" on:input={addTag} name={"tags" + index}>
  <datalist id="knownTags">
    <!-- TODO: Add more tags -->
    <option value="tag1">Tag 1</option>
    <option value="tag2">Tag 2</option>
  </datalist>
</label>

<!-- Hidden input field to store the selectedTags array in FormData for request -->
<input type="hidden" name={"tags" + index} bind:value={selectedTags}>

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
