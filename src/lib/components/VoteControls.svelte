<script>
  export let origin

  // Template response for the updating of the voteCount
  let response = {
    data: {
      voteCount: undefined
    }
  }

  async function castVote(vote) {
    const originVote = await fetch(`/api/vote/${origin.type}/${origin.id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vote })
    }) 

    // Update the response so that it updates the voteCount
    response = await originVote.json()
  }
</script>

<div class="w-16 grid grid-cols-3 grid-rows-1">
  <!-- TODO: Get icons for arrows -->
  <button on:click={() => castVote(false)}>{"<"}</button>
  <span class="text-center">{ response.data.voteCount || origin.voteCount}</span>
  <button on:click={() => castVote(true)}>{">"}</button>
</div>