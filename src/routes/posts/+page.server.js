import { ApiHostname } from '$env/static/private'

export const actions = {
  searchPosts: async ({ request, cookies }) => {
    const data = await request.formData()

    let searchQuery = `?`

    if (data.get('title')) searchQuery += `title=${data.get('title')}&`
    if (data.get('content')) searchQuery += `content=${data.get('content')}&`
    // TODO: Add more filters

    const fetchPosts = await fetch(`${ApiHostname}/search/posts${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': cookies.get('media_authentication')
      },
    })

    const response = await fetchPosts.json()

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