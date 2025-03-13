"use client";

import { useState, useEffect } from "react";
import "./Members.css";
import Adiyagg1 from "../Components/Images/Members/Adityagg1.jpg";
import pic2 from "../Components/Images/Members/AyushR1.jpg";
import pic3 from "../Components/Images/Members/Durvankur1.jpg";
import pic4 from "../Components/Images/Members/Kashish1.jpg";
import pic5 from "../Components/Images/Members/Kshitiz1.jpg";
import pic6 from "../Components/Images/Members/Navneet1.jpg";
import pic7 from "../Components/Images/Members/Poorab1.jpg";
import pic8 from "../Components/Images/Members/Prusty1.jpg";
import pic9 from "../Components/Images/Members/Richa1.jpeg";
import pic10 from "../Components/Images/Members/Rish1.jpg";
import pic11 from "../Components/Images/Members/Soumik1.jpg";
import pic12 from "../Components/Images/Members/Vedang1.jpg";
import pic13 from "../Components/Images/Members/Zeba1.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ImageGallery = () => {
  const imageData = [
    { id: 7, src: pic7, name: "Poorab Kumar" },
    { id: 6, src: pic6, name: "Navneet Berwal" },
    { id: 13, src: pic13, name: "Zeba HAQ" },
    { id: 11, src: pic11, name: "Soumik Biswas" },
    { id: 5, src: pic5, name: "Kshitiz Chadha" },
    { id: 9, src: pic9, name: "Richa Roy" },
    { id: 4, src: pic4, name: "Kashish Agrawal" },
    { id: 10, src: pic10, name: "Rishav Mishra" },
    { id: 1, src: Adiyagg1, name: "Aditya Agrawal" },
    { id: 2, src: pic2, name: "Ayush Raj" },
    { id: 3, src: pic3, name: "Durvankur Diwadkar" },
    { id: 12, src: pic12, name: "Vedang Chauhan" },
    { id: 8, src: pic8, name: "Abhishek Prusty" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverStates, setHoverStates] = useState(imageData.map(() => false));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridColumns = () => {
    if (windowWidth <= 480) return 1;
    if (windowWidth <= 768) return 2;
    if (windowWidth <= 1024) return 3;
    return 4;
  };

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const styles = {
    galleryContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
    },
    heading: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "bold",
      color: "red",
      marginBottom: "30px",
    },
    imageGallery: {
      display: "grid",
      gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
      gap: "5vw",
    },
    imageCard: (isHovered) => ({
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 0 20px rgba(225, 12, 12, 0.8)",
      transition: "transform 0.3s ease",
      transform: isHovered ? "translateY(-5px)" : "none",
    }),
    imageWrapper: {
      position: "relative",
      width: "100%",
      paddingTop: "100%", // Maintain a square aspect ratio
      overflow: "hidden",
    },
    image: (isHovered) => ({
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
      transform: isHovered ? "scale(1.05)" : "none",
    }),
    imageName: (isHovered) => ({
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "10px",
      transition: "transform 0.3s ease",
      textAlign: "center",
      fontWeight: 500,
      transform: isHovered ? "translateY(0)" : "translateY(100%)",
    }),
  };

  return (
    <>
    <Navbar/>
    <div style={styles.galleryContainer}>
      <h1 style={styles.heading}>ORGANISERS</h1>
      <div style={styles.imageGallery}>
        {imageData.map((image, index) => (
          <div
            key={image.id}
            style={styles.imageCard(hoverStates[index])}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div style={styles.imageWrapper}>
              <img src={image.src || "/placeholder.svg"} alt={image.name} style={styles.image(hoverStates[index])} />
              <div style={styles.imageName(hoverStates[index])}>{image.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default ImageGallery;