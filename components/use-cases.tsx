"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Radio, Cpu, Building2, Car } from "lucide-react"
import Image from "next/image"

const useCases = [
  {
    id: "5g",
    title: "5G Networks",
    description: "Optimize 5G network performance with AI-driven traffic management and resource allocation.",
    icon: Radio,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "iot",
    title: "IoT Ecosystems",
    description: "Manage millions of connected devices with intelligent routing and predictive maintenance.",
    icon: Cpu,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "smart-cities",
    title: "Smart Cities",
    description: "Enable efficient urban infrastructure with AI-powered network solutions for public services.",
    icon: Building2,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "autonomous",
    title: "Autonomous Vehicles",
    description: "Support reliable, low-latency communication for self-driving vehicles and transportation systems.",
    icon: Car,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="container" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Use Cases</span> & Applications
        </h2>
        <p className="text-foreground/70">
          Our AI-driven networking solutions are transforming industries and enabling new possibilities across a wide
          range of applications.
        </p>
      </div>

      <div className="space-y-24">
        {useCases.map((useCase, index) => (
          <div
            key={useCase.id}
            id={useCase.id}
            className={`${isInView ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                </div>
                <p className="text-foreground/70 mb-6 text-lg">{useCase.description}</p>
                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold mb-2">Key Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>Enhanced performance and reliability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>Reduced latency and increased throughput</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>Automated optimization and resource allocation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                    <h4 className="font-semibold mb-2">Use Case Example</h4>
                    <p className="text-sm text-foreground/70">
                      A major telecommunications provider implemented our AI-driven networking solution to optimize
                      their 5G infrastructure, resulting in a 40% reduction in latency and 25% increase in network
                      capacity.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 rounded-xl"></div>
                  <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
