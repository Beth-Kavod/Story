export const load = async ({ params }) => {
  // Forward the filename to the server-side code
  return {
    filename: params.filename
  };
}