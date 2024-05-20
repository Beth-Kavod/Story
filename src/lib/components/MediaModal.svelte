<script>
  import { showModal, selectedMedia, mediaType, selectableMedia } from '$lib/stores/mediaModal';
  import { onMount, onDestroy } from 'svelte';
  import { get } from 'svelte/store';

  let isVisible;

  // Subscribe to store values
  $: showModal.subscribe(value => {
    isVisible = value;
  });

  let filteredMedia = [];

  // Function to handle closing the modal
  function closeModal() {
    showModal.set(false);
  }

  // Function to handle checkbox change
  function toggleOption(option) {
    const currentOptions = get(selectedMedia);
    const mediaTypeSelection = get(mediaType)
    const mediaTypeOptions = currentOptions[mediaTypeSelection];

    if (mediaTypeOptions.includes(option._id)) {
        currentOptions[mediaTypeSelection] = currentOptions[mediaTypeSelection].filter(opt => opt !== option);
    } else {
        currentOptions[mediaTypeSelection] = [...currentOptions[mediaTypeSelection], option];
    }

    selectedMedia.set(currentOptions);
    console.log($selectedMedia)
  }

  function filterMedia(event) {
    const filter = event.target.value;
    filteredMedia = $selectableMedia[$mediaType].filter(option => new RegExp(filter, 'i').test(option.title.toLowerCase()))
  }

  onMount(() => {
    const mediaSelect = get(selectableMedia);
    const filterMediaType = get(mediaType);
    
    filteredMedia = mediaSelect[filterMediaType];
  })
</script>

{#if isVisible}
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Select {get(mediaType)}</h2>
      
      <form>
        <input type="text" name="filter" value="" on:input={event => filterMedia(event)} class="bg-gray-300" />
        {#each filteredMedia as option}
          <div class="mb-2">
            <label class="inline-flex items-center">
              <input 
                type="checkbox" 
                class="form-checkbox"
                checked={$selectedMedia[$mediaType].includes(option._id)}
                on:change={() => toggleOption(option._id)} 
              />
              <span class="ml-2">{option.title}</span>
            </label>
          </div>
        {/each}
      </form>
      
      <div class="mt-4 flex justify-end">
        <button class="bg-gray-500 text-white px-4 py-2 rounded mr-2" on:click={closeModal}>Cancel</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={closeModal}>Save</button>
      </div>
    </div>
  </div>
{/if}
