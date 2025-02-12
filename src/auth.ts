import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail } from "./data/users";


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
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      
      async authorize(credentials: Partial<Record<"email" | "password", unknown>>):
        Promise<{ id: string; name: string; email: string } | null> {
      
        try {
            if (credentials === null || !credentials.email || !credentials.password) return null;
            const email = credentials.email as string ;
            const password = credentials.password as string ;

            const user: User  =await  getUserByEmail(email) as User;

            if (user) {

              // const isPasswordValid = await verifyPassword(password, user.password);
              // if (!isPasswordValid) {
              //   throw new Error("비밀번호가 일치하지 않습니다.");
              // }
              const isMatch = user.password === password;
              if (!isMatch) {
                throw new Error("비밀 번호가 일치하지 않습니다.");
              }

              return user;
              
            } else {
              throw new Error("해당 이메일의 사용자를 찾을 수 없습니다.");
            }

        } catch (error) {
          console.error("로그인 에러:",error);
          return null;
        }

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
} satisfies NextAuthConfig);
