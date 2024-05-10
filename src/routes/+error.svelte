
<script>
	import { page } from '$app/stores';
	console.log($page)
</script>
<!-- TODO: Improve error page -->

<h1>{$page.status} <b>{$page.error.message}</b></h1>