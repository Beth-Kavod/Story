import { writable } from "svelte/store";
import { getCookie, setCookie } from "svelte-cookie";

const user = writable({
	username: "",
	token: "",
})

export default user