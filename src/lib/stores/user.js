import { writable } from "svelte/store";

const user = writable({
	username: "",
	token: "",
})

export default user