import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/libs/prismadb"
import bcrypt from "bcrypt"

 
export const authOptions:AuthOptions = {
   adapter:PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if(!credentials ?.email || !credentials.password){
          throw new Error("Geçersiz email yada şifre")
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })
        if(!user || !user.hashedPassword ){
          throw new Error("Geçersiz email yada şifre")
        }
        const comparePassword = await bcrypt.compare(credentials.password ,user.hashedPassword)
         
        if(!comparePassword ){
          throw new Error("Yanlış şifre")
        }
         return user
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
   debug:process.env.NODE_ENV === "development",
   session: {
    strategy: 'jwt',
  },
   secret:process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)