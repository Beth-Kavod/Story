<script>
  import { enhance } from '$app/forms';
  import searchIcon from '$lib/assets/icons/search.svg';
  export let form

  console.log(form)
</script>

<h1>Posts page</h1>
<form class="flex bg-white p-2 border rounded" method="POST" action="?/searchPosts" use:enhance>
  <label class=" flex items-center mr-2" for="search">Title:</label>
  <input type="text" id="search" name="title" placeholder="Search" class="w-full border border-gray-200 px-2 rounded ">
  <button type="submit" class="ml-2">
    <img src={searchIcon} alt="search button" class="w-9 h-9">
  </button>
</form>
<!-- Post container -->
<div class="text-black mt-4 grid grid-cols-3 w-9/12 gap-4">
  <div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
    <div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full h-1/5">
      <p>
        Title
      </p>
      <p>
        Date
      </p>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore! Est dolore repellendus alias magnam deserunt! Quisquam sapiente incidunt distinctio quae, quia unde, assumenda vitae voluptates fuga, suscipit laborum culpa!
  </div>
  <div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
    <div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full h-1/5">
      <p>
        Title
      </p>
      <p>
        Date
      </p>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore! Est dolore repellendus alias magnam deserunt! Quisquam sapiente incidunt distinctio quae, quia unde, assumenda vitae voluptates fuga, suscipit laborum culpa!
  </div>
  <div class="border-4 bg-secondary border-slate-500 rounded-xl mt-12 p-6">
    <div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full h-1/5">
      <p>
        Title
      </p>
      <p>
        Date
      </p>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore! Est dolore repellendus alias magnam deserunt! Quisquam sapiente incidunt distinctio quae, quia unde, assumenda vitae voluptates fuga, suscipit laborum culpa!
  </div>
</div>