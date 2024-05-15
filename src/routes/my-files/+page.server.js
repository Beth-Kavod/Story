import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch }) => {
  const response = await fetch(`${ApiHostname}/user/my-files`)
  const data = await response.json()
  console.log(data)
  return data
}

export const actions = {

} 