import { redirect } from "@sveltejs/kit"

export const load = async ({ fetch, cookies, route, url }) => {
  // const { username, userId, login } = url;
  const { searchParams } = url

  if (searchParams.get("login") === "true") { 
    const userData = {
      username: searchParams.get("username"),
      userId: searchParams.get("userId")
    }

    if (!userData.username || !userData.userId) {
      throw new redirect(303, `/auth/login`)
    }
    
    cookies.set("userStore", JSON.stringify(userData), { 
      path: "/",
    })
  }

  const user = JSON.parse(cookies.get("userStore")) || null

  if (!user) {
    throw new redirect(303, `/auth/login`)
  }

  throw new redirect(303, `/account/profile/${user.userId}`)
}