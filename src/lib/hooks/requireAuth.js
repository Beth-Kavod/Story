export default function requireAuth({ request }) {
  const { media_authentication } = request.cookies
  
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
