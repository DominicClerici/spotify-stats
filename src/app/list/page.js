import { redirect } from "next/navigation"

const page = () => {
  redirect("/list/tracks")
  return <h1> redirecting you</h1>
}

export default page
