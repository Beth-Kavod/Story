export const load = async ({ fetch }) => {
  const response = await fetch(`http://localhost:3000/user/my-files`)
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