<script>
  // import 

  function printFormData(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("files", document.getElementById("files").files[0]);
    formData.append("date", document.getElementById("date").value);
    formData.append("title", document.getElementById("title").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("tags", selectedTags);
    
    console.log(formData);

    // Don't let the form submit
    if (formData.get("files") === "undefined") {
      console.log("Broke")
      return
    }

    // Call the upload API if the form is valid
  }


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

<form on:submit={(event) => {printFormData(event)}} class="flex flex-col bg-white text-black gap-y-2">
  <!-- TODO: Make the upload form look like the figma -->
  <label for="files">
    Upload:
    <input id="files" type="file">
  </label>
  <label for="date">
    Date:
    <input id="date" type="date">
  </label>
  <label for="title">
    Title:
    <input id="title" type="text">
  </label>
  <label for="description">
    Description:
    <input id="description" type="text">
  </label>
  <label for="tags">
    Tags:
    <input list="knownTags" id="tags" type="text" on:input={addTag}>
    <datalist id="knownTags">
      <option value="tag1">Tag 1</option>
      <option value="tag2">Tag 2</option>
    </datalist>
  </label>
  {#if selectedTags.length > 0}
    <div>
      Selected Tags:
      <ul>
        {#each selectedTags as tag}
          <li>
            {tag}
            <button class="text-red-500" on:click={() => removeTag(tag)}>Remove</button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <button type="submit">Submit</button>
</form>