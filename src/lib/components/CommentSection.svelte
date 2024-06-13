<script>
  import CreateComment from './CreateComment.svelte';
  import Comment from '$lib/components/Comment.svelte'
  import { openComments, createCommentData } from '$lib/stores/commentData'
  
  export let originData
</script>


<div class="w-full p-4 rounded bg-white my-2 text-black grid-flow-rows grid" id="commentSection">
  {#each $openComments.get(originData._id).comments as comment}
    <Comment comment={comment} originId={originData._id} />
  {/each}
</div>

<!-- {#if createCommentData[originData._id].open}
  <CreateComment commentType="comment" originId={createCommentData.id} originData={createCommentData.data}/>
{/if}  -->