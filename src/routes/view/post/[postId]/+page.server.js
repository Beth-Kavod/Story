import { ApiHostname } from '$env/static/private';

export const load = async ({ params, cookies }) => {
  // Forward the filename to the server-side code
  const fetchPost = await fetch(`${ApiHostname}/post/${params.postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const data = await fetchPost.json()

  return data
}