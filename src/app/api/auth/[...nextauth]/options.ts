import { NextAuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const SPOTIFY_REFRESH_TOKEN_URL = "https://accounts.spotify.com/api/token"
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

export const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,user-top-read,playlist-modify-private,playlist-modify-public",
      // scope: "user-read-email user-read-private user-top-read playlist-modify-private playlist-modify-public",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          user,
        }
      }
      // @ts-ignore
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token
      }
      const newToken = await refreshAccessToken(token)
      return newToken
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken
      // @ts-ignore
      session.error = token.error
      session.user = token.user
      return session
    },
  },
}
// @ts-ignore
async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    )
    const data = await fetch(SPOTIFY_REFRESH_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return {
      ...token,
      // @ts-ignore
      accessToken: data.access_token,
      // @ts-ignore
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    }
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}
