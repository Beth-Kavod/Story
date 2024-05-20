import { writable } from 'svelte/store';


export const selectableMedia = writable();
export const mediaType = writable('images');
export const showModal = writable(false);
export const selectedMedia = writable({
  images: [],
  videos: [],
  audios: [],
});
