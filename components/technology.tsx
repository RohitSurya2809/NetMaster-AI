"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "Python",
    description: "Versatile programming language for AI and networking tasks.",
    image: "/placeholder-logo.svg",
  },
  {
    name: "Firebase",
    description: "Cloud platform for building and scaling web applications.",
    image: "/placeholder-logo.svg",
  },
  {
    name: "Hugging Face",
    description: "Open-source library for natural language processing.",
    image: "/placeholder-logo.svg",
  },
]

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="container" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="gradient-text">Technology</span> Stack
        </h2>
        <p className="text-foreground/70">
          We leverage cutting-edge technologies to build our AI-driven networking solutions, ensuring optimal
          performance, scalability, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={`bg-secondary rounded-xl p-6 flex items-center gap-4 border border-border/50 ${
              isInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={tech.image || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{tech.name}</h3>
              <p className="text-sm text-foreground/70">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="bg-secondary rounded-xl p-8 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Technical Approach</h3>
              <p className="text-foreground/70 mb-6">
                We combine state-of-the-art AI algorithms with robust networking principles to create solutions that are
                both innovative and reliable. Our approach focuses on:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data-Driven Decision Making</h4>
                    <p className="text-sm text-foreground/70">
                      We collect and analyze vast amounts of network data to train our AI models and inform our
                      algorithms.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Continuous Learning</h4>
                    <p className="text-sm text-foreground/70">
                      Our AI systems continuously learn and adapt to changing network conditions and requirements.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Edge Computing Integration</h4>
                    <p className="text-sm text-foreground/70">
                      We deploy AI capabilities at the network edge to enable real-time decision making with minimal
                      latency.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Scalable Architecture</h4>
                    <p className="text-sm text-foreground/70">
                      Our solutions are designed to scale seamlessly from small networks to large enterprise
                      deployments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-xl p-6 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-4">
                  <h4 className="font-semibold">Performance Comparison</h4>
                  <p className="text-sm text-foreground/70">AI-Driven vs. Traditional Networking</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Latency Reduction</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Throughput Improvement</span>
                      <span className="text-primary">70%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Fault Detection</span>
                      <span className="text-primary">95%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Energy Efficiency</span>
                      <span className="text-primary">60%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
