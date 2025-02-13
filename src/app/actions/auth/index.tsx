"use server";
import { signIn, signOut } from "@/auth";
import { SignInResponse } from "next-auth/react";
import { AuthError } from "next-auth";
import { CredentialsProviderError } from "@/utils/CredentialsProviderError";

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




interface CustomSignInResponse extends SignInResponse {
  field?: string;
}
export async function doCredentialsLogin({email,password,}: {email: string;password: string;})
  : Promise<CustomSignInResponse | null> {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    return response;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CallbackRouteError':
          if (
            error.cause &&
            typeof error.cause === 'object' &&
            'err' in error.cause
          ) {
            const cause = error.cause as { err: { code?: string } };
            if (cause.err && cause.err.code === 'credentials') {
              return {
                error: 'Invalid credentials',
                code: undefined,
                status: 403,
                ok: false,
                url: null,
              };
            }
          }
        default:
          if (error.message) {
            // 정규식을 사용하여 "Read more at https://errors.authjs.dev#autherror" 제거
            const cleanedMessage = error.message.replace(/\.?\s*Read more at https:\/\/errors\.authjs\.dev#autherror/, "");
            

            return {
              error: cleanedMessage,
              code: undefined,
              status: 403,
              ok: false,
              url: null,
              field: (error as CredentialsProviderError).field,             
            };
          }
      }
    }

    throw error;
  }
}
