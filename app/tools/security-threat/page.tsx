"use client"

import React, { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function SecurityThreatPage() {
  const [ipAddress, setIpAddress] = useState("115.247.189.246")
  const [threat, setThreat] = useState("")
  const { toast } = useToast()
  const [analysisDetails, setAnalysisDetails] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const generateRandomASN = () => Math.floor(Math.random() * 65535) + 1
  const generateRandomCity = () => ["Chennai", "Mumbai", "Delhi", "Kolkata"][Math.floor(Math.random() * 4)]
  const generateRandomState = () => ["Tamil Nadu", "Maharashtra", "Delhi", "West Bengal"][Math.floor(Math.random() * 4)]
  const generateRandomPostalCode = () => String(Math.floor(Math.random() * 899999) + 100000)

  const analysisData = useRef<string[]>([])

  useEffect(() => {
    analysisData.current = [
      `IP Address: ${ipAddress}`,
      `ASN: 55836`,
      `City: Chennai`,
      `State/Region: Tamil Nadu`,
      "Country: India",
      `Postal Code: 600099`,
      "ISP: Reliance JIO Infocomm Limited",
      "Time Zone: +0530",
    ]
  }, [ipAddress])

  const handleDetect = () => {
    setIsAnalyzing(true)
    setAnalysisDetails([])
    setThreat("")

    let index = 0
    const interval = setInterval(() => {
      if (index < analysisData.current.length) {
        setAnalysisDetails((prev) => [...prev, analysisData.current[index]])
        index++
      } else {
        clearInterval(interval)
        setIsAnalyzing(false)
        if (ipAddress === "192.168.255.255") {
          setThreat(`Potential broadcast attack detected from IP ${ipAddress}. Suggest blocking the IP.`)
          toast({
            title: "Security Threat Detected",
            description: `Potential broadcast attack from IP ${ipAddress}`,
            variant: "destructive",
          })
        } else if (ipAddress !== "115.247.189.246") {
          setThreat("IP Address details unavailable")
          setAnalysisDetails([])
        } else {
          setThreat(`No immediate threat detected from IP ${ipAddress}.`)
          toast({
            title: "No Threat Detected",
            description: `No immediate threat detected from IP ${ipAddress}`,
          })
        }
      }
    }, 500)
  }

  function generateRandomIP() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".")
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Security Threat Detection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="ipAddress">IP Address</Label>
          <Input
            type="text"
            id="ipAddress"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            disabled={isAnalyzing}
          />
          <Button onClick={handleDetect} disabled={isAnalyzing}>
            {isAnalyzing ? "Analyzing..." : "Analyze"}
          </Button>
          {analysisDetails.length > 0 && (
            <div>
              <h4 className="font-semibold">Analysis Details:</h4>
              <ul className="list-disc pl-5">
                {analysisDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {threat && <p>{threat}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
