<script>
  export let data

  $: user = data.data.user
</script>

<h1 class="text-6xl my-8">Profile Page</h1>
{user._id}