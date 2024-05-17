<script>
  export let postData
</script>

<svelte:head>
  <title>Post</title>
</svelte:head>
<!-- TODO: Make these dropdown menus -->
<div class="text-black border-4 bg-white border-primary rounded-xl mt-4 w-min">
  <div class="w-full h-min border-b-2 p-2 border-black flex">
    <!-- TODO: Make this auto generated -->
    <div class="w-min bg-gray-300 px-2 rounded text-lg flex items-center">{new Date(postData.date).toLocaleDateString()}</div>
    <ul class="w-full list-none ml-2 text-sm flex w-full flex-wrap gap-1">
      <!-- TODO: Make this auto generated -->
      <li class="rounded px-1 bg-gray-300">hello</li>
      <li class="rounded px-1 bg-gray-300">hello</li>
      <li class="rounded px-1 bg-gray-300">hello</li>
      <li class="rounded px-1 bg-gray-300">hello</li>
    </ul>
  </div>
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">{postData.title}</p>
  </div>
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-sm ml-2">{postData.description}</p>
  </div>
  {#if postData.videos}
  <details class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <summary class="text-2xl ml-2">
      Videos
    </summary>
    <div class="m-2 mt-1 w-56 h-min grid grid-cols-2 grid-rows-2 gap-1">
        <!-- TODO: Make this auto generated -->
        <div class="h-16 border-2 border-black rounded">Video</div>
        <div class="h-16 border-2 border-black rounded">Video</div>
        <div class="h-16 border-2 border-black rounded">Video</div>
        <div class="h-16 border-2 border-black rounded">Video</div>
    </div>
  </details>
  {/if}

  {#if postData.images}
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">Images</p>
    <div class="m-2 mt-1 w-56 h-min grid grid-cols-2 grid-rows-2 gap-1">
      <!-- TODO: Make this auto generated -->
      <div class="h-16 border-2 border-black rounded">Image</div>
      <div class="h-16 border-2 border-black rounded">Image</div>
      <div class="h-16 border-2 border-black rounded">Image</div>
      <div class="h-16 border-2 border-black rounded">Image</div>
    </div>
  </div>
  {/if}

  {#if postData.audios}
  <div class="border-b-2 border-black flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">Audios</p>
    <div class="m-2 mt-1 w-56 h-min grid grid-cols-2 grid-rows-2 gap-1">
      <!-- TODO: Make this auto generated -->
      <div class="h-16 border-2 border-black rounded">Audio</div>
      <div class="h-16 border-2 border-black rounded">Audio</div>
      <div class="h-16 border-2 border-black rounded">Audio</div>
      <div class="h-16 border-2 border-black rounded">Audio</div>
    </div>
  </div>
  {/if}

  {#if postData.journals}
  <div class="flex flex-col min-h-fit w-full">
    <p class="text-2xl ml-2">Journal</p>
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