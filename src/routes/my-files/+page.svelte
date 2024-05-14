<script>
  export let data

  import MediaViewer from "$lib/components/MediaViewer.svelte";
</script>

<div class="w-screen">
    <div class="mx-auto w-10/12">
        <h2 class="mt-8 text-5xl">Images</h2>
        <hr class="h-px mb-8 mt-4 bg-gray-200 border-1">
        <div class="container mb-6 flex flex-row">
            {#each data.images as image}
                <div class="w-12">
                    <MediaViewer filename={image.filename} title={image.title} fileType="image"/>
                </div>
            {/each}
        </div>

        <h2 class="text-5xl">Videos</h2>
        <hr class="h-px mb-8 mt-4 bg-gray-200 border-1">
        <div class="container mb-6 flex flex-row">
            #VIDHOLDER
        </div>

        <h2 class="text-5xl">Audios</h2>
        <hr class="h-px mb-8 mt-4 bg-gray-200 border-1">
        <div class="container mb-6 flex flex-row">
            #AUDIOHOLDER
        </div>
    </div>
</div>