"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TrafficRoutingPage() {
  const [routerA, setRouterA] = useState("Router A")
  const [suggestion, setSuggestion] = useState("")

  const handleOptimize = () => {
    // Simulate traffic routing optimization
    setSuggestion(`Rerouting traffic from ${routerA} through Router B. New path displayed.`)
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Traffic Routing Optimization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="routerA">Router A</Label>
          <Input
            type="text"
            id="routerA"
            value={routerA}
            onChange={(e) => setRouterA(e.target.value)}
          />
          <Button onClick={handleOptimize}>Analyze</Button>
          {suggestion && <p>{suggestion}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
