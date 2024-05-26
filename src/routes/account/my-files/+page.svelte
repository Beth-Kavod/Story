<script>
  export let data

  import MediaViewer from "$lib/components/MediaViewer.svelte";
</script>

<div class="w-screen overflow-x-hidden flex justify-center">
	<div class="w-10/12">
		<h2 class="mt-8 text-5xl">Images</h2>
		<hr class="h-px mt-4 bg-gray-200 border-1 mb-4">
		<div class="text-black mb-4 grid grid-cols-4 gap-4">
			{#each data.data.images as image}
					<div class="border-4 bg-secondary border-slate-500 rounded-xl p-6">
						<div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full min-h-5">
							<p>
								{image.title}
							</p>
							<p>
								{new Date(image.date).toLocaleDateString()}
							</p>
						</div>
						<a href="/view/image/{image.filename}" target="_blank">
							<MediaViewer filename={image.filename} title={image.title} fileType="image"/>
						</a>
				</div>
			{/each}
		</div>

		<h2 class="mt-8 text-5xl">Videos</h2>
		<hr class="h-px mt-4 bg-gray-200 border-1 mb-4">
		<div class="text-black mb-4 grid grid-cols-4 gap-4">
			{#each data.data.videos as video}
					<div class="border-4 bg-secondary border-slate-500 rounded-xl p-6">
						<div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full min-h-5">
							<p>
								{video.title}
							</p>
							<p>
								{new Date(video.date).toLocaleDateString()}
							</p>
						</div>
						<MediaViewer filename={video.filename} title={video.title} fileType="video"/>
				</div>
			{/each}
		</div>

		<h2 class="mt-8 text-5xl">Audios</h2>
		<hr class="h-px mt-4 bg-gray-200 border-1 mb-4">
		<div class="text-black mb-4 grid grid-cols-4 gap-4">
			{#each data.data.audios as audio}
					<div class="border-4 bg-secondary border-slate-500 rounded-xl p-6 flex flex-col justify-between">
						<div class="justify-between mb-2 border-b-2 border-black flex flex-row w-full min-h-5">
							<p class="">
								{audio.title}
							</p>
							<p>
								{new Date(audio.date).toLocaleDateString()}
							</p>
						</div>
						<a href="/view/audio/{audio.filename}" class="flex items-center flex-col" target="_blank">
							<MediaViewer filename={audio.filename} title={audio.title} fileType="audio"/>
						</a>
				</div>
			{/each}
		</div>
	</div>
</div>