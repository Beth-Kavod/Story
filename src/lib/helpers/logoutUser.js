import { deleteCookie } from 'svelte-cookie';
import { goto } from '$app/navigation';

async function logoutUser() {
  try {
    deleteCookie('story-token');
    goto('/auth/login')
  } catch (error) {
    console.error(error);
  }
}

export default logoutUser