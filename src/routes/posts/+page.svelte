<script>
  import { enhance } from '$app/forms';
  import searchIcon from '$lib/assets/icons/search.svg';
  import UserPost from '$lib/components/UserPost.svelte';
  export let form

  /* ------------------------------ Testing data ------------------------------ */

  /* const testData = [{
    title: 'Test Title',
    description: 'Test Content',
    date: "2024-05-17T21:09:46.708Z",
    videos: [{
      "_id": {
        "$oid": "662f4eb06b18c12a5ba46d2d"
      },
      "title": "compressed.mp4",
      "filename": "compressed.mp4",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "662f4eb06b18c12a5ba46cc6",
      "date": {
        "$date": "2024-04-29T07:39:28.946Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "updatedAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "__v": 0
    },
  ],
    images: [{
      "_id": {
        "$oid": "662e0b8b416ec6ba09b67e06"
      },
      "filename": "2024-04-20-030944.jpg",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "voteCount": 0,
      "tags": [],
      "privacy": "Private",
      "date": {
        "$date": "2024-04-28T08:40:43.204Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "updatedAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "__v": 0
    }],
    audios: [{
      "_id": {
        "$oid": "6642c7292988c311fe06367c"
      },
      "date": {
        "$date": "2024-05-13T00:00:00.000Z"
      },
      "title": "Free_Test_Data_10MB_WAV.wav",
      "filename": "Free_Test_Data_10MB_WAV.wav",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "6642c7292988c311fe063652",
      "votes": [],
      "createdAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "updatedAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "__v": 0
    }],
    journals: [],
    tags: ['tag1', 'tag2'],
    comments: [],
    privacy: 'Private',

  },{
    title: 'Test Title',
    description: 'Test Content',
    date: "2024-05-17T21:09:46.708Z",
    videos: [{
      "_id": {
        "$oid": "662f4eb06b18c12a5ba46d2d"
      },
      "title": "compressed.mp4",
      "filename": "compressed.mp4",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "662f4eb06b18c12a5ba46cc6",
      "date": {
        "$date": "2024-04-29T07:39:28.946Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "updatedAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "__v": 0
    },
  ],
    images: [{
      "_id": {
        "$oid": "662e0b8b416ec6ba09b67e06"
      },
      "filename": "2024-04-20-030944.jpg",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "voteCount": 0,
      "tags": [],
      "privacy": "Private",
      "date": {
        "$date": "2024-04-28T08:40:43.204Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "updatedAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "__v": 0
    }],
    audios: [{
      "_id": {
        "$oid": "6642c7292988c311fe06367c"
      },
      "date": {
        "$date": "2024-05-13T00:00:00.000Z"
      },
      "title": "Free_Test_Data_10MB_WAV.wav",
      "filename": "Free_Test_Data_10MB_WAV.wav",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "6642c7292988c311fe063652",
      "votes": [],
      "createdAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "updatedAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "__v": 0
    }],
    journals: [],
    tags: ['tag1', 'tag2'],
    comments: [],
    privacy: 'Private',

  },{
    title: 'Test Title',
    description: 'Test Content',
    date: "2024-05-17T21:09:46.708Z",
    videos: [{
      "_id": {
        "$oid": "662f4eb06b18c12a5ba46d2d"
      },
      "title": "compressed.mp4",
      "filename": "compressed.mp4",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "662f4eb06b18c12a5ba46cc6",
      "date": {
        "$date": "2024-04-29T07:39:28.946Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "updatedAt": {
        "$date": "2024-04-29T07:39:28.955Z"
      },
      "__v": 0
    },
  ],
    images: [{
      "_id": {
        "$oid": "662e0b8b416ec6ba09b67e06"
      },
      "filename": "2024-04-20-030944.jpg",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "voteCount": 0,
      "tags": [],
      "privacy": "Private",
      "date": {
        "$date": "2024-04-28T08:40:43.204Z"
      },
      "votes": [],
      "createdAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "updatedAt": {
        "$date": "2024-04-28T08:40:43.214Z"
      },
      "__v": 0
    }],
    audios: [{
      "_id": {
        "$oid": "6642c7292988c311fe06367c"
      },
      "date": {
        "$date": "2024-05-13T00:00:00.000Z"
      },
      "title": "Free_Test_Data_10MB_WAV.wav",
      "filename": "Free_Test_Data_10MB_WAV.wav",
      "uploader": {
        "$oid": "662da4624816d6ff7c8a8f1d"
      },
      "comments": [],
      "tags": [],
      "privacy": "Private",
      "voteCount": 0,
      "fileId": "6642c7292988c311fe063652",
      "votes": [],
      "createdAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "updatedAt": {
        "$date": "2024-05-14T02:06:33.901Z"
      },
      "__v": 0
    }],
    journals: [],
    tags: ['tag1', 'tag2'],
    comments: [],
    privacy: 'Private',

  }
  ] */
</script>

<h1>Posts page</h1>
<!-- {#if !form.success && form.message}
  <p>{form.message}</p>
{/if} -->
<form class="flex bg-white p-2 border rounded" method="POST" action="?/searchPosts" use:enhance>
  <label class="text-black flex items-center mr-2" for="search">Title:</label>
  <input type="text" id="search" name="title" placeholder="Search" class="w-full border border-gray-200 px-2 rounded text-black">
  <button type="submit" class="ml-2">
    <img src={searchIcon} alt="search button" class="w-9 h-9">
  </button>
</form>

<!-- Post container -->
<div class="mt-4 grid grid-cols-3 grid-flow-row gap-6">
  {#if form && form.data.searchResults}
    {#each form.data.searchResults as post}
      <UserPost postData={post}/>
    {/each}
  {/if}
</div>