import { writable } from 'svelte/store';

const pageCache = writable({});

export default pageCache
