"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Menu, X } from "lucide-react"
import { AuthDialog, SignInForm, LoginForm } from "@/components/auth-dialog" // Import SignInForm and LoginForm
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPortal, // Import AlertDialogPortal
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Tools", href: "/#tools" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "Technology", href: "/#technology" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [authMode, setAuthMode] = useState<"signIn" | "logIn">("signIn")
  const [showAuthDialog, setShowAuthDialog] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSignIn = (name: string) => {
    setIsLoggedIn(true)
    setUsername(name)
    setShowAuthDialog(false)
  }

  const handleLogIn = (name: string) => {
    setIsLoggedIn(true)
    setUsername(name)
    setShowAuthDialog(false)
  }

  const handleLogOut = () => {
    setIsLoggedIn(false)
    setUsername("")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">MA</span>
            </div>
            <span className="font-poppins font-bold text-xl">NetMaster AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span>Welcome, {username}</span>
              <Button onClick={handleLogOut}>Log Out</Button>
            </>
          ) : (
            <AlertDialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
              <AlertDialogTrigger asChild>
                <Button variant="ghost">
                  {authMode === "signIn" ? "Sign In" : "Log In"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogPortal>
                <AlertDialogContent>
                  <AuthDialogContent
                    onSignIn={handleSignIn}
                    onLogIn={handleLogIn}
                    authMode={authMode}
                    onClose={() => setShowAuthDialog(false)}
                  />
                </AlertDialogContent>
              </AlertDialogPortal>
            </AlertDialog>
          )}
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

interface AuthDialogProps {
  onSignIn: (username: string) => void
  onLogIn: (username: string) => void
  authMode: "signIn" | "logIn"
  onClose: () => void
}

function AuthDialogContent({ onSignIn, onLogIn, authMode, onClose }: AuthDialogProps) {
  const [showSignIn, setShowSignIn] = useState(authMode === "signIn")

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
