"use client"

import { useEffect, useState } from "react"
import "./Carousel.css"
import pic from "../Components/Images/pic.jpeg"
import leadership from "../Components/Images/Leadership1.png"
import tedx from "../Components/Images/tedx.jpg"
import tedx2 from "../Components/Images/tedx2.jpg"
import creativity from "../Components/Images/creativity.jpg"
import idea from "../Components/Images/TedxPhoto3.jpg"
import vision from "../Components/Images/vision.jpg"
import design from "../Components/Images/design.jpg"

const Carousel = ({ direction, speed }) => {
  const [items, setItems] = useState([])

  const speedMultiplier = speed === "slow" ? 40 : speed === "normal" ? 30 : 20
  const animationDuration = speedMultiplier
  const animationDirection = direction === "up" ? "upwards" : "downwards"

  useEffect(() => {
    const tedxItems = [
      { word: "Ideas", imageUrl: idea },
      { word: "Innovation", imageUrl: tedx },
      { word: "Design", imageUrl: design },
      { word: "Creativity", imageUrl: creativity },
      { word: "Technology", imageUrl: tedx2 },
      { word: "Entertainment", imageUrl: pic },
      { word: "Leadership", imageUrl: leadership },
      { word: "Vision", imageUrl: vision },
    ]

    setItems([...tedxItems, ...tedxItems])
  }, [])

  return (
    <div className={`carousel ${direction === "up" ? "left" : "right"}`}>
      <div
        className={`carousel-inner ${animationDirection}`}
        style={{
          animationDuration: `${animationDuration}s`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-image-container">
              <img src={item.imageUrl || "/placeholder.svg"} alt={item.word} />
            </div>
            <p className="carousel-label">{item.word}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
