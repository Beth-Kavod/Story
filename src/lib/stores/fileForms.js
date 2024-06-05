import { writable } from 'svelte/store';

const mapObject = new Map()

// This limits file uploads to 10
for (let i = 0; i < 10; i++) {
  mapObject.set(i, null)
}

const forms = writable(mapObject)

export default forms
