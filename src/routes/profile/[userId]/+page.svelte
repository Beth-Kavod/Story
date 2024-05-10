<script>
	import heart from "$lib/assets/icons/heart.svg";
	import arrow from "$lib/assets/icons/arrow-forward.svg";
	import stats from "$lib/assets/icons/stats-pie.svg";
	import pencil from "$lib/assets/icons/pencil.svg";
	import gear from "$lib/assets/icons/settings-gear.svg";
	import logout from "$lib/assets/icons/logout.svg";

  export let data;
	const { user } = data.props.data;
</script>

<div class="p-12 border-4 bg-secondary border-slate-500 text-black rounded-xl mt-12">
	<h2 class="text-center text-3xl font-semibold mb-2">{user.username}</h2>
  <div class="flex flex-col mb-8">
		<!-- <p class="text-center mb-2">#SOME TITLE</p> -->
		<sup class="text-center mt-2 mb-6">ID: {user._id}</sup>
		<p class="text-center">Followers: #PLACEHOLDER</p>
		<p class="text-center">Following: #PLACEHOLDER</p>
		<p class="text-center">Page Views: #PLACEHOLDER</p>
	</div>
	<div class="flex flex-col">
		<a href="#PLACEHOLDER" class="flex items-center mb-3"><img class="w-6 h-6" src={heart} alt="Heart Icon"><p class="mx-auto"> Favorites </p><img class="w-6 h-6" src={arrow} alt="Arrow Icon"></a><br><br>
		<a href="#PLACEHOLDER" class="flex items-center mb-3"><img class="w-6 h-6" src={stats} alt="Stats Icon"><p class="mx-auto"> More Stats </p><img class="w-6 h-6" src={arrow} alt="Arrow Icon"></a><br><br>
		<a href="#PLACEHOLDER" class="flex items-center mb-3"><img class="w-6 h-6" src={pencil} alt="Pencil Icon"><p class="mx-auto"> Edit Profile </p><img class="w-6 h-6" src={arrow} alt="Arrow Icon"></a><br><br>
		<a href="#PLACEHOLDER" class="flex items-center mb-3"><img class="w-6 h-6" src={gear} alt="Gear Icon"><p class="mx-auto"> Settings </p><img class="w-6 h-6" src={arrow} alt="Arrow Icon"></a><br><br>
		<a href="#PLACEHOLDER" class="flex items-center mb-3"><img class="w-6 h-6" src={logout} alt="Logout Icon"><p class="mx-auto"> Sign Out </p><img class="w-6 h-6" src={arrow} alt="Arrow Icon"></a><br><br>
	</div>
</div>
