import { setCookie } from 'svelte-cookie';
import { goto } from '$app/navigation';
import user from '$lib/stores/user';

async function loginUser(event) {
  try {
    event.preventDefault();

    const loginAttempt = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    });

    if (!loginAttempt.ok) {
      throw new Error(loginAttempt.errorMessage);
    }

    const response = await loginAttempt.json();

    if (response.success) {
      // TODO: Save the users logged in state
      user.update(() => ({
        username: event.target.username.value,
        token: response.data.JWT
      }))

      setCookie('story-token', response.data.JWT, 7, true)
      goto('/')
    }

  } catch (error) {
    console.error(error);
  }
}

export default loginUser