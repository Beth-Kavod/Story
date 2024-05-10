import requireAuth from '$lib/hooks/requireAuth.js';
import { error } from '@sveltejs/kit';
// TODO: Currently not working, throws 500 error
// export const load = requireAuth;

export const load = async ({ fetch, params }) => {
  const { userId } = params;
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  const user = await response.json();

  if (user.success) {
    return { props: user };
  } else {
    throw new error(response.status, user);
  }
} 