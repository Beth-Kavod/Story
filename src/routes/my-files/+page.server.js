import { redirect } from '@sveltejs/kit'
import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch }) => {
  const response = await fetch(`${ApiHostname}/user/my-files`)
  const data = await response.json()

  if (response.status === 401 || response.status === 403) {
    throw new redirect(307, "/auth/login")
  }

  return data
}

export const actions = {

} 