<script>
  import tagList from '$lib/assets/JSON/tagList.json'
  import forms from '$lib/stores/fileForms.js'

  export let index;
  export let oldForm

  /* ------------------------------- Remove form ------------------------------ */

  function removeForm() {
    forms.update(form => {
      form.set(index, null)
      return form
    })
    console.log($forms)
  }

  /* ---------------------------- Tag functionality --------------------------- */
  
  let selectedTags = oldForm?.tags?.split(",") || [];

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

  /* ------------------------ Disable transcription box ----------------------- */

  function disableTranscription(event) {
    const fileInput = event.target;
    const transcribeCheckbox = document.getElementById(`transcribe${index}`);
    
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const validTypes = ['audio/', 'video/'];
      const fileType = file.type;

      if (validTypes.some(type => fileType.startsWith(type))) {
        transcribeCheckbox.disabled = false;
      } else {
        transcribeCheckbox.disabled = true;
      }
    } else {
      transcribeCheckbox.disabled = true;
    }
  }
</script>

<div class="grid grid-flow-row grid-cols-4 col-span-4 gap-y-2">
  <label for="files{index}" class="text-black flex items-center mr-2 col-span-1">
    Upload:
  </label>
  <input class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3"  id="file{index}" type="file" name="file{index}" on:change={disableTranscription} required>
  
  <label for="date{index}" class="text-black flex items-center mr-2 col-span-1">
    Date:
  </label>
  <input id="date{index}" type="date" name="date{index}" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3" value={oldForm?.date || ''} required>
  
  <label for="title{index}" class="text-black flex items-center mr-2 col-span-1">
    Title:
  </label>
  <input id="title{index}" type="text" name="title{index}" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3" value={oldForm?.title || ''}>
  
  <label for="description{index}" class="text-black flex items-center mr-2 col-span-1">
    Description:
  </label>
  <input id="description{index}" type="text" name="description{index}" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3" value={oldForm?.description || ''}>
  
  
  <label for="tags{index}" class="text-black flex items-center mr-2 col-span-1">
    Add Tags:
  </label>
  <div class="col-span-3 grid grid-rows-1 grid-cols-10">
    <input list="knownTags" id="tags{index}" type="text" class="col-span-9 mx-1 p-1 border-b-2 border-gray-300 text-black">
    <datalist id="knownTags">
      {#each tagList as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </datalist>
    <button class="col-span-1 place-self-end items-center flex w-min h-8 text-primary font-semibold bg-white p-1 text-3xl" on:click|preventDefault={() => addTag(`tags${index}`)}>+</button>
  </div>
  
  <!-- Hidden input field to store the selectedTags array in FormData for request -->
  <input type="hidden" name="tags{index}" bind:value={selectedTags}>
  
  <label for="privacy{index}" class="text-black flex items-center mr-2 col-span-1">
    Privacy:
  </label>
  <select id="privacy{index}" name="privacy{index}" class="mx-1 p-1 border-b-2 border-gray-300 text-black col-span-3" value={oldForm?.privacy || 'Private'}>
    <option value="Private">Private</option>
    <option value="Public">Public</option>
    <option value="Unlisted">Unlisted</option>
  </select>

  <label for="options" class="text-black flex items-center mr-2 col-span-1">
    Options:
  </label>
  <div class="col-span-3">
    Transcribe:
    <input type="checkbox" id="transcribe{index}" name="transcribe{index}" disabled  class="mx-1 p-1 border-b-2 border-gray-300 text-black">
    (not implemented yet)
  </div>
  
  {#if selectedTags.length > 0}
    <div class="col-span-4">
      Selected Tags:
      <ul>
        {#each selectedTags as tag}
          <li>
            {tag}
            <button class="text-red-500" on:click|preventDefault={() => removeTag(tag)}>Remove</button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <button class="text-error col-span-4" on:click|preventDefault={() => removeForm()}>Remove file</button>

</div>
