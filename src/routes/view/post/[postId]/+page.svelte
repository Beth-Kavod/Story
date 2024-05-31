<script>
  import DefaultUser from '$lib/assets/icons/DefaultUser.png'
  import CreateComment from '$lib/components/CreateComment.svelte'
  import CommentSection from '$lib/components/CommentSection.svelte'

  export let data

  $: post = data.data.post

  let commentsOpen = true

  let createCommentData = {
    commentId: "",

  }

  function toggleComments() {
    if (post.comments.length) {
      commentsOpen = !commentsOpen
    }
  }
</script>

<h1 class="text-6xl my-8">View Post</h1>

{#if !data.success}
  <p class={`text-xl text-center mb-4 ${data.success ? 'text-primary' : 'text-error'}`}>{data.message}</p>
{/if}

<div class="flex flex-col justify-center items-stretch bg-white text-black w-3/5 p-4 rounded">
  <div class="flex gap-4 items-center">
    <a class="h-10 w-10" href="/view/profile/{post.user}">
      <!-- TODO: Users don't have an avatar yet, replace when users do -->
      <img src={DefaultUser} alt="profile" class="w-10 h-10 rounded-full">
    </a>

    <p class="flex items-center col-span-1 p-1 h-min bg-gray-300 rounded text-center">
      {new Date(post.date).toLocaleDateString()}
    </p>

    <details class="list-none text-sm gap-1 flex flex-col justify-center items-center col-span-1">
      <summary id="tag-dropdown" class="flex justify-center">
        <li>Tags</li>
        <div>({post.tags.length})</div>
      </summary>
      <div aria-labelledby="tag-dropdown" class="absolute origin-top-left bg-accent flex gap-1 p-2">
        {#each post.tags as tag}
          <li class="rounded px-1 bg-gray-300">{tag}</li>
        {/each}
      </div>
    </details>
    <!-- Add tags -->
    <!-- Add user icon -->
  </div>

  <h2 class="text-2xl col-span-4">{post.title}</h2>


  <!-- Middle section -->
  <div class="mb-2 mt-1">
    this is the body of the post, im thinking about making it a markdown string but im not sure if i want to have to parse it
  </div>

  <!-- Footer, likes and comments -->
  <div class="grid grid-cols-3 grid-rows-1">
    <h1 class="col-span-1">likes</h1>
    <button class="col-span-1" on:click={toggleComments}>comments ({post.comments.length})</button>
    <h1 class="col-span-1">hello</h1>
  </div>
</div>

{#if commentsOpen}
  <CommentSection originData={post} />
{/if}

<!-- <CreateComment commentType="post" originId={post._id} originData={post} />   -->