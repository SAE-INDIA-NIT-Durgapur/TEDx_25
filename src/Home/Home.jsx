import Carousel from "../Components/Carousel"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import CountdownTimer from "../Components/CountdownTimer"
import Footer from "../Footer/Footer"
import tedx_logo from "../Components/Images/tedx_logo.jpg";
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-page">

      <div className="home-container">
        {/* Left side - Double vertical carousel */}
        <div className="home-carousel-container">
          <div className="home-carousel-wrapper">
            <Carousel direction="up" speed="slow" />
            <Carousel direction="down" speed="normal" />
          </div>
        </div>

        {/* Right side - TEDx content */}
        <div className="home-content-container">
          <h1 className="home-tedx-header">TEDx</h1>
          <p className="home-tedx-subheader">x <span style={{color:"#fff"}}>= independently organized TED event</span></p>
          <div className="home-tedx-description">
            <p className="home-para">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like
              experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
              connection. These local, self-organized events are branded TEDx, where x = independently organized TED
              event.
            </p>

          </div>
        </div>
      </div>
    </div>
    <CountdownTimer/>
    <section className="why-tedx">
      <div className="why-tedx-container">
        {/* Left Image Section */}
        <div className="why-tedx-image">
          <img src={tedx_logo} alt="TEDx Event" />
        </div>

        {/* Right Content Section */}
        <div className="why-tedx-content">
          <h2 className="why-tedx-title">WHY TEDx?</h2>
          <p className="why-tedx-text">
            TEDx is all about spreading ideas that matter. It provides a platform for visionaries, innovators, and thinkers 
            to share their knowledge and inspire change. Our carefully curated speakers bring fresh perspectives from diverse 
            backgrounds to ignite conversations that leave a lasting impact.
            <br /> <br />
            At TEDx, we celebrate creativity, curiosity, and the power of ideas to make the world a better place.
            Join us and be a part of an inspiring journey that transforms thoughts into action!
          </p>
          {/* <p className="why-tedx-text">
            At TEDx, we celebrate creativity, curiosity, and the **power of ideas** to make the world a better place.
            Join us and be a part of an inspiring journey that transforms thoughts into action!
          </p> */}
        </div>
      </div>
    </section>
    <Footer/>
    </>

  )
}

export default Home

