"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

function generateInsights(data: any) {
  // Simulate generating insights based on the data
  const insights = []

  if (data.latency > 80) {
    insights.push("High latency detected. Consider optimizing network routes.")
  }
  if (data.packetLoss > 5) {
    insights.push("High packet loss detected. Check for faulty network devices.")
  }
  if (data.trafficVolume > 1000) {
    insights.push("High traffic volume detected. Consider upgrading network capacity.")
  }

  return insights
}

function generateReportData(data: any) {
  // Simulate generating report data
  return {
    reportTitle: "Network Performance Report",
    dateGenerated: new Date().toLocaleDateString(),
    data: data,
    insights: generateInsights(data),
  }
}

export function InsightsAndReports() {
  const [latency, setLatency] = useState("")
  const [packetLoss, setPacketLoss] = useState("")
  const [trafficVolume, setTrafficVolume] = useState("")
  const [insights, setInsights] = useState<string[]>([])
  const { toast } = useToast()

  const handleGenerateInsights = () => {
    const data = {
      latency: parseFloat(latency),
      packetLoss: parseFloat(packetLoss),
      trafficVolume: parseFloat(trafficVolume),
    }

    const generatedInsights = generateInsights(data)
    setInsights(generatedInsights)
  }

  const handleDownloadReport = () => {
    const data = {
      latency: parseFloat(latency),
      packetLoss: parseFloat(packetLoss),
      trafficVolume: parseFloat(trafficVolume),
    }
    const reportData = generateReportData(data)
    const json = JSON.stringify(reportData, null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "network-performance-report.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Report Downloaded",
      description: "Network performance report has been downloaded.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Insights &amp; Reports</h1>
        <p className="text-muted-foreground">Generate actionable insights and reports based on network data</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Network Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="latency">Latency (ms)</Label>
              <Input
                type="number"
                id="latency"
                value={latency}
                onChange={(e) => setLatency(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="packetLoss">Packet Loss (%)</Label>
              <Input
                type="number"
                id="packetLoss"
                value={packetLoss}
                onChange={(e) => setPacketLoss(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="trafficVolume">Traffic Volume</Label>
              <Input
                type="number"
                id="trafficVolume"
                value={trafficVolume}
                onChange={(e) => setTrafficVolume(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleGenerateInsights}>Generate Insights</Button>
        </CardContent>
      </Card>

      {insights.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Button onClick={handleDownloadReport}>
        Download Report <Download className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
