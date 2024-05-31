<script>
  import DefaultUser from '$lib/assets/icons/DefaultUser.png'
  import CreateComment from './CreateComment.svelte';
  import VoteControls from './VoteControls.svelte';
  // import CommentSection from '$lib/components/CommentSection.svelte'
  
  export let originData

  /* ------------------------- Handle comment viewing ------------------------- */
  // I am very aware of how bad and inefficient this way of rendering comments is but im
  // too tired to care, it is 5/31/24 and were in the airport.
  // Things have already been crazy today and ive been up since 3am.
  // All of the comment logic was added today, while the logic in my head gets drained.

  /* ---------------------------- Comment functions --------------------------- */

  function findComment(id) {
    return originData.comments.find(comment => comment._id == id)
  }

  function findCommentData(id) {
    return commentCommentSectionData.find(data => data.id === id)
  }

  /* ------------------------- Display nested comments ------------------------ */

  // This is used to memoize data about the comments
  let commentCommentSectionData = []

  async function showCommentComments(id) {
    // Return early and don't fetch the comment if the data is already memoized
    // If the comment was already fetched, then flip the boolean value of open 
    // Im am a master programer, I manage to write garbage code and it just works.
    const existingComment = findCommentData(id)
    if (existingComment) {
      existingComment.open = !existingComment.open
      return
    }

    // This returns the populated data of a comment
    const comment = await fetch(`/api/comment/${id}`) 

    const response = await comment.json()

    // Only return the comments of the comment
    const newOpenedComments = {
      id: id,
      open: true,
      comments: response.data.comments.comments
    }

    // Update the memoized data 
    commentCommentSectionData = [...commentCommentSectionData, newOpenedComments]
    console.log()
  }

  /* --------------------- Create a new comment on comment -------------------- */

  // This is the options to pass into the CreateComment component
  let createCommentData = {
    id: "",
    open: false,
    data: {}
  }

  function createCommentOnComment(id) {
    const comment = findComment(id)

    // Update the data that will be passed into the CreateComment component
    createCommentData = {
      id: id,
      open: true,
      data: comment
    }
  }

  /* ----------------------------- Comment liking ----------------------------- */

  // TODO: Add this in later
  function commentVote(id) {
    console.log(`Liked comment: ${id}`)
  }
</script>


<div class="w-3/5 p-4 rounded bg-white my-2 text-black grid-flow-rows grid" id="commentSection">
  {#each originData.comments as comment}
    <div class="mb-4">
      <!-- Top row of comment box -->
      <div class="flex items-center h-12">
        <a class="h-10 w-10 mr-4" href="/view/profile/{comment.user}">
          <!-- TODO: Users don't have an avatar yet, replace when users do -->
          <img src={DefaultUser} alt="profile" class="w-10 h-10 rounded-full">
        </a>
        
        <p class="bg-gray-300 rounded p-1 mr-2">
          {new Date(comment.updatedAt).toLocaleDateString()}
        </p>
        
        <p class="bg-gray-300 rounded p-1">
          {new Date(comment.updatedAt).toLocaleTimeString()}
        </p>

        <!-- TODO: Change this to 3 dots with options -->
        <!-- {#if comment.comments.length}
          <details>
            <summary >
              ({comment.comments.length})
            </summary>
          </details>
        {/if} -->
      </div>

      <!-- Comment text -->
      <div class="mb-2">{comment.content}</div>
      
      <!-- Commenting options -->
      <div>
        <!-- TODO: make these icons -->
        <VoteControls origin={{ id: comment._id, type: "comment", voteCount: comment.voteCount }} />
        <button class="bg-gray-200 px-1 rounded" on:click={showCommentComments(comment._id)}>comments</button>
        <button class="bg-gray-200 px-1 rounded" on:click={createCommentOnComment(comment._id)}>create comment</button>
      </div>
      <!-- Show comments on comments -->
      <!-- TODO: make this reactive and recursive -->
      <!-- {#if findCommentData(comment._id)}
            <CommentSection originData={findCommentData(comment._id)}/>
          {/if} -->
        <span class="text-error">Nested comment section placeholder</span> 
    </div>
  {/each}
</div>

{#if createCommentData.open}
  <CreateComment commentType="comment" originId={createCommentData.id} originData={createCommentData.data}/>
{/if} 