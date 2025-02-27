"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SelfHealingPage() {
  const [routerToDisable, setRouterToDisable] = useState("Router A")
  const [simulationResult, setSimulationResult] = useState("")

  const handleSimulate = () => {
    // Simulate self-healing network
    setSimulationResult(
      `Router ${routerToDisable} disabled. Traffic rerouted through Router B. New network performance displayed.`
    )
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Self-Healing Network Simulator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="routerToDisable">Router to Disable</Label>
          <Input
            type="text"
            id="routerToDisable"
            value={routerToDisable}
            onChange={(e) => setRouterToDisable(e.target.value)}
          />
          <Button onClick={handleSimulate}>Analyze</Button>
          {simulationResult && <p>{simulationResult}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
