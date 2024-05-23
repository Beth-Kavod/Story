<script>
  import { enhance } from '$app/forms';
  export let data
  export let form
</script>

<h1 class="text-6xl my-8">Update journal</h1>

{#if form?.message}
  <p class={`text-xl text-center mb-4 ${form.success ? 'text-primary' : 'text-error'}`}>{form.message}</p>
{/if}

{#if !data?.success}
  <p class={`text-xl text-center mb-4 ${data.success ? 'text-primary' : 'text-error'}`}>{data.message}</p>
  <a href="/upload/post" class="bg-blue-600 text-white rounded-md p-2 w-1/3 mx-auto text-center">Make post</a>
  
{:else}
<div class="bg-white shadow rounded-xl w-full p-6">
  <form action="?/uploadJournal" method="POST" use:enhance enctype="multipart/form-data" class="grid grid-flow-row grid-cols-4">
    <h1 class="text-3xl col-span-4 text-black mx-auto my-4">Todays date: {new Date().toLocaleDateString()}</h1>
    <label for="entry" class="text-lg col-span-1 text-black">Entry:</label>
    <input type="text" id="entry" name="entry" class="mx-1 p-1 border-b-2 border-gray-300 col-span-3 mb-4 text-black" value={form?.entry || ''}>
    <input type="hidden" name="postId" bind:value={data.postId}>
    <button type="submit" class="bg-blue-600 text-white rounded-md p-2 w-1/3 col-span-4 mx-auto">Submit</button>
  </form>

  <!-- show old entries -->
  <table class="text-black w-full">
    <thead class="border-b-2">
      <th>Time</th>
      <th>Entry</th>
    </thead>
    <tbody>  
      {#if data?.oldEntries.length > 0}
        {#each data?.oldEntries as entry}
          <tr class="border-b-2">
            <td class="border-r-2 text-center">{entry.time}</td>
            <td class="text-center">{entry.entry}</td>
          </tr>
        {/each}
      {:else}
        <tr>
          <td class="text-center">No entries found</td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
{/if}
