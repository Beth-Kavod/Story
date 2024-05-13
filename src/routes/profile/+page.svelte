<script>
  import { userStore } from "$lib/stores/userStore";

  localStorage.setItem("userStore", JSON.stringify($userStore))
  console.log($userStore)
  
</script>

<h1>Hello</h1>