"use client"

import * as React from "react"
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthFormProps {
  onClose: () => void
  onSignIn?: (username: string) => void
  onLogIn?: (username: string) => void
}

export function SignInForm({ onClose, onSignIn }: AuthFormProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSignIn) {
      onSignIn(name)
    }
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="submit">Sign In</AlertDialogAction>
      </AlertDialogFooter>
    </form>
  )
}

export function LoginForm({ onClose, onLogIn }: AuthFormProps) {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onLogIn) {
      onLogIn(username)
    }
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="submit">Log In</AlertDialogAction>
      </AlertDialogFooter>
    </form>
  )
}

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSignIn: (username: string) => void
  onLogIn: (username: string) => void
  authMode: "signIn" | "logIn"
}

export function AuthDialogContent({ onSignIn, onLogIn, authMode, onClose }: AuthDialogProps) {
  const [showSignIn, setShowSignIn] = React.useState(authMode === "signIn")

  React.useEffect(() => {
    setShowSignIn(authMode === "signIn")
  }, [authMode])

  const handleToggle = () => {
    setShowSignIn((prev) => !prev)
  }

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>{showSignIn ? "Sign In" : "Log In"}</AlertDialogTitle>
        <AlertDialogDescription>
          {showSignIn
            ? "Enter your details to create an account."
            : "Enter your username and password to log in."}
        </AlertDialogDescription>
      </AlertDialogHeader>
      {showSignIn ? (
        <SignInForm onClose={onClose} onSignIn={onSignIn} />
      ) : (
        <LoginForm onClose={onClose} onLogIn={onLogIn} />
      )}
      <div className="text-center">
        <Button variant="link" onClick={handleToggle}>
          {showSignIn ? "Already have an account? Log In" : "Need an account? Sign In"}
        </Button>
      </div>
    </>
  )
}
