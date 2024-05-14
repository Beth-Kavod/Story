<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import UploadFileForm from '$lib/components/UploadFileForm.svelte'; // Assuming UploadFileForm is a Svelte component

  // Store to maintain form parameters
  const forms = writable([]);

  // Function to add more forms
  function addForm() {
    forms.update(existingForms => [...existingForms, { /* new form parameters */ }]);
  }
</script>

<!-- {#if form?.message}
  {console.log(form)}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if} -->

<form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="flex flex-col bg-white text-black gap-y-2">
  {#each $forms as form, index (index)}
    <UploadFileForm index={index} />
    <hr>
  {/each}
  <button type="submit">Submit</button>
</form>
<button on:click={addForm}>Add more files</button>
