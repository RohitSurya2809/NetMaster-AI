"use client"

import React, { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// Simulated data generation
function generateNetworkData(points = 20) {
  return Array.from({ length: points }, (_, i) => ({
    time: new Date(Date.now() - (points - i) * 2000).toLocaleTimeString(),
    latency: Math.floor(Math.random() * 6) + 1, // Realistic latency between 1 and 7 ms
    packetLoss: Math.random() * 5,
    throughput: Math.floor(Math.random() * 900) + 100,
  }))
}

export default function RealTimeAnalysisPage() {
  const [data, setData] = useState(generateNetworkData())
  const dataRef = useRef(data)

  useEffect(() => {
    dataRef.current = data
  }, [data])

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        time: new Date().toLocaleTimeString(),
        latency: Math.floor(Math.random() * 6) + 1, // Realistic latency between 1 and 7 ms
        packetLoss: Math.random() * 5,
        throughput: Math.floor(Math.random() * 900) + 100,
      }

      // Calculate moving average for latency
      const newData = [...dataRef.current.slice(1), newPoint]
      const avgLatency =
        newData.reduce((sum, point) => sum + point.latency, 0) / newData.length

      setData(newData)
    }, 2000) // Update every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Analysis</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[0, 8]} /> {/* Adjust Y-axis domain */}
              <Tooltip />
              <Line type="monotone" dataKey="latency" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
