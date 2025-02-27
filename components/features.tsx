"use client"

import { useRef } from "react"
import { Network, BarChart3, RefreshCw, Shield } from "lucide-react"
import { useInView } from "framer-motion"

const features = [
  {
    id: "traffic-management",
    title: "Intelligent Traffic Management",
    description:
      "Optimize network traffic in real-time with AI-powered routing algorithms that adapt to changing conditions.",
    icon: Network,
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Forecast network issues before they occur with machine learning models trained on historical performance data.",
    icon: BarChart3,
  },
  {
    id: "self-healing",
    title: "Self-Healing Networks",
    description: "Automatically detect and resolve network failures without human intervention, minimizing downtime.",
    icon: RefreshCw,
  },
  {
    id: "security",
    title: "Security Enhancements",
    description: "Identify and mitigate security threats in real-time with advanced anomaly detection algorithms.",
    icon: Shield,
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="container" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful <span className="gradient-text">AI Features</span>
        </h2>
        <p className="text-foreground/70">
          Our AI-driven networking solutions provide cutting-edge capabilities that transform how networks operate,
          delivering unprecedented efficiency, security, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            id={feature.id}
            className={`bg-secondary rounded-xl p-6 card-hover border border-border/50 ${
              isInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-secondary rounded-xl p-8 border border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Real-Time Network Visualization</h3>
            <p className="text-foreground/70 mb-6">
              Our advanced visualization tools provide real-time insights into your network's performance, allowing you
              to identify bottlenecks, track traffic patterns, and optimize resource allocation.
            </p>
            <ul className="space-y-2">
              {[
                "Interactive network topology maps",
                "Real-time traffic flow visualization",
                "Performance metrics dashboards",
                "Anomaly highlighting and alerts",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background/50 rounded-xl p-4 h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-foreground/50 mb-2">Network Visualization Demo</p>
              <div className="w-full h-[200px] bg-background rounded-lg border border-border/50 flex items-center justify-center">
                <p className="text-sm text-foreground/30">Interactive visualization would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
