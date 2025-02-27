"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  {
    name: "Real-Time Analysis",
    description: "Monitor network performance metrics in real-time",
    href: "/tools/realtime-analysis",
  },
  {
    name: "Congestion Prediction",
    description: "Predict and prevent network congestion",
    href: "/tools/congestion-prediction",
  },
  {
    name: "Traffic Routing Optimization",
    description: "Optimize network traffic routing",
    href: "/tools/traffic-routing",
  },
  {
    name: "Self-Healing Network Simulator",
    description: "Simulate automatic rerouting of traffic",
    href: "/tools/self-healing",
  },
  {
    name: "Security Threat Detection",
    description: "Detect and analyze security threats",
    href: "/tools/security-threat",
  },
  {
    name: "Real-Time Adaptability",
    description: "Adjust network parameters in real-time",
    href: "/tools/realtime-adaptability",
  },
  {
    name: "Insights & Reports",
    description: "Generate comprehensive network reports",
    href: "/tools/insights-reports",
  },
]

export default function Tools() {
  return (
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="gradient-text">Tools</span>
        </h2>
        <p className="text-foreground/70">
          Explore our AI-driven networking tools to analyze, optimize, and secure your network infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
