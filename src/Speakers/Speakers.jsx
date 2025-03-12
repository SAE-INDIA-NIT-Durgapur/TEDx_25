import React from "react";
import { motion } from "framer-motion";
import "./Speakers.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const speakersData = [
  {
    name: "RUPESH MAHORE",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: '"Cybersecurity Expert | Speaker at DEFCON 2023"',
  },
  {
    name: "Lara",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: "AI Researcher | Guest Lecturer at MIT",
  },
  {
    name: "Jack",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: "Ethical Hacker | Author of 'Hacking Unleashed'",
  },
];

const pastSpeakersData = [
  {
    name: "Alice",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: "Blockchain Specialist | TEDx Speaker",
  },
  {
    name: "Bob",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: "Quantum Computing Expert | Author",
  },
  {
    name: "Charlie",
    image:
      "https://635124c34eeff312c9586ae2--subtle-rabanadas-ef52a0.netlify.app/static/media/rupesh.b713abf3.jpeg",
    details: "Data Scientist | Forbes 30 Under 30",
  },
  
];

const Speakers = () => {
  return (
    <div>
      <Navbar />
      <motion.div className="sp-head-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="speakers_headings"
        >
          Our Speakers
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="Speakers-body"
      >
        <div className="Speakers-cards-container">
          {speakersData.map((speaker, index) => (
            <div key={index} className="Speakers_contain">
              <div className="Speakers_inner">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="Speaker-image"
                />
                <div className="Speaker-overlay">
                  <h3>{speaker.name}</h3>
                  <p>{speaker.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="sp-head-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="speakers_headings"
        >
          Past Speakers
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="Speakers-body"
      >
        <div className="Speakers-cards-container">
          {pastSpeakersData.map((speaker, index) => (
            <div key={index} className="Speakers_contain">
              <div className="Speakers_inner">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="Speaker-image"
                />
                <div className="Speaker-overlay">
                  <h3>{speaker.name}</h3>
                  <p>{speaker.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Speakers;

