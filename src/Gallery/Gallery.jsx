import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Gallery.css"; // Import CSS for styling
import pic11 from "../Components/Images/Gallery/pic11.JPG"; 
import pic12 from "../Components/Images/Gallery/pic12.JPG"; 
import pic10 from "../Components/Images/Gallery/pic10.jpg"; 
import pic9 from "../Components/Images/Gallery/pic9.jpg";
import pic8 from "../Components/Images/Gallery/pic8.JPG";
import pic7 from "../Components/Images/Gallery/pic7.JPG";
import pic6 from "../Components/Images/Gallery/pic6.JPG";
import pic5 from "../Components/Images/Gallery/pic5.JPG";
import pic4 from "../Components/Images/Gallery/pic4.JPG";
import pic3 from "../Components/Images/Gallery/pic3.JPG";
import pic2 from "../Components/Images/Gallery/pic2.JPG";
import pic1 from "../Components/Images/Gallery/pic1.JPG";
import Footer from "../Footer/Footer";

// Image array
const importedImages = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="gallery-main">
        <h1>Gallery</h1>
        <div className="gallery-container">
          {importedImages.map((image, index) => (
            <div className="gallery-item" key={index} onClick={() => setSelectedImage(image)}>
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal (Pop-up View) */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged" className="modal-image" />
            {/* <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button> */}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
