import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch, cookies }) => {
  if (!cookies.get('media_authentication')) {
    throw redirect(307, '/auth/login')
  }
}

export const actions = {
  uploadFiles: async ({ request, cookies }) => {
    const formData = await request.formData()

    // SvelteKit won't send cookies with the request so I have to send the backup cookie in the headers 
    // I would rather not do this but I can't waste any more time trying to fix the cookies
    const uploadRequest = await fetch(`${ApiHostname}/file/upload`, {
      method: 'POST',
      headers: {
        "x-access-token": cookies.get('media_authentication')
      },
      body: formData
    })

    const response = await uploadRequest.json()
    console.log(response)
    if (response.success) {
      return {
        success: true,
        message: 'Upload successful, upload more?'
      }
    } else {
      // Filter out file input, you cant send it back in the response.
      // Sending the file in the response will cause a stringify errors
      const filteredFormData = new FormData()
      for (const [name, value] of formData.entries()) {
        // Exclude file input from the form data
        if (value instanceof File) continue
  
        filteredFormData.append(name, value)
      }

      return {
        success: false,
        message: 'Upload failed, please try again',
        formData: Object.fromEntries(filteredFormData)
      }
    }
  }
}