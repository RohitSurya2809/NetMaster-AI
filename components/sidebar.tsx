"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import {
  Home,
  Layers,
  Database,
  Mail,
  Github,
  Twitter,
  Linkedin,
  BarChart3,
  Shield,
  RefreshCw,
  Network,
  Cpu,
  Radio,
  Building2,
  Car,
  Wrench,
  Zap,
  Activity,
  GitFork,
  Settings,
  FileText,
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
const mainLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/#features", icon: Zap },
  { name: "Tools", href: "/#tools", icon: Wrench },
  { name: "Use Cases", href: "/#use-cases", icon: Layers },
  { name: "Technology", href: "/#technology", icon: Database },
  { name: "Contact", href: "/#contact", icon: Mail },
]

const featureLinks = [
  { name: "Traffic Management", href: "/#traffic-management", icon: Network },
  { name: "Predictive Analytics", href: "/#predictive-analytics", icon: BarChart3 },
  { name: "Self-Healing Networks", href: "/#self-healing", icon: RefreshCw },
  { name: "Security Enhancements", href: "/#security-enhancements", icon: Shield },
]

const useCaseLinks = [
  { name: "5G Networks", href: "/#5g", icon: Radio },
  { name: "IoT Ecosystems", href: "/#iot", icon: Cpu },
  { name: "Smart Cities", href: "/#smart-cities", icon: Building2 },
  { name: "Autonomous Vehicles", href: "/#autonomous", icon: Car },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open sidebar">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-3/4 sm:max-w-sm">
          <SidebarHeader className="border-b p-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">MA</span>
              </div>
              <span className="font-poppins font-bold text-xl">NetMaster AI</span>
            </Link>
          </SidebarHeader>

          <SidebarContent>
            {mainLinks.map((link) => (
              <SidebarGroup key={link.name}>
                <SidebarGroupLabel>{link.name}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem key={link.href}>
                      <SidebarMenuButton asChild>
                        <Link href={link.href}>
                          <link.icon className="h-4 w-4" />
                          <span>{link.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <SidebarComponent variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center justify-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">MA</span>
          </div>
          <span className="font-poppins font-bold text-xl">NetMaster AI</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild tooltip={link.name}>
                    <Link href={link.href}>
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {featureLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild tooltip={link.name}>
                    <Link href={link.href}>
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Use Cases</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {useCaseLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild tooltip={link.name}>
                    <Link href={link.href}>
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex justify-center gap-4">
          <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  )
}
