import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceCards.css";
import homam from "../../assets/Home/Homam.jpg";
import rituals from "../../assets/Home/Ritual.jpg";
import poojas from "../../assets/Home/Festive.jpg";
import parayanamsImg from "../../assets/Home/Paranayams.jpg";
import flower from '../../assets/Home/side_bg.png'
import CountUp from "react-countup";
import communityImage from "../../assets/Home/Spritual.jpg"; 
const services = [
  { title: "Homas & Havans", image: homam },
  { title: "Worship Rituals", image: rituals },
  { title: "Festival Poojas", image: poojas },
  { title: "Parayanams", image: parayanamsImg },
];
const statsData = [
  { value: 60, label: "POOJAS" },
  { value: 20, label: "PRIESTS" },
  { value: 20, label: "CUSTOMERS" },
];
const steps = [
  { number: "01.", step_heading:"Book a Ritual Service ", text: "Select the ritual you need with just a click" },
  { number: "02.",step_heading: "Choose Your Pandit",text: " Pick an expert pandit based on your tradition and preferences." },
  { number: "03.", step_heading:"Select Date & Time", text: " Lock in your preferred schedule effortlessly." },
  { number: "04.",step_heading:"Confirm & Relax ", text: " Get instant confirmation and let us handle the rest. " }
];

const ServiceCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="service">
      <div className="service-container">
        <h1>Our Services</h1>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-title"><h5>{service.title}</h5></div>
            </div>
          ))}
        </Slider>
      </div>
      <img className="sider-img1" src={flower}alt="" />
      <div className="service-content">
        
        <div className="devoties">
          <h2>HOW PARAMAARDHA SERVES THE DIVINE PURPOSE ?</h2>
          <p>From expert-led sacred Homas and Yagnas to personalized pujas <br />
and spiritual consultations. From expert-led sacred Homas and <br />
Yagnas to personalized pujas and spiritual consultations.</p>
<button className="btn">Visit This Blog</button>
        </div>
        
      </div>
      <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-circle"><CountUp start={0} end={stat.value} duration={3} />+</div>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>

    <div className="booking-flow">
      <h2>Steps on How to book for a Ritual Service</h2>
      <p>Choose Paramaardha for Fast, Reliable, and Top-Quality Service
Discover <br /> unparalleled dedication to excellence and customer satisfaction.
</p>
<div className="steps-container">
      {steps.map((step, index) => (
        <div key={index} className="step-box">
          <div className="step-number">{step.number}</div>
          <h3 className="step-heading">{step.step_heading}</h3>
          <p className="step-text">{step.text}</p>
        </div>
      ))}
    </div>
    </div>
    <div className="join-community">
      <div className="community-text">
        <h2>Join Our Spiritual Community</h2>
        <p>
          Sign up today to become a member and access personalized Vedic 
          services, exclusive rituals, and divine blessings.
        </p>
        <button className="signup-btn">SIGN UP</button>
      </div>
      <div className="community-image">
        <img src={communityImage} alt="Spiritual Community" />
      </div>
    </div>
    <div class="pandit-network">
  <div class="pandit-content">
    <h2>Join Our Network of Expert Pandits</h2>
    <p>Sign up to offer your spiritual services and conduct authentic Vedic ceremonies.</p>
    <button class="member-btn">BECOME A MEMBER</button>
  </div>
</div>
      
      <img className="sider-img2" src={flower}alt="" />
    </div>
  );
};

export default ServiceCards;
