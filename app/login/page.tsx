import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - FlowSaaS",
  description: "Sign in to your FlowSaaS account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-foreground">
            FlowSaaS
          </Link>
          <h1 className="text-2xl font-bold text-foreground mt-6 mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
