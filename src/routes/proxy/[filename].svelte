<script>
  export let data;
</script>

<svelte:head>
  <title>Image Proxy</title>
</svelte:head>

<img src={`http://original-source.com/${data.filename}`} alt={data.filename} />
