import React from 'react'
import Navbar from './Navbar'
import './About.css'
import Elijah from '../assets/img/about.jpg'
import Mtn from '../assets/img/team-1.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
const About = () => {
  return (
    <>
      <Navbar />

      <div className='herosection'>
        <h1>About Us</h1>
        <div className="hero">
          <p>Home</p>
          <p>Page</p>
          <p>About</p>
        </div>
      </div>
      <div className="about">
        <img src={Elijah} alt="" />
        <div className="about-us">
          <div className='line' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <h2>About Us</h2>
            <div>
              <div style={{ width: '50px', height: '2px', background: '#86b817', }}></div>
              <div style={{
                width: '70px', height: '2px', background: '#86b817',
                marginTop: '5px'
              }}></div>

            </div>

          </div>

          <div className='pp'>
            <h1>Welcome to Tourist</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos mollitia eveniet asperiores reiciendis cum ducimus fugiat eius quam autem!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptate consequatur ipsam hic impedit exercitationem, eveniet aliquid tempore totam tenetur libero, dolorum distinctio et deleniti!</p>
          </div>
          <div className="table">
            <tbody>
              <tr>
                <td><FaArrowRight style={{ color: '#86b817' }} />First Class Flights</td>
                <td><FaArrowRight style={{ color: '#86b817' }} />Handpicked Hotels</td>
              </tr>
              <tr>
                <td><FaArrowRight style={{ color: '#86b817' }} />5 Star Accomodations</td>
                <td><FaArrowRight style={{ color: '#86b817' }} />Latest Model Vehicles</td>
              </tr>
              <tr>
                <td><FaArrowRight style={{ color: '#86b817' }} />150 Premium City Tours</td>
                <td><FaArrowRight style={{ color: '#86b817' }} />24/7 Services</td>
              </tr>
            </tbody>
          </div>
          <button>Read More</button>
        </div>
      </div>
      <div className="travel-guide">
        <div className='trav' style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <div className='' style={{ display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
            <div style={{ width: '50px', height: '2px', background: '#86b817', }}></div>
            <div style={{
              width: '70px', height: '2px', background: '#86b817',
              marginTop: '5px'
            }}></div>
          </div>
          <h3>Travel Guide</h3>
          <div className=''>
            <div style={{ width: '50px', height: '2px', background: '#86b817', }}></div>
            <div style={{
              width: '70px', height: '2px', background: '#86b817',
              marginTop: '5px'
            }}></div>
          </div>
        </div>
        <div className="meet-guide">
          <h1>Meet Our Guide</h1>
          <div className='card-grid'>
            <div className="card">
              <img src={Mtn} alt="" />
              <div className='card-icons'>
                <FaFacebookF style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaTwitter style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaInstagram style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
              </div>
              <div className='two'>
                <h2>Full Name</h2>
                <p>Designation</p>
              </div>
            </div>
            <div className="card">
              <img src={Mtn} alt="" />
              <div className='card-icons'>
                <FaFacebookF style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaTwitter style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaInstagram style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
              </div>
              <div className='two'>
                <h2>Full Name</h2>
                <p>Designation</p>
              </div>
            </div>
            <div className="card">
              <img src={Mtn} alt="" />
              <div className='card-icons'>
                <FaFacebookF style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaTwitter style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaInstagram style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
              </div>
              <div className='two'>
                <h2>Full Name</h2>
                <p>Designation</p>
              </div>
            </div>
            <div className="card">
              <img src={Mtn} alt="" />
              <div className='card-icons'>
                <FaFacebookF style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaTwitter style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
                <FaInstagram style={{ color: '#86b817', backgroundColor: '#ffffff', width: '40px', height: '40px', padding: '10px', borderRadius: '40px', }} />
              </div>
              <div className='two'>
                <h2>Full Name</h2>
                <p>Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="futa">
        <div style={{display:'flex',gap:'50px'}}>
        <div className='futa-1'>
          <h2>Company</h2>
          <p> <FaGreaterThan />About Us</p>
          <p> <FaGreaterThan />Contact Us</p>
          <p> <FaGreaterThan />Privacy Policy</p>
          <p> <FaGreaterThan />Terms & Condition</p>
          <p> <FaGreaterThan />FAQs & Help</p>

        </div>
        <div>
          <h2>Contact</h2>
          <p> <FaLocationDot />123 Street,New York, USA
          </p>
          <p> <MdCall />+0123 345 67890</p>
          <p><IoMailSharp />
            info@exmple</p>
          </div>
        </div>
        <div>
          <h2>Gallery</h2>
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        </div>
      </div>

    </>
  )
}

export default About