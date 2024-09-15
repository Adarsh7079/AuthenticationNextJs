import NextAuth from "next-auth"
import Googleprovider from "next-auth/providers/google"
import CredentialProvider from 'next-auth/providers/credentials'
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Googleprovider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
        name:"Credentials",
        credentials:{
            email:{
                label:"Email",
                type:"email"
            },
            password:{label:"Password",type:"Password"}
        },
        // Authorize function to store in database
    })
  ]
})
