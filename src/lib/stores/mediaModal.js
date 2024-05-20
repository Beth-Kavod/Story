import { writable } from 'svelte/store';


export const mediaType = writable('images');

export const showModal = writable(false);

export const selectableMedia = writable({
  images: [],
  videos: [],
  audios: [],
});

export const selectedMedia = writable({
  images: [],
  videos: [],
  audios: [],
});
