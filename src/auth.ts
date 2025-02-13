import NextAuth, { NextAuthConfig  } from "next-auth";


import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "./data/users";
import { CredentialsProviderError } from "./utils/CredentialsProviderError";


// 사용자 타입 정의
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}


// NextAuth 설정
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "email", required: true },
        // password: { label: "Password", type: "password", required: true },
      },
    
      async authorize(credentials: Partial<Record<"email" | "password", unknown>>):
        Promise<{ id: string; name: string; email: string } | null> {
    
        if (!credentials || !credentials.email || !credentials.password) {
          throw new CredentialsProviderError( "이메일과 비밀번호를 입력해주세요.", "email");
        }
    
        const email = credentials.email as string;
        const password = credentials.password as string;
        const user: User | null = getUserByEmail(email) as User;
    
        if (!user) throw new CredentialsProviderError("해당 이메일의 사용자를 찾을 수 없습니다.", "email");
   
        const isMatch = user.password === password;
        if (!isMatch) throw new CredentialsProviderError("비밀번호가 일치하지 않습니다.","password");
    
        return user;
      },
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  }
} satisfies NextAuthConfig);
