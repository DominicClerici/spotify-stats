import styles from "./footer.module.css"
import { getServerSession } from "next-auth/next"
import SignedOut from "../components/nextauth/signedOut/SignedOut"
import SignedIn from "../components/nextauth/signedIn/SignedIn"
import { options } from "../api/auth/[...nextauth]/options"

const DyamicContent = async () => {
  const session = await getServerSession(options)
  if (session) {
    return (
      <>
        <SignedIn customClassname={styles.button}></SignedIn>
        <a>Top songs</a>
        <a>Top artists</a>
      </>
    )
  } else {
    return <SignedOut></SignedOut>
  }
}

export default DyamicContent
