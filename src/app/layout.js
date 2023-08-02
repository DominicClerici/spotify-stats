import Footer from "./footer/footer"
import Header from "./header/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "fallback",
})

export const metadata = {
  title: "Spotify Stats",
  description:
    "See charts of your most listened to tracks and artists on three different timeframes.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
