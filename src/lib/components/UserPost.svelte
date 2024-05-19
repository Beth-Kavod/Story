<script>
  export let postData
</script>

<svelte:head>
  <title>Search Posts</title>
</svelte:head>

<div class="text-black border-4 bg-white border-primary rounded-xl mt-4 min-w-min w-64 h-fit">
  <div class="w-full h-min border-b-2 p-2 border-black flex justify-between">
    <div class="w-min bg-gray-300 px-2 rounded text-lg flex items-center">{new Date(postData.date).toLocaleDateString()}</div>
    <details class="w-min list-none mr-2 text-sm flex flex-wrap gap-1 justify-center">
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
  </div>
  
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">{postData.title}</p>
  </div>
  
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-sm ml-2">{postData.description}</p>
  </div>

  {#if postData.images}
  <details class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <summary class="text-2xl ml-2 flex justify-between">
      <li>Images</li>
      <div class="mr-2 text-gray-500">({postData.images.length})</div>
    </summary>
    <div class="ml-2 mt-1 w-60 h-min grid grid-cols-1 grid-flow-row gap-1">
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
    <div class="m-2 mt-1 w-56 h-min grid grid-cols-1 grid-flow-row gap-1">
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
    <div class="ml-1 mt-1 w-60 h-min grid grid-cols-1 grid-flow-row gap-1">
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

  {#if postData.journals}
  <div class="flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">Journal</p>
      <!-- TODO: Make this auto generated -->
    <table border="1" class="mx-2 mb-2 border-2 border-black">
      <thead>
        <th>Time</th>
        <th>Entry</th>
      </thead>
      <tbody>
        <tr>
          <td>06:38</td>
          <td>hello</td>
        </tr>
      </tbody>
    </table>  
  </div>
  {/if}
</div>