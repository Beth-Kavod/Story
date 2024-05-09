import requireAuth from '$lib/hooks/requireAuth.js';
// TODO: Currently not working, throws 500 error
// export const load = requireAuth;

export const load = async ({ fetch, params }) => {
  const { userId } = params;
  const response = await fetch(`http://localhost:3000/user/${userId}`);

  if (response.ok) {
    const user = await response.json();
    return { props: { user } };
  } else {
    throw new Error('Failed to load user');
  }
} 