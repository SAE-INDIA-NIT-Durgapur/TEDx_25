import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-tedx">
      <div className="container-tedx">
        {/* Main footer content */}
        <div className="footer-main-tedx">
          {/* TEDx Logo */}
          <div className="footer-section-tedx logo-section-tedx">
            <h1 className="footer-logo-tedx">
              <span className="tedx-text-tedx">TEDx</span>
              <span className="nit-text-tedx">NITDurgapur</span>
            </h1>
            <p className="footer-tagline-tedx">Ideas worth spreading</p>
          </div>

          {/* Useful Links */}
          <div className="footer-section-tedx links-section-tedx">
            <h1 className="section-title-tedx"> <span style={{borderBottom:"2px solid red"}}>Links</span></h1>
            <nav className="footer-nav-tedx">
              <a href="/" className="footer-link-tedx">Home</a>
              <a href="/gallery" className="footer-link-tedx">Gallery</a>
              <a href="/members" className="footer-link-tedx">Members</a>
              <a href="/speakers" className="footer-link-tedx">Speakers</a>
              <a href="/sponsors" className="footer-link-tedx">Sponsor</a>
              <a href="/merchandise" className="footer-link-tedx">Merchandise</a>
            </nav>
          </div>

          {/* Location */}
          <div className="footer-section-tedx location-section-tedx">
          <iframe
                title="NIT Durgapur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.031062379596!2d87.29337027530216!3d23.547244700439106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771fd5e802f4b%3A0x748040134013b6a2!2sNational%20Institute%20of%20Technology%20Durgapur!5e0!3m2!1sen!2sin!4v1709567891012!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            <div className="location-container-tedx">
              <p className="location-text-tedx">NIT Durgapur, West Bengal, India - 713209</p>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="contact-section-tedx">
          <div className="contact-container-tedx">
            <div className="contact-info-tedx">
              <span className="contact-label-tedx">Contact:</span>
              <span className="contact-name-tedx">   John Doe    </span>
              <span className="contact-divider-tedx">|</span>
              <span className="contact-name-tedx">   Jane Smith   </span>
            </div>

            <div className="email-info-tedx">
              <a href="mailto:tedx@nitdgp.ac.in" className="email-link-tedx">tedx@nitdgp.ac.in</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-tedx">&copy; {new Date().getFullYear()} TEDxNITDurgapur. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
