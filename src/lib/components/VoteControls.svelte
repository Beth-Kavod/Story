<script>
  export let origin

  async function castVote(vote) {
    const originVote = await fetch(`/api/vote/${origin.type}/${origin.id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vote })
    }) 

    const response = await originVote.json()

    console.log(response)
  }
</script>

<div class="w-16 grid grid-cols-3 grid-rows-1">
  <!-- TODO: Get icons for arrows -->
  <button on:click={() => castVote(false)}>{"<"}</button>
  <span class="text-center">{origin.voteCount}</span>
  <button on:click={() => castVote(true)}>{">"}</button>
</div>