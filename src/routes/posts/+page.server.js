import { ApiHostname } from '$env/static/private'

/* export const load = async ({ fetch, cookies }) => {
  const response = await fetch(`${ApiHostname}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })
  const data = await response.json()
  console.log(data)
  return data
} */

export const actions = {
  searchPosts: async ({ request, cookies }) => {
    const data = await request.formData()

    let searchQuery = `?`

    if (data.get('title')) searchQuery += `title=${data.get('title')}&`
    if (data.get('description')) searchQuery += `description=${data.get('description')}&`
    if (data.get('tags')) searchQuery += `tags=${data.get('tags')}&`
    if (data.get('startDate')) searchQuery += `startDate=${data.get('startDate')}&`
    if (data.get('endDate')) searchQuery += `endDate=${data.get('endDate')}&`
    // TODO: Add more filters

    const fetchPosts = await fetch(`${ApiHostname}/search/posts${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': cookies.get('media_authentication')
      },
    })

    const response = await fetchPosts.json()

    console.log(response)

    if (!response.success) {
      return {
        success: false,
        message: response.errorMessage
      }
    }

    return {
      success: true,
      data: response.data
    }
  }
}