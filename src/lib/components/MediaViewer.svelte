<script>
  export let filename
  export let fileType
  export let title

  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  // Access the environment variable
  const apiUrl = "http://localhost:3000"

  // Initialize a writable store to hold the image URL
  const mediaUrl = writable(null)

  // Fetch the image data and set the image URL when the component mounts
  onMount(async () => {
    try {
      console.log("Mounted")
      const response = await fetch(`${apiUrl}/view/${fileType}/${filename}`, { credentials: 'include' })
      
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

{#if $mediaUrl}
  {#if fileType === "image"}
    <img src={$mediaUrl} alt={title} />
  {/if}
  {#if fileType === "video"}
    <video controls>
      <source src={$mediaUrl} alt={title} />  
      <track kind="captions">
    </video>
  {/if}
  {#if fileType === "audio"}
    <audio src={$mediaUrl} controls>
      <source src={$mediaUrl} alt={title} />  
    </audio>
  {/if}
{:else}
  <div>Loading...</div>
{/if}

<!-- Use this component in your Svelte application -->
