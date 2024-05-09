// Route guard function to check for the presence of media_authentication cookie
export function requireAuth({ request }) {
  const { media_authentication } = request.cookies; // Assuming request.cookies is available
  
  // If media_authentication cookie is not present, redirect to login page
  if (!media_authentication) {
    return {
      status: 302,
      headers: {
        location: '/auth/login' // Redirect to login page
      }
    };
  }
}
