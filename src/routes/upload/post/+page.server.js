import ApiHostname from '$env/static/private'

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