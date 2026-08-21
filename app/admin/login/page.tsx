import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-4">
      <h1 className="text-2xl font-bold text-ink">Admin Login</h1>
      <p className="mt-1 text-sm text-steel">Jannat Al Adday — product photo dashboard</p>
      <LoginForm />
    </main>
  );
}
