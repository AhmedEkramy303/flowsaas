"use client"

import { signIn } from "next-auth/react"
import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"



export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-foreground">
            FlowSaaS
          </Link>
          <h1 className="text-2xl font-bold text-foreground mt-6 mb-2">
            Create your account
          </h1>
          <p className="text-muted-foreground">
            Start your 14-day free trial today
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
          >
            Continue with GitHub
          </button>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded hover:bg-gray-100"
          >
            Continue with Google
          </button>
        </div>

        {/* Email/Password Signup Form */}
        <SignupForm />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
