import { ApiHostname } from '$env/static/private';

export const load = async ({ fetch, cookies }) => {
  // Set the time frame to the current date
  const timeFrame = new Date().toLocaleDateString()

  const formattedTime = timeFrame.replace(/\//g, '-')
  
  const userId = JSON.parse(cookies.get("userStore")).userId

  // Fetch the first post the user made today
  const fetchPost = await fetch(`${ApiHostname}/search/posts?startDate=${formattedTime}&endDate=${formattedTime}&user=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const response = await fetchPost.json()

  // If the user hasn't posted anything yet, don't render the journal page
  if (response.success && response.data.searchResults.length === 0) {
    return {
      success: false,
      message: "Journal not found, please make a post first",
    }
  }

  return {
    success: true,
    message: "",
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