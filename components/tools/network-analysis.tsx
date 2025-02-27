"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { Upload, AlertTriangle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Simulated data generation
function generateNetworkData(points = 20) {
  return Array.from({ length: points }, (_, i) => ({
    time: new Date(Date.now() - (points - i) * 1000).toLocaleTimeString(),
    latency: Math.floor(Math.random() * 90) + 10,
    packetLoss: Math.random() * 5,
    throughput: Math.floor(Math.random() * 900) + 100,
  }))
}

export function NetworkAnalysisTool() {
  const [data, setData] = useState(generateNetworkData())
  const [alerts, setAlerts] = useState<string[]>([])
  const { toast } = useToast()

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = {
        time: new Date().toLocaleTimeString(),
        latency: Math.floor(Math.random() * 90) + 10,
        packetLoss: Math.random() * 5,
        throughput: Math.floor(Math.random() * 900) + 100,
      }

      // Check for anomalies
      if (newPoint.latency > 80) {
        setAlerts((prev) => [...prev, `High latency detected: ${newPoint.latency}ms`])
        toast({
          title: "High Latency Alert",
          description: `Latency spike detected: ${newPoint.latency}ms`,
          variant: "destructive",
        })
      }

      setData((prev) => [...prev.slice(1), newPoint])
    }, 1000)

    return () => clearInterval(interval)
  }, [toast])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      toast({
        title: "File Uploaded",
        description: "Network log file has been uploaded and is being processed.",
      })
      // In a real application, you would process the file here
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Network Analysis</h1>
        <p className="text-muted-foreground">Monitor and analyze your network performance in real-time</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upload Network Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Input type="file" accept=".csv,.json" onChange={handleFileUpload} />
              <Button size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {alerts.length > 0 && (
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {alerts.slice(-3).map((alert, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertTitle>Alert</AlertTitle>
                    <AlertDescription>{alert}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Tabs defaultValue="latency" className="space-y-4">
        <TabsList>
          <TabsTrigger value="latency">Latency</TabsTrigger>
          <TabsTrigger value="packetLoss">Packet Loss</TabsTrigger>
          <TabsTrigger value="throughput">Throughput</TabsTrigger>
        </TabsList>

        <TabsContent value="latency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Latency</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="latency" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="packetLoss" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Packet Loss</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="packetLoss" stroke="#dc2626" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="throughput" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Throughput</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="throughput" stroke="#16a34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
