import { setCookie } from 'svelte-cookie';
import { goto } from '$app/navigation';

async function loginUser(event) {
  try {
    event.preventDefault();

    const registerAttempt = await fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
        email: event.target.email.value
      })
    });

    if (!registerAttempt.ok) {
      throw new Error(registerAttempt.errorMessage);
    }

    const response = await registerAttempt.json();

    if (response.success) {
      // Save the users logged in state
      setCookie('story-token', response.data.JWT, 7, true)
      goto('/')
    }

  } catch (error) {
    console.error(error);
  }
}

export default loginUser