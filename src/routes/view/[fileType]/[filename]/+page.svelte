<script>
  export let data;
  import MediaViewer from '$lib/components/MediaViewer.svelte';
</script>

<svelte:head>
  <title>Image Proxy</title>
</svelte:head>

<div class="h-full w-4/6 p-4 rounded bg-white border-gray-500 border-4">
  <MediaViewer filename={data.filename} fileType={data.fileType} />
</div>