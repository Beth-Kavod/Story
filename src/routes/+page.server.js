export const load = async ({ fetch, cookies }) => {
  // TODO: Add logic to prevent page from loading if not logged in
  /* const response = await fetch(`${process.env.ApiHostname}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies.get('media_authentication')}`
    }
  }) */
}

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