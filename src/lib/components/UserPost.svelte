<script>
  // Replace with SVG when possible
  import DefaultUser from '$lib/assets/icons/DefaultUser.png'
  export let postData
</script>

<svelte:head>
  <title>Search Posts</title>
</svelte:head>

<div class="text-black border-4 bg-white border-primary rounded-xl min-w-min w-64 h-fit">
  <div class="w-full h-min border-b-2 p-2 border-black flex justify-between">
    <div class="w-min bg-gray-300 px-2 rounded text-lg flex items-center justify-center">{new Date(postData.date).toLocaleDateString()}</div>
    <details class="w-min list-none text-sm flex gap-1 align-middle">
      <summary id="tag-dropdown" class="flex">
        <li>Tags</li>
        <div>({postData.tags.length})</div>
      </summary>
      <div aria-labelledby="tag-dropdown" class="absolute origin-top-left bg-accent flex gap-1 p-2">
        {#each postData.tags as tag}
          <li class="rounded px-1 bg-gray-300">{tag}</li>
        {/each}
      </div>
    </details>
    <div>
      <a href="/view/profile/{postData.user}">
        <!-- Users don't have an avatar yet, replace when users do -->
        <img src={DefaultUser} alt="profile" class="w-8 h-8 rounded-full">
      </a>
    </div>
  </div>

  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <a href={`/view/post/${postData._id}`}>
      <p class="text-xl ml-2">{postData.title}</p>
    </a>
  </div>

  <!-- TODO: Im removing this for now -->
  <!-- {#if postData.description}
    <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
      <p class="text-sm ml-2">{postData.description}</p>
    </div>
  {/if} -->

  {#if postData.images}
  <details class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <summary class="text-2xl ml-2 flex justify-between">
      <li>Images</li>
      <div class="mr-2 text-gray-500">({postData.images.length})</div>
    </summary>
    <div class="ml-2 mt-0 w-56 h-min grid grid-cols-1 grid-flow-row gap-1">
      {#each postData.images as image}
        <fieldset class="w-full">
          <legend>{image.title}</legend>
          <img src={`/api/view/image/${image.filename}`} alt={image.title} class="h-32 w-auto border-2 border-black rounded">
        </fieldset>
        <br>
      {/each}
    </div>
  </details>
  {/if}

  {#if postData.videos}
  <details class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <summary class="text-2xl ml-2 flex justify-between">
      <li>Videos</li>
      <div class="mr-2 text-gray-500">({postData.videos.length})</div>
    </summary>
    <div class="ml-2 mt-0 w-56 h-min grid grid-cols-1 grid-flow-row gap-1">
      {#each postData.videos as video}
        <fieldset class="w-full">
          <legend>{video.title}</legend>
          <video controls class="h-32 w-auto border-2 border-black rounded">
            <track kind="captions">
            <source src={`/api/view/video/${video.filename}`} alt={video.title}>
          </video>
        </fieldset>
      {/each}
    </div>
  </details>
  {/if}

  {#if postData.audios}
  <details class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <summary class="text-2xl ml-2 flex justify-between">
      <li>Audios</li>
      <div class="mr-2 text-gray-500">({postData.audios.length})</div>
    </summary>
    <div class="ml-2 mt-0 w-56 h-min grid grid-cols-1 grid-flow-row gap-1">
      {#each postData.audios as audio}
        <fieldset class="w-full">
          <legend>{audio.title}</legend>
          <audio controls class="w-60 border-2 border-black rounded">
            <track kind="captions">
            <source src={`/api/view/audio/${audio.filename}`} alt={audio.title}>
          </audio>
        </fieldset>
        <br>
      {/each}
    </div>
  </details>
  {/if}

  {#if postData.journal}
    <details class="border-black flex flex-col min-h-fit w-full">
      <summary class="text-2xl ml-2 flex justify-between">
        <li>Journal</li>
        <div class="mr-2 text-gray-500">({postData.journal.length})</div>
      </summary>

      <table border=1 class="w-full border-t-2 border-black border-collapse">
        <thead>
          <tr>
            <th class="border border-slate-700 border-l-0">Time</th>
            <th class="border border-slate-700 border-r-0">Entry</th>
          </tr>
        </thead>
        <tbody>
          {#each postData.journal as note}
            <tr>
              <td class="text-center border border-slate-700 border-l-0 border-b-0">{note.time}</td>
              <td class="text-center break-inside-avoid-column border border-slate-700 border-r-0 border-b-0">{note.entry}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </details>
  {/if}
</div>