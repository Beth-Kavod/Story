<script>
  import ArrowDown from '$lib/assets/icons/arrow-down.svg'
  import ArrowUp from '$lib/assets/icons/arrow-up.svg'
  
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
  <button on:click={() => castVote(true)}>
    <img src={ArrowUp} alt="Arrow up voting" class="w-full">
  </button>
  <span class="text-center">{ response.data.voteCount || origin.voteCount}</span>
  <button on:click={() => castVote(false)}>
    <img src={ArrowDown} alt="Arrow down voting" class="w-full">
  </button>
</div>