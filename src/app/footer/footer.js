import styles from "./footer.module.css"
import DyamicContent from "./DyamicContent"

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={`sectionClass ${styles.contentCont}`}>
        <div className={styles.col}>
          <a className={styles.str}>Made with love by D.C. Code</a>
          <a>Email me</a>
          <a>if mobile call me</a>
          <a>See my other work</a>
        </div>
        <div className={styles.col}>
          <DyamicContent></DyamicContent>
        </div>
        <div className={styles.col}>
          <a>Copyright 2023 D.C. Code</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default footer
