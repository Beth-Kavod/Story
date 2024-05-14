export const actions = {
  uploadFiles: async ({ request }) => {
    const formData = await request.formData()

    console.log(Object.fromEntries(formData))

    // TODO: Upload files, placeholder for now
    const UPLOAD_SUCCESS = true
    
    if (UPLOAD_SUCCESS) {
      return {
        success: true,
        message: 'Upload successful, upload another?'
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