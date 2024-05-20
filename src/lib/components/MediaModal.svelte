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

  // Allow filtering of media in the modal
  function filterMedia(event) {
    const filter = event.target.value;
    filteredMedia = $selectableMedia[$mediaType].filter(option => new RegExp(filter, 'i').test(option.title.toLowerCase()))
  }

    
  $: mediaType.subscribe(() => {
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
        Search: 
        <input type="text" name="filter" value="" on:input={event => filterMedia(event)} class="bg-white border-gray-300 border-b-2 col-span-3" />
        <div class="max-h-40 h-64 overflow-y-scroll">
          {#each filteredMedia as option}
          <div class="mb-2">
            <label class="w-full inline-flex justify-between">
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox"
                  checked={$selectedMedia[$mediaType].includes(option._id)}
                  on:change={() => toggleOption(option._id)}
                />
                <span class="ml-2">{option.title}</span>
              </div>
              <span class="ml-2">{new Date(option.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </label>
          </div>
          {/each}
        </div>
      </form>
      
      <div class="mt-4 flex justify-end">
        <button class="bg-gray-500 text-white px-4 py-2 rounded mr-2" on:click={closeModal}>Cancel</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={closeModal}>Save</button>
      </div>
    </div>
  </div>
{/if}
