<script>
  import { commentModal } from '$lib/stores/commentData.js'
  import { goto } from '$app/navigation'
  export let commentType
  export let originData

  // Link to the dialog element and show it on screen once mounted
  let dialogElement
  $: if (dialogElement?.nodeName === "DIALOG") dialogElement.showModal()

  /* --------------------- Send request to create comment --------------------- */

  async function submitForm(event) {
    const content = event.target[0].value

    // Don't let the form submit an empty value
    if (!content) {
      alert("You cant make an empty comment")
      return
    }

    const uploadComment = await fetch(`/api/comment/create/${commentType}/${originData._id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    })

    const response = await uploadComment.json()
    // console.log(response)
    goto(window.location.pathname)
  }

  function closeDialog(event) {
    event.preventDefault()

    commentModal.update(modal => {
      modal.open = !modal.open

      return modal
    })

    dialogElement.close()
  }
</script>

<!-- TODO: Fix this to look nice, right now its functional -->

<dialog class="bg-white text-black mt-8 rounded w-2/5" bind:this={dialogElement}>
  <!-- Display the document to reply to -->
  <div class="p-2">
    <h1 class="text-2xl">Replying to {originData.user.username}'s {commentType}:</h1> 
    <h2>{originData.content || originData.description}</h2>
  </div>

  <!-- Prompt comment creation -->
  <form class="flex flex-col justify-center items-center p-2" method="dialog" on:submit={submitForm}>
    <textarea class="rounded w-full border-black border-2 min-h-36" name="content"></textarea>
    <div class="flex justify-end w-full">
      <button class="my-4 bg-error w-1/5 rounded text-white" on:click={closeDialog}>Close</button>
      <button class="my-4 mx-4 bg-accent w-1/5 rounded text-white" type="submit">Submit</button>
    </div>
  </form>
</dialog>