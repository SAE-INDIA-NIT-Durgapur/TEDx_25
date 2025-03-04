import React from 'react';
import { motion } from 'framer-motion';
import './Speakers.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Speakers = () => {
  return (
    <div>
    <Navbar/>
       <motion.div className='sp-head-container'>
    <motion.h1  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, staggerChildren:2}} className='speakers_headings'>Our Speakers</motion.h1>
    </motion.div>
<motion.div  initial={{y:110, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className='Speakers-body'>
  <div className="Speakers-cards-container">

    <div className="Speakers_contain" id="rupesh">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            RUPESH MAHORE
          </h1>
          <p>He is a developer and Programmer. he is also a great person. He founded XYZ comapany </p>
                  </div>
      </div>
    </div>

    <div className="Speakers_contain" id="kishwar">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            Lara
          </h1>
        </div>
      </div>
    </div>
    <div className="Speakers_contain" id="munish">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            Jack
          </h1>
          <span> Curator </span>
      
        </div>
      </div>
    </div>

    <div className="Speakers_contain" id="kamna">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            Jack
          </h1>
          <span> Curator </span>
      
        </div>
      </div>
    </div>

    <div className="Speakers_contain" id="munish">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            Jack
          </h1>
          <span> Curator </span>
      
        </div>
      </div>
    </div>

    <div className="Speakers_contain" id="kamna">
      <div className="Speakers_inner">
        <div className="Sp-text">
          <h1>
            Jack
          </h1>
          <span> Curator </span>
      
        </div>
      </div>
    </div>
  </div>
    </motion.div>
    <Footer/>
    </div>
  )
}

export default Speakers