"use client"
import styles from "../style.module.css"
import { signOut } from "next-auth/react"

const SignedIn = ({ customClassname }) => {
  return (
    <button
      className={`${customClassname && customClassname} ${styles.button}`}
      onClick={() => {
        signOut()
      }}
    >
      Sign out
    </button>
  )
}

export default SignedIn
