import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch, url, cookies }) => {
  if (!cookies.get('media_authentication')) {
    throw redirect(307, '/auth/login')
  }

  const response = await fetch(`${ApiHostname}/search/posts${url.search}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const data = await response.json()

  return data
}