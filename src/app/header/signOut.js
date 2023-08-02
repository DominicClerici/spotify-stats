"use client"
import styles from "./Header.module.css"
import { signOut } from "next-auth/react"
import logout from "./images/logout.png"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SignOut = () => {
  const { push } = useRouter()
  return (
    <button
      className={styles.button}
      onClick={() => {
        signOut()
        push("/")
      }}
    >
      <Image src={logout} width={40} height={40} alt="logout"></Image>
    </button>
  )
}

export default SignOut
