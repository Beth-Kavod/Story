// Route guard function to check for the presence of storyToken cookie
export function requireAuth({ request }) {
  const { storyToken } = request.cookies; // Assuming request.cookies is available
  
  // If storyToken cookie is not present, redirect to login page
  if (!storyToken) {
    return {
      status: 302,
      headers: {
        location: '/auth/login' // Redirect to login page
      }
    };
  }
}
