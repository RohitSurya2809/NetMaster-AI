"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart2, GitFork, Shield, Settings, Zap, FileText, Network } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

const tools = [
  {
    title: "Analysis",
    items: [
      {
        name: "Real-Time Analysis",
        href: "/dashboard/analysis",
        icon: Activity,
      },
      {
        name: "Congestion Prediction",
        href: "/dashboard/congestion",
        icon: BarChart2,
      },
      {
        name: "Route Optimization",
        href: "/dashboard/routing",
        icon: GitFork,
      },
    ],
  },
  {
    title: "Network Management",
    items: [
      {
        name: "Self-Healing Simulator",
        href: "/dashboard/self-healing",
        icon: Network,
      },
      {
        name: "Security Threats",
        href: "/dashboard/security",
        icon: Shield,
      },
      {
        name: "Adaptability",
        href: "/dashboard/adaptability",
        icon: Zap,
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        name: "Insights & Reports",
        href: "/dashboard/reports",
        icon: FileText,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">AI</span>
          </div>
          <span className="font-bold text-lg">NetTools</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {tools.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
