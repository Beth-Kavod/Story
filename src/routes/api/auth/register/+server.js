import dotenv from 'dotenv'
dotenv.config()

export const POST = async ({ request }) => {
  try {

    const body = await request.json();
    const { username, password, email } = body;
    
    const response = await fetch(`${process.env.ApiHostname}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    })

    const data = await response.json();

    if (!data.success) return new Response(JSON.stringify(data), { status: response.status })
    
    return new Response(JSON.stringify(data), {status: 200})
  } catch (error) {
    return new Response(JSON.stringify(data), {status: 500})
  }
}