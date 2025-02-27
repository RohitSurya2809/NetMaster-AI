"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CongestionPredictionPage() {
  const [routerId, setRouterId] = useState("Router X")
  const [trafficVolume, setTrafficVolume] = useState("500")
  const [prediction, setPrediction] = useState("")

  const handlePredict = () => {
    const volume = parseFloat(trafficVolume)
    const congestionThreshold = 800 // Example threshold

    if (volume > congestionThreshold) {
      setPrediction(
        `Congestion predicted at ${routerId} due to high traffic volume (${trafficVolume}). Suggest alternative routes.`
      )
    } else {
      setPrediction(`No congestion predicted at ${routerId}.`)
    }
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Congestion Prediction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="routerId">Router ID</Label>
          <Input
            type="text"
            id="routerId"
            value={routerId}
            onChange={(e) => setRouterId(e.target.value)}
          />
          <Label htmlFor="trafficVolume">Traffic Volume</Label>
          <Input
            type="number"
            id="trafficVolume"
            value={trafficVolume}
            onChange={(e) => setTrafficVolume(e.target.value)}
          />
          <Button onClick={handlePredict}>Analyze</Button>
          {prediction && <p>{prediction}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
