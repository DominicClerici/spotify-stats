"use client"
import { getSession, signOut } from "next-auth/react"
import styles from "../pagestyle.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import TimeChanger from "../TimeChange"

const getTracks = (set, auth, time) => {
  fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${
      time ? time : "short_term"
    }&limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((res) => {
      if (res.status == 401) {
        return "bad token"
      } else {
        return res.json()
      }
    })
    .then((data) => {
      if (data === "bad token") {
        set("bad token")
      } else {
        let retArr = data.items.map((e, i) => {
          return {
            name: e.name,
            artist: e.artists.map((e) => e.name),
            url: e.external_urls.spotify,
            imageUrl: e.album.images[2].url,
            rank: i + 1,
          }
        })
        set(retArr)
      }
    })
}

const Track = ({ title, url, artist, image, rank }) => {
  return (
    <div className={styles.trackContainer}>
      <a href={url} target="_blank">
        <div className={styles.infoCont}>
          <span className={styles.rank}>{rank}</span>
          <div className={styles.imageCont}>
            <Image src={image} fill alt={`image for ${title}`}></Image>
          </div>
          <span className={styles.stack}>
            <span className={styles.artist}>{artist.join(", ")}</span>
            <span className={styles.name}>{title}</span>
          </span>
        </div>
      </a>
    </div>
  )
}

const Page = () => {
  const { push } = useRouter()
  const [currentView, setCurrentView] = useState("short_term")
  const [authkey, setAuthkey] = useState(undefined)
  const [data, setData] = useState(undefined)
  useEffect(() => {
    getSession().then((d) => {
      if (d) {
        setAuthkey(d.accessToken)
        getTracks(setData, d.accessToken, currentView)
      } else {
        push("/")
      }
    })
  }, [])
  useEffect(() => {
    setData(undefined)
    if (authkey && currentView) {
      getTracks(setData, authkey, currentView)
    } else if (authkey) {
      getTracks(setData, authkey)
    }
  }, [currentView])

  if (data === "bad token") {
    signOut()
    push("/")
  }
  return (
    <>
      <ul className={styles.itemListSelectors}>
        <li>
          <TimeChanger
            curr={currentView}
            set={setCurrentView}
            type="short"
          ></TimeChanger>
        </li>
        <li>
          <TimeChanger
            curr={currentView}
            set={setCurrentView}
            type="med"
          ></TimeChanger>
        </li>
        <li>
          <TimeChanger
            curr={currentView}
            set={setCurrentView}
            type="long"
          ></TimeChanger>
        </li>
      </ul>
      {typeof data === "object" ? (
        <div className={styles.dataContainer}>
          {data.map((e, i) => {
            return (
              <Track
                key={"tr" + i}
                url={e.url}
                image={e.imageUrl}
                rank={e.rank}
                title={e.name}
                artist={e.artist}
              ></Track>
            )
          })}
        </div>
      ) : (
        <h1 className={styles.loading}>Loading...</h1>
      )}
    </>
  )
}

export default Page
