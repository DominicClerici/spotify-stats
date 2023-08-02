import Link from "next/link"
import styles from "./Header.module.css"
import SignOut from "./signOut"
import Image from "next/image"
import track from "./images/tracks.png"
import artist from "./images/artists.png"

const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.button} href={"/list/tracks"}>
        <Image src={track} width={40} height={40} alt="tracks"></Image>
      </Link>
      <Link className={styles.button} href={"/list/artists"}>
        {" "}
        <Image src={artist} width={40} height={40} alt="artists"></Image>
      </Link>
      <SignOut></SignOut>
    </header>
  )
}

export default Header
