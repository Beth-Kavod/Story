import { redirect } from '@sveltejs/kit'

export const load = async ({ fetch, cookies }) => {
  cookies.delete('storyToken', {  
    path: '/',
  })

  return redirect(303, '/auth/login')
}