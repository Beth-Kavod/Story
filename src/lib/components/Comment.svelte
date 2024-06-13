<script>
  import DefaultUser from '$lib/assets/icons/DefaultUser.png'
  import VoteControls from './VoteControls.svelte'
  import CommentSection from '$lib/components/CommentSection.svelte'
  import { openComments, createCommentData } from '$lib/stores/commentData.js'

  export let comment
  export let originId

  // I am very aware of how bad and inefficient this way of rendering comments is but im
  // too tired to care, it is 5/31/24 and were in the airport.
  // Things have already been crazy today and ive been up since 3am.
  // All of the comment logic was added today, while the logic in my head gets drained.

  // 6/5/24 
  // Im changing everything to use SvelteKit store's, i think i should have done this to begin with.

  // 6/13/24 
  // I finally figured out how to make the comment section work, maybe.
  // Im at least going to try to fix it now 

  function toggleComments() {
    const cachedComments = $openComments.get(comment._id) || undefined

    if (!cachedComments) { 
      fetch(`/api/comment/${comment._id}`) 
      .then(res => res.json())
      .then(response => {
        
        openComments.update(comments => {
          const originComment = comments.get(originId)

          comments.set(comment._id, {
            origin: originId,
            open: response.data.comments.length ? true : false,
            comments: response.data.comments,
            depth: originComment.origin ? originComment.depth + 1 : 1 // if the comment was made on the post, don't indent
          })

          return comments
        })
      })
    } else {
      // If comments are already cached, simply toggle the open state
      openComments.update(comments => {
        const commentData = comments.get(comment._id)
        
        // if there is no comments then don't allow the comment section to open.  
        if (!commentData.comments.length) return comments

        commentData.open = !commentData.open
        comments.set(comment._id, commentData)
        console.log(comments)
        return comments
      })
    }
  }
</script>

<div class="mb-4 ml-{$openComments.get(comment._id)?.depth * 2 + 4}">
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
  <div class="flex justify-between">
    <!-- TODO: make these icons -->
    <VoteControls origin={{ id: comment._id, type: "comment", voteCount: comment.voteCount }} />
    <button class="bg-gray-200 px-1 rounded" on:click={toggleComments}>comments ({comment.comments.length})</button>
    <button class="bg-gray-200 px-1 rounded" on:click={createCommentOnComment(comment._id)}>create comment</button>
  </div>
  <!-- Show comments on comments -->
  <!-- TODO: make this reactive and recursive -->
  
  {#if $openComments.get(comment._id)?.open}
    <CommentSection originData={$openComments.get(originId).comments.find(c => c._id === comment._id)}/>
  {/if}

  <!-- <span class="text-error">Nested comment section placeholder</span>  -->
</div>