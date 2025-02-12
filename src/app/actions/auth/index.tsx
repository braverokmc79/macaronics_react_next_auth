"use server";
import { signIn, signOut } from "@/auth";
import { SignInResponse } from "next-auth/react";


export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get("action");

    if (!action || typeof action !== "string") {
        throw new Error("Invalid action provided for login.");
    }

    await signIn(action, { redirectTo: "/home" });
}

export async function doLogout(): Promise<void> {
    await signOut({redirectTo: "/"});    
}





export async function doCredentialsLogin({email,password}: {email: string;password: string}): Promise<SignInResponse | null> {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      email: email!,
      password: password!,
    });

    return response;
  } catch (err) {
    console.error("로그인 오류:", err);
    throw new Error("Failed to sign in with credentials.");
  }
}