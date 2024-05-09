import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData()

    if (data.get('password') !== data.get('password-confirmation')) {
      return { 
        success: false,
        message: 'Passwords do not match',
        redirect: './register?error=Passwords+do+not+match',
        formData: Object.fromEntries(data)
      }
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
      return {
        success: false, 
        message: response.errorMessage.join('+'), 
        redirect: (`./register?error=${response.errorMessage.join('+')}`),
        formData: Object.fromEntries(data)
      }
    }

    cookies.set('media_authentication', response.data.JWT, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 day expiration
    })

    return redirect(303, '/')
  }
}