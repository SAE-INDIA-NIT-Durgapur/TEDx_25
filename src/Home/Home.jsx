import Carousel from "../Components/Carousel"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import CountdownTimer from "../Components/CountdownTimer"
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
    </>

  )
}

export default Home

