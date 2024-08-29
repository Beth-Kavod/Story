<script>
  import { onMount } from 'svelte';
  import MediaViewer from './MediaViewer.svelte';

  export let data

  console.log(data)
</script>


<div class="w-11/12 min-h-96 max-h-96 bg-opacity-50 absolute top-0 flex items-center justify-between p-8 bg-white rounded">
  <MediaViewer filename={data.filename} fileType={data.fileType} />
  <div>
    hello
  </div>
</div>