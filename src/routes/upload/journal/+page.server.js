import { ApiHostname } from '$env/static/private';

export const load = async ({ fetch, cookies }) => {
  const timeFrame = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })

  const formattedTime = timeFrame.replace(/\//g, '-')

  const fetchPost = await fetch(`${ApiHostname}/search/posts?startDate=${formattedTime}&endDate=${formattedTime}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const response = await fetchPost.json()

  console.log(response)

  return {
    oldEntries: response.data.searchResults[0].journal || [],
    postId: response.data.searchResults[0]._id
  }
} 

export const actions = {
  uploadJournal: async ({ request, cookies }) => {
    const formData = await request.formData()

    const uploadRequest = await fetch(`${ApiHostname}/post/journal/add/${formData.get("postId")}`, {
      method: 'POST',
      headers: {
        'x-access-token': cookies.get('media_authentication')
      },
      body: formData
    })

    const response = await uploadRequest.json()

    if (!response.success) {
      return {
        success: false,
        message: response.message,
        entry: formData.get("entry")
      }
    }

    return {
      success: response.success,
      message: response.message
    }
  }
} 