import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './db'

const lineProvider = {
  id: 'line',
  name: 'LINE',
  type: 'oauth' as const,
  version: '2.0',
  authorization: {
    url: 'https://access.line.me/oauth2/v2.1/authorize',
    params: {
      scope: 'profile openid',
      response_type: 'code',
    },
  },
  token: 'https://api.line.me/oauth2/v2.1/token',
  userinfo: 'https://api.line.me/v2/profile',
  clientId: process.env.LINE_CLIENT_ID,
  clientSecret: process.env.LINE_CLIENT_SECRET,
  profile(profile: any) {
    return {
      id: profile.userId,
      name: profile.displayName,
      email: null, // LINEは基本的にemailを提供しない
      image: profile.pictureUrl,
      lineUserId: profile.userId,
    }
  },
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [lineProvider],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user, account }) {
      if (user) {
        token.lineUserId = (user as any).lineUserId
        token.stripeCustomerId = (user as any).stripeCustomerId
      }
      return token
    },
    session({ session, token }) {
      if (token) {
        (session.user as any).id = token.sub
        ;(session.user as any).lineUserId = token.lineUserId
        ;(session.user as any).stripeCustomerId = token.stripeCustomerId
      }
      return session
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'line') {
        // LINE特有の処理
        try {
          const lineProfile = profile as any
          const existingUser = await prisma.user.findUnique({
            where: { lineUserId: lineProfile?.userId },
          })

          if (existingUser) {
            // 既存ユーザーの情報を更新
            await prisma.user.update({
              where: { id: existingUser.id },
              data: {
                name: lineProfile?.displayName,
                image: lineProfile?.pictureUrl,
              },
            })
          } else {
            // 新規ユーザーの場合、lineUserIdを設定
            await prisma.user.update({
              where: { id: user.id },
              data: {
                lineUserId: lineProfile?.userId,
              },
            })
          }

          return true
        } catch (error) {
          console.error('Error during LINE sign in:', error)
          return false
        }
      }
      return true
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
}