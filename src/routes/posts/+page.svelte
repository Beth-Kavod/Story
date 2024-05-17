<script>
  import { enhance } from '$app/forms';
  import searchIcon from '$lib/assets/icons/search.svg';
  import UserPost from '$lib/components/UserPost.svelte';
  export let form

  console.log(form)

  /* ------------------------------ Testing data ------------------------------ */

  const testData = {
    title: 'Test Title',
    description: 'Test Content',
    date: "2024-05-17T21:09:46.708Z",
    videos: [],
    images: [],
    audios: [],
    journals: [],
    tags: ['tag1', 'tag2'],
    comments: [],
    privacy: 'Private',

  }
</script>

<h1>Posts page</h1>
<form class="flex bg-white p-2 border rounded" method="POST" action="?/searchPosts" use:enhance>
  <label class="text-black flex items-center mr-2" for="search">Title:</label>
  <input type="text" id="search" name="title" placeholder="Search" class="w-full border border-gray-200 px-2 rounded text-black">
  <button type="submit" class="ml-2">
    <img src={searchIcon} alt="search button" class="w-9 h-9">
  </button>
</form>
<!-- Post container -->
<div class="mt-4 grid grid-cols-3 w-9/12 gap-4">
  <UserPost postData={testData}/>
</div>