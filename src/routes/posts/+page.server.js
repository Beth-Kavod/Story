import { ApiHostname } from '$env/static/private'

export const actions = {
  searchPosts: async ({ request, cookies }) => {
    const data = await request.formData()

    let searchQuery = `?`

    if (data.get('title')) searchQuery += `title=${data.get('title')}&`
    if (data.get('content')) searchQuery += `content=${data.get('content')}&`
    // TODO: Add more filters

    const fetchPosts = await fetch(`${ApiHostname}/search/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })

    const response = await fetchPosts.json()

    console.log(response)

    if (!response.success) {
      return {
        success: false,
        message: response.errorMessage
      }
    }

    return response
  }
}