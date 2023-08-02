import { getServerSession } from "next-auth"
import SignedOut from "../nextauth/signedOut/SignedOut"
import Link from "next/link"
import { options } from "@/app/api/auth/[...nextauth]/options"

const DynamicContent = async () => {
  let session = await getServerSession(options)
  console.log(session)
  if (session) {
    return (
      <>
        <h3>Logged in as: {session.user.name}</h3>
        <Link href={"/list/tracks/"}>Top songs</Link>
        <Link href={"/list/artists/"}>Top artists</Link>
      </>
    )
  } else {
    return (
      <>
        <span>To start,</span>
        <SignedOut></SignedOut>
      </>
    )
  }
}

export default DynamicContent
