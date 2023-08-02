import styles from "./Hero.module.css"
import SignedOut from "../nextauth/signedOut/SignedOut"
import Image from "next/image"
import DynamicContent from "./DynamicContent"

const Hero = () => {
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.heroText}>
        See your <strong className={styles.heroHighlight}>Spotify</strong>{" "}
        stats.
      </h1>
      <a className={styles.subText}>
        See charts of your most listened to tracks and artists on three
        different timeframes. Data is refreshed daily.
      </a>
      <div className={styles.custom}>
        <DynamicContent></DynamicContent>
      </div>
    </div>
  )
}

export default Hero
