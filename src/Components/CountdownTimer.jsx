"use client"

import { useState, useEffect } from "react"
import { FaRegClock } from "react-icons/fa" // Import timer icon
import "./CountdownTimer.css"

const CountdownTimer = () => {
  const target = new Date("March 15, 2025 00:00:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [changing, setChanging] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }

        const newChanging = {
          days: newTimeLeft.days !== timeLeft.days,
          hours: newTimeLeft.hours !== timeLeft.hours,
          minutes: newTimeLeft.minutes !== timeLeft.minutes,
          seconds: newTimeLeft.seconds !== timeLeft.seconds,
        }

        setTimeLeft(newTimeLeft)
        setChanging(newChanging)

        setTimeout(() => {
          setChanging({
            days: false,
            hours: false,
            minutes: false,
            seconds: false,
          })
        }, 300)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [target, timeLeft])

  const formatNumber = (num) => num.toString().padStart(2, "0")

  return (
    <div className="countdown-container">
      {/* Countdown Header */}
      <div className="countdown-header">
        <h1><span style={{color:"red", fontWeight:"bolder"}}>TEDxNITDurgapur</span> Starts in</h1>
      </div>

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value-container">
            <div className={`countdown-value ${changing.days ? "flicker" : ""}`}>{formatNumber(timeLeft.days)}</div>
          </div>
          <div className="countdown-label">Days</div>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-item">
          <div className="countdown-value-container">
            <div className={`countdown-value ${changing.hours ? "flicker" : ""}`}>{formatNumber(timeLeft.hours)}</div>
          </div>
          <div className="countdown-label">Hours</div>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-item">
          <div className="countdown-value-container">
            <div className={`countdown-value ${changing.minutes ? "flicker" : ""}`}>
              {formatNumber(timeLeft.minutes)}
            </div>
          </div>
          <div className="countdown-label">Minutes</div>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-item">
          <div className="countdown-value-container">
            <div className={`countdown-value ${changing.seconds ? "flicker" : ""}`}>
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
