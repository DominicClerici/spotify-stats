import Header from "../header/Header"
import styles from "./layout.module.css"
import TimeChanger from "./TimeChange"
import Title from "./Title"

const layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="sectionContainer">
        <div className={styles.contentContainer}>
          <Title></Title>
          <div className={styles.itemListCont}>
            <div className={styles.itemList}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default layout
