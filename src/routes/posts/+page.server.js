import { ApiHostname } from '$env/static/private'

/* export async function load({ params }) {
  const { filename } = params;
  // TODO: Test api routes 
  const response = await fetch(`http://localhost:3000/view/image/${filename}`);
  if (response.ok) {
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    return { imageUrl };
  } else {
    throw new Error('Failed to load image');
  }
} */

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