import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'
import { userStore } from '$lib/stores/userStore.js'

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
        message: response.errorMessage,
        formData: Object.fromEntries(data)
      }
    }

    cookies.set('media_authentication', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 day expiration
    })

    const { user } = response.data

    return redirect(303, `/profile?username=${user.username}&userId=${user.userId}`)
  },

  logout: async ({ request, cookies }) => {
    cookies.delete('media_authentication', {
      path: '/',
    })

    return {
      success: true,
      message: 'Successfully logged out!',
      redirect: '/login'
    }
  }
}