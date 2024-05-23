import { ApiHostname } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, cookies }) => {
  const fetchProfile = await fetch(`${ApiHostname}/user/${params.userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const data = await fetchProfile.json()

  return data
}