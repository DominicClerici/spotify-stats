import styles from "./pagestyle.module.css"

const TimeChanger = ({ type, set, curr }) => {
  if (type == "short") {
    const click = () => {
      set("short_term")
    }
    return (
      <a
        className={curr == "short_term" ? styles.selected : null}
        onClick={click}
      >
        1 Month
      </a>
    )
  } else if (type == "med") {
    const click = () => {
      set("medium_term")
    }
    return (
      <a
        className={curr == "medium_term" ? styles.selected : null}
        onClick={click}
      >
        6 Months
      </a>
    )
  } else if (type == "long") {
    const click = () => {
      set("long_term")
    }
    return (
      <a
        className={curr == "long_term" ? styles.selected : null}
        onClick={click}
      >
        All time
      </a>
    )
  }
}

export default TimeChanger
