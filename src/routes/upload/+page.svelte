<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import UploadFileForm from '$lib/components/UploadFileForm.svelte'; // Assuming UploadFileForm is a Svelte component

  export let form

  // Store to maintain form parameters
  const forms = writable([]);

  // Function to add more forms
  function addForm() {
    forms.update(existingForms => [...existingForms, { /* new form parameters */ }]);
  }

  addForm()
</script>

<h1 class="text-6xl mt-8">Upload files</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
  <form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="flex flex-col text-black gap-y-2">
    {#each $forms as form, index (index)}
      <UploadFileForm index={index} />
      <hr>
    {/each}
    <button type="submit" class="bg-blue-600 text-white rounded-sm">Submit</button>
  </form>
  <button class="text-black" on:click={addForm}>Add more files +</button>
</div>