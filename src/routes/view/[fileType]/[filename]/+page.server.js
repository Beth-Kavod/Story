import { ApiHostname } from '$env/static/private';

// TODO: finish this later to fetch all file data
export const load = async ({ params, cookies }) => {
  // Forward the filename to the server-side code
  /* const fetchFile = await fetch(`${ApiHostname}/search/${params.fileType}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': cookies.get('media_authentication')
    }
  })

  const data = await fetchFile.json()
 */
  return {
    // fileDate: data,
    filename: params.filename,
    fileType: params.fileType
  };
}