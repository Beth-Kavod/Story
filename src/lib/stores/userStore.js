import { browser } from '$app/environment'
import { writable } from 'svelte/store'

let value = {
	username: "",
	userId: ""
}

// Funny code, but it works
if (browser) {
	value = JSON.parse(window.localStorage.getItem('userStore'))
}

export const userStore = writable(value)