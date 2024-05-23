import { redirect } from '@sveltejs/kit'

export const load = async ({ fetch, cookies }) => {
  cookies.delete('media_authentication', {  
    path: '/',
  })

  cookies.delete('userStore', {  
    path: '/',
  })

  return redirect(303, '/auth/login')
}