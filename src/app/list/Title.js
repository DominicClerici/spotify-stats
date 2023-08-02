"use client"
import { usePathname } from "next/navigation"
import styles from "./layout.module.css"

const Title = () => {
  const path = usePathname()
  let last = path.split("/")
  last = last[last.length - 1]
  return <h1 className={styles.title}>Top {last}</h1>
}

export default Title
