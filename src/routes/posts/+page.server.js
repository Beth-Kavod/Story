import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch, cookies }) => {
  if (!cookies.get('media_authentication')) {
    throw redirect(307, '/auth/login')
  }

  const response = await fetch(`${ApiHostname}/search/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })
  const data = await response.json()

  return data
}

export const actions = {
  searchPosts: async ({ request, cookies }) => {
    // Makes the date from ISO to MM-DD-YYYY string
    function formatDate(dateInput) {
      const dateObject = new Date(dateInput)
      const formattedDate = dateObject.toLocaleDateString()
      const stringDate = formattedDate.replace(/\//g, '-')
      return stringDate
    }
    
    const data = await request.formData()

    let searchQuery = `?`

    if (data.get('title')) searchQuery += `title=${data.get('title')}&`
    if (data.get('description')) searchQuery += `description=${data.get('description')}&`
    if (data.get('tags')) searchQuery += `tags=${data.get('tags')}&`
    if (data.get('startDate')) searchQuery += `startDate=${formatDate(data.get('startDate'))}&`
    if (data.get('endDate')) searchQuery += `endDate=${formatDate(data.get('endDate'))}&`
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