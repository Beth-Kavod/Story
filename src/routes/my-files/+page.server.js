import { ApiHostname } from '$env/static/private'

export const load = async ({ fetch }) => {
  const response = await fetch(`${ApiHostname}/user/my-files`)
  const data = await response.json()
  console.log(data)

  const { images, videos, audios } = data.data

  return {
    success: true,
    message: 'Fetched my files',
    images,
    videos,
    audios
  }
}

export const actions = {

} 