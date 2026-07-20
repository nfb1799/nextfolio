"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const redirectTo = formData.get("redirectTo")?.toString() || "/dashboard";
  const cookieStore = await cookies();
  cookieStore.set("session", "true", { httpOnly: true, path: "/" });
  redirect(redirectTo);
}