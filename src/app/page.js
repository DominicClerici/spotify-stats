import styles from "./page.module.css"
import Hero from "./components/Hero/Hero"
import "./homeGlobals.css"

const Page = async () => {
  return (
    <main>
      <div className={"sectionContainer"}>
        <Hero></Hero>
      </div>
    </main>
  )
}
export default Page
