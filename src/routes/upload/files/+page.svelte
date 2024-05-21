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

<h1 class="text-6xl my-8">Upload files</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<div class="bg-white p-2 border rounded-xl gap-3">
  <form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="grid-cols-4 text-black gap-y-2 grid grid-flow-row">
    {#each $forms as form, index (index)}
      {#if index > 0}
        <div class="border-b-2 border-black col-span-4" />
      {/if}
      <UploadFileForm index={index} />
    {/each}
    <button class="text-black col-start-2 col-span-2 border-2 rounded hover:bg-slate-100" on:click={event => { event.preventDefault(); addForm() }}>Add more files +</button>
    <button type="submit" class="bg-blue-600 text-white rounded-sm col-start-2 col-span-2">Submit</button>
  </form>
</div>