import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { ApiHostname } from '$env/static/private';

export const actions = {  
  login: async ({ request, cookies }) => {
    const data = await request.formData();

    const loginAttempt = await fetch(`${ApiHostname}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password')
      })
    });

    const response = await loginAttempt.json();

    if (!response.success) {
      throw redirect(303, './login?error=Invalid username or password');
    }

    cookies.set('story-token', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    throw redirect(303, '/profile');
  },

  logout: async ({ request, cookies }) => {
    cookies.delete('story-token', {
      path: '/',
    });

    throw redirect(303, '/');
  }
}