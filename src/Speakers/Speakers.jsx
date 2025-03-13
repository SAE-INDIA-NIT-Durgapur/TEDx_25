import React from "react";
import { motion } from "framer-motion";
import "./Speakers.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Pooja from "./Pooja_Patel.jpg";
import Dhanraj from "./Dhanraj.jpg"

const speakersData = [
  {
    name: "POOJA PATEL",
    image: Pooja,
    details:
      "❝Certified Financial Planner (CFP) managing 100+ CR AUM, she specializes in investment, retirement, and goal-based planning. She has guided thousands to financial independence and educates a 400K+ online community on wealth creation❞",
  },
  {
    name: "Dhanraj Dadhich",
    image: Dhanraj,
    details:
      "❝A visionary CTO with 24 years of expertise in Blockchain, IoT, Quantum Computing, and AI, driving innovation and revenue growth. His mastery in design, development, and integration turns ambitious visions into reality❞",
  },
];

const pastSpeakersData = [
  {
    name: "Ashutosh Pratihast",
    image:
      "https://i.ibb.co/nqt3gX9w/Ashutosh.jpg",
    details: "Youtuber | CEO | TEDx Speaker",
  },
  {
    name: "Prachi Tehlan",
    image:
      "https://i.ibb.co/FkY8pgkp/Prachi.jpg",
    details: "Basketball player | Actress | NGO Founder",
  },
  {
    name: "Sinjini Sengupta",
    image:
      "https://i.ibb.co/239gLT2N/Sinjini.jpg",
    details: "Author | Tedx Speaker",
  },
  {
    name: "Yogendra Singh Rathore",
    image:
      "https://i.ibb.co/spWdXQLx/Yogendra.jpg",
    details: "Mental Wellness Coach | Author | Founder",
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


