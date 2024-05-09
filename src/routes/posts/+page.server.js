/* export async function load({ params }) {
  const { filename } = params;
  // TODO: Test api routes 
  const response = await fetch(`http://localhost:3000/view/image/${filename}`);
  if (response.ok) {
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    return { imageUrl };
  } else {
    throw new Error('Failed to load image');
  }
} */