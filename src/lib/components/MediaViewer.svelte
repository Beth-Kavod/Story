<script>
  export let filename
  export let fileType
  export let title
  export let classes = ""

  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import loading from '$lib/assets/icons/loading.svg'

  // Initialize a writable store to hold the image URL
  const mediaUrl = writable(null)

  // Fetch the image data and set the image URL when the component mounts
  onMount(async () => {
    try {
      const response = await fetch(`/api/view/${fileType}/${filename}`, { credentials: 'include' })
      
      if (!response.ok) {
        throw new Error('Failed to fetch image')
      }

      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)

      mediaUrl.set(objectUrl)
    } catch (error) {
      console.error('Error fetching image:', error)
    }
  })
</script>

<!-- This is the one thing I really dislike about Svelte... Its a mess -->
{#if $mediaUrl}
  {#if fileType === "image"}
    <img class={classes} src={$mediaUrl} alt={title || filename} />
  {:else if fileType === "video"}
    <video controls>
      <source class={classes} src={$mediaUrl} alt={title || filename} />  
      <track kind="captions">
    </video>
  {:else if fileType === "audio"}
    <audio class={classes} src={$mediaUrl} controls>
      <source src={$mediaUrl} alt={title || filename} />  
    </audio>
  {/if}
{:else}
  <div class="w-52 h-52">
    <img src={loading} alt="loading spinner" />
  </div>
{/if}