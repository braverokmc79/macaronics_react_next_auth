"use server";
import { signIn, signOut } from "@/auth";


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
