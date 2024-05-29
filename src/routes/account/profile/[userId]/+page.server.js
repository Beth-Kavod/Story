import { ApiHostname } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
  const { userId } = params;
  const response = await fetch(`${ApiHostname}/user/${userId}`);
  const user = await response.json();

  if (user.success) {
    return { props: user };
  } else {
    throw new error(response.status, user);
  }
} 