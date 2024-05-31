<script>
  export let commentType
  export let originId
  export let originData

  console.log(originData)

  // Link to the dialog element and show it on screen once mounted
  let dialogElement
  $: if (dialogElement?.nodeName === "DIALOG") dialogElement.showModal()

  async function submitForm(event) {
    const content = event.target[0].value

    // Don't let the form submit an empty value
    if (!content) {
      alert("You cant make an empty comment")
      return
    }

    const uploadComment = await fetch(`/api/comment/create/${commentType}/${originId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    })

    const response = await uploadComment.json()

    console.log(response)
  }

  function closeDialog(event) {
    event.preventDefault()

    dialogElement.close()
  }
</script>

<!-- TODO: Fix this to look nice, right now its functional -->

<dialog class="bg-white text-black mt-8 rounded w-2/5" bind:this={dialogElement}>
  <div class="p-2">
    <!-- TODO: Change user to be object with username -->
    <h1 class="text-3xl">Reply to: <span class="text-lg">{originData._id}</span></h1>
    <div class="py-1">
      <span class="text-3xl">{commentType[0].toUpperCase()}{commentType.unshift()}:</span> {originData.content}</div>
  </div>
  <form class="flex flex-col justify-center items-center p-2" method="dialog" on:submit={submitForm}>
    <textarea class="rounded w-full border-black border-2 min-h-36" name="content"></textarea>
    <div class="flex justify-end w-full">
      <button class="my-4 bg-error w-1/5 rounded text-white" on:click={closeDialog}>Close</button>
      <button class="my-4 mx-4 bg-accent w-1/5 rounded text-white" type="submit">Submit</button>
    </div>
  </form>
</dialog>