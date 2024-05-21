import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (response.status === 401 || response.status === 403) {
    throw redirect(307, '/auth/login');
  }

  return response;
};
