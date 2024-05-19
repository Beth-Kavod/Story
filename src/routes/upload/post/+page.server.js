import ApiHostname from '$env/static/private'

/* export const load = async ({ fetch, cookies }) => {
  const response = await fetch(`${ApiHostname}/user/media-titles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}  */

export const actions = {
  uploadPost: async ({ request, cookies }) => {
    const formData = await request.formData()

    const uploadRequest = await fetch(`${ApiHostname}/post/create`, {
      method: 'POST',
      headers: {
        'x-access-token': cookies.get('media_authentication')
      },
      body: formData
    })

    const response = await uploadRequest.json()

    if (response.success) {
      return {
        success: true,
        message: 'Post uploaded successfully'
      }
    }

    return {
      success: false,
      message: response?.errorMessage
    }
  }
}