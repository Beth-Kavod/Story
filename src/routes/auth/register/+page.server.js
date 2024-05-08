import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData()

    if (data.get('password') !== data.get('password-confirmation')) {
      throw redirect(303, './register?error=Passwords+do+not+match')
    }

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

    const response = await registerAttempt.json()

    if (!response.success) {
      console.log(response)
      throw redirect(303, `./register?error=${response.errorMessage.join('+')}`)
    }

    cookies.set('story-token', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 day expiration
    })

    throw redirect(303, '/profile')
  }
}