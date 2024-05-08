import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const actions = {  
  login: async ({ request, cookies }) => {
    const data = await request.formData()

    const loginAttempt = await fetch(`${ApiHostname}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password')
      })
    })

    const response = await loginAttempt.json()

    if (!response.success) {
      return {
        success: false,
        message: response.errorMessage.join('+'),
        formData: Object.fromEntries(data)
      }
    }

    cookies.set('story-token', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 day expiration
    })

    return redirect(303, '/profile')
  },

  logout: async ({ request, cookies }) => {
    cookies.delete('story-token', {
      path: '/',
    })

    return {
      success: true,
      message: 'Successfully logged out!',
      redirect: '/login'
    }
  }
}