"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart2, GitFork, Shield, Zap, FileText } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    name: "Real-Time Analysis",
    description: "Monitor network performance metrics in real-time",
    href: "/dashboard/analysis",
    icon: Activity,
    color: "text-blue-500",
  },
  {
    name: "Congestion Prediction",
    description: "Predict and prevent network congestion",
    href: "/dashboard/congestion",
    icon: BarChart2,
    color: "text-purple-500",
  },
  {
    name: "Route Optimization",
    description: "Optimize network traffic routing",
    href: "/dashboard/routing",
    icon: GitFork,
    color: "text-green-500",
  },
  {
    name: "Security Threats",
    description: "Detect and analyze security threats",
    href: "/dashboard/security",
    icon: Shield,
    color: "text-red-500",
  },
  {
    name: "Adaptability",
    description: "Adjust network parameters in real-time",
    href: "/dashboard/adaptability",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    name: "Insights & Reports",
    description: "Generate comprehensive network reports",
    href: "/dashboard/reports",
    icon: FileText,
    color: "text-indigo-500",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Select a tool to analyze and optimize your network</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`w-8 h-8 ${tool.color}`}>
                  <tool.icon className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle>{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
