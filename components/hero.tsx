"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Network Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text glow">NetMaster AI:</span>
              <br />
              AI-Driven Intelligent Networking
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              AI-Driven Intelligent Networking for Congestion Prediction, Traffic Optimization, and Security Management.
            </p>
          </div>

          <div
            className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <div className="p-1 rounded-xl bg-gradient-to-r from-primary/50 to-primary/20">
              <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold gradient-text">99.9%</p>
                    <p className="text-sm text-foreground/70">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold gradient-text">60%</p>
                    <p className="text-sm text-foreground/70">Cost Reduction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold gradient-text">5x</p>
                    <p className="text-sm text-foreground/70">Faster Response</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold gradient-text">24/7</p>
                    <p className="text-sm text-foreground/70">Monitoring</p>
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
