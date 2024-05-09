export const actions = {
  logout: async ({ request, cookies }) => {
    cookies.delete('media_authentication', {
      path: '/',
    })
  },

  search: async ({ request }) => {
    // TODO: Add search logic
  }
}