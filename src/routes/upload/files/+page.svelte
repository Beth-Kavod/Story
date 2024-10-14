<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import UploadFileForm from '$lib/components/UploadFileForm.svelte'; // Assuming UploadFileForm is a Svelte component
  import forms from '$lib/stores/fileForms'

  export let form

  // 6/5/24 
  // Wow... ive never felt dumb in my life then when I was making this function.
  // I over thought it so insanely hard I don't even know what to say...
  // This is it.. this was ALL I NEEDED! just to find the first element that was null!
  // Why did this take me like 45 minutes! i was trying to set variables like "prevHighest" and "nextIndex"
  // to store the previous value? why? I didn't need to! i just needed to check if the current value (the lowest) was null!
  // Im going crazy guys... don't code at high altitude. Airplanes make me crazy!

  // Function to add more forms. (limit 10 forms)
  // TODO: This works but doesn't update the frontend in real time
  function addForm() {
    let addedForm = false
    for (const [key, value] of $forms.entries()) {
      if (value === null) {
        forms.update(form => {
          form.set(key, true)
          return form
        })

        addedForm = true
        break
      }
    }

    if (!addedForm) console.log("you may only upload 10 files at a time")
  }

  onMount(() => addForm())

  // If file uploading fails then separate the returned data into new forms with the files that failed
  function separateReturnedForms(form) {
    // console.log(form)
    const result = [];

    for (let i = 0; i < 10; i++) {
      const { formData, failedUploads } = form

      let included = false
      failedUploads.map(file => {
        if (formData[`file${i}`] === file.name) included = true
      })

      if (!included) continue

      const item = {
        date: formData[`date${i}`],
        title: formData[`title${i}`],
        description: formData[`description${i}`],
        tags: formData[`tags${i}`],
        privacy: formData[`privacy${i}`],
        file: formData[`file${i}`],
      };

      result.push(item);
    }

    return result;
  }

  // If uploading a file fails then make an array of failed files
  let returnedForms = []
  if (form?.success === false) returnedForms = separateReturnedForms(form) 
</script>

<h1 class="text-6xl my-8">Upload files</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

<div class="bg-white p-2 border rounded-xl gap-3">
  <form method="POST" action="?/uploadFiles" enctype="multipart/form-data"  class="grid-cols-4 text-black gap-y-2 grid grid-flow-row">
    {#each $forms as form, index (index)}
      {#if form[1] !== null}
        <UploadFileForm index={index} oldForm={returnedForms[index]}/>
        <div class="border-b-2 border-black col-span-4" />
      {/if}
    {/each}
    <button class="text-black col-span-2 mr-2 border-2 rounded hover:bg-slate-100" on:click={(event) => {event.preventDefault(); addForm()}}>Add more files +</button>
    <button type="submit" class="bg-blue-600 text-white rounded-sm ml-2 col-span-2">Submit</button>
  </form>
</div>