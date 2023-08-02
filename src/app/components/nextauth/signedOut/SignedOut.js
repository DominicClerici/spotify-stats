"use client"
import styles from "../style.module.css"
import { signIn } from "next-auth/react"

const SignedOut = ({ customClassname }) => {
  return (
    <button
      className={`${customClassname && customClassname} ${styles.button}`}
      onClick={() => {
        signIn("spotify")
      }}
    >
      Sign in
    </button>
  )
}

export default SignedOut
