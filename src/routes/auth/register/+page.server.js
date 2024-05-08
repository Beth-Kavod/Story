import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { ApiHostname } from '$env/static/private';

export const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData();

    const registerAttempt = await fetch(`${ApiHostname}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
        email: data.get('email')
      })
    })

    const response = await registerAttempt.json();

    if (!response.success) {
      console.log(response)
      throw redirect(303, './register?error="Username or email already in use"');
    }

    cookies.set('story-token', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    throw redirect(303, '/profile');
  }
}