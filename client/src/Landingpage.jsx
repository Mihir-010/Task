import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import heroImage from "../assets/images/pic-one.png";
// import logo from "../assets/images/logo.png";
import "./Landingpage.css"
import {Link} from "react-router-dom"



const Landingpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const features = [
      { title: "Tasks", icon: "📋", description: "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy a cs eirmod dummy text here." },
      { title: "Time Slots", icon: "⏳", description: "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy a cs eirmod dummy text here." },
      { title: "Onboarding", icon: "🔗", description: "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy a cs eirmod dummy text here." },
      { title: "Collaboration", icon: "💬", description: "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy a cs eirmod dummy text here." },
    ];
  return (
    <div className="landingpage">
        {/* Navbar */}
      <nav className="navbar" id="home">
        <div className="logo">
          {/* <img src={logo} alt="Tasker Logo" /> */}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaChevronUp className="text-2xl" /> : <FaChevronDown className="text-2xl" />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact</a></li>
        <Link to="/login"><li><a href="#" id="signIn">Login</a></li></Link>  
          <Link to="/register"> <li><a href="#" id="signUp" className="btn">Get Started</a></li></Link>
        </ul>
      </nav>
    <section className="hero flex items-center justify-between px-10 py-20 bg-gray-100" >
      {/* Hero Content */}
      <div className="hero-content max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          Tasker brings all your tasks, Teams & tools together
        </h1>
        <p className="mt-4 text-gray-600">
          Keep everything in the same place—even if your team isn’t.
        </p>

        {/* Hero Form */}
        <div className="hero-form mt-6 flex">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
            Sign Up It&lsquo;s Free
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        {/* <img
          src={heroImage}
          alt="Task Management Illustration"
          className="w-full max-w-md"
        /> */}
      </div>
    </section> 

    <section className="features-section">
      {/* Left Content */}
      <div className="features-content">
        <a href="#" className="learn-more">Learn about Features</a>
        <h2 className="features-title">Our Top Features</h2>
        <p className="features-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
        <button className="get-started">Get Started</button>
      </div>

      {/* Right Content */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-header">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
            <p className="feature-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    

    <div>
      {/* Main Section */}
      <div className="main-container" id="about-us">
        <div className="image-wrapper">
          <img 
            src="/src/assets/images/pic-two.png" 
            alt="Illustration of a person with glasses and a hat working on a laptop with a browser window in the background"
          />
        </div>
        <div className="text-section">
          <p>Perform Your All Tasks</p>
          <h1>Perform Your All Tasks At One Place</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <button>Get Started</button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-body">
        <div className="feature-container">
          <div className="text-section">
            <p>Learn about Features</p>
            <h1>Boost Your Productivity And Management</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <button>Get Started</button>
          </div>
          <div className="image-section">
            <img 
              src="/src/assets/images/pic-three.png" 
              width="500" 
              height="300" 
              alt="Feature illustration"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="testimonial-container">
        <h2 className="title">Testimonials</h2>
        <h1 className="heading">Check What Our Clients</h1>
        <h1 className="heading">Think About Us</h1>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <img 
            alt="Cartoon image of client 1" 
            height="100" 
            src="https://storage.googleapis.com/a1aa/image/xIWvz6MmQG_2zE6HwvZolEgzyR_cGg7TddeyScgrcOs.jpg" 
            width="100"
          />
          <h3>Name Here</h3>
          <p>XYZ</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="testimonial">
          <img 
            alt="Cartoon image of client 2" 
            height="100" 
            src="https://storage.googleapis.com/a1aa/image/y1MC2k5Icn_WJpnw19wxYWvM51zHq71FZfAewq9mexo.jpg" 
            width="100"
          />
          <h3>Name Here</h3>
          <p>XYZ</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>


    <div className="page-container" id="contact-us">
      <div className="text-center mb-8">
        <a className="text-blue-500" href="#">Contact Us</a>
        <h1 className="text-3xl font-bold">Get in Touch</h1>
      </div>
      <div className="contact">
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 border rounded-lg" id="name" name="name" placeholder="Your Name" type="text"/>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 border rounded-lg" id="email" name="email" placeholder="Your Email" type="email"/>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border rounded-lg" id="message" name="message" placeholder="Your Message" rows="4"></textarea>
            </div>
            <div className="text-center">
              <button  type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-8">
          <img alt="Illustration of a person working on a laptop" className="w-1/2" height="300" src="src/assets/images/pic-four.png" width="300"/>
        </div>
      </div>
    </div>

    <div className="bg-blue-500 text-white py-12">
      <div className="page-container text-center">
        <div className="mb-4">
          <img
            alt="Paper plane illustration"
            className="mx-auto"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/urQbl7X-QEOsxq8FWu0ZIMIojSW8bQ8J-Fv3_4UDDXM.jpg"
            width="100"
          />
        </div>
        <h2 className="text-2xl font-bold">Subscribe To Our Newsletter</h2>
        <p className="mt-2 mb-6">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </p>
        <div className="flex justify-center">
          <input
            id="mail"
            placeholder="Email"
            type="email"
          />{'\u00A0'}{'\u00A0'}
          <button id="subscribe">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/src/assets/images/logo.png" alt="Tasker Logo" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod dfa tempor invidunt ut labore et
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Tasker</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">What&apos;s New</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Customer Success</a></li>
              <li><a href="#">Asana Templates</a></li>
              <li><a href="#">Trust & Security</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Small business</a></li>
              <li><a href="#">Personal use</a></li>
              <li><a href="#">Remote work</a></li>
              <li><a href="#">Startups</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Nonprofits</a></li>
              <li><a href="#">Engineering</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Managers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Download</h4>
            <ul>
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Mac & Windows</a></li>
              <li><a href="#">Web Clipper</a></li>
            </ul>
            <h4>Build</h4>
            <ul>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">API docs</a></li>
              <li><a href="#">Guides & tutorials</a></li>
              <li><a href="#">Find a consultant</a></li>
              <li><a href="#">Become an affiliate</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Get Started</h4>
            <ul>
              <li><a href="#">Switch from Confluence</a></li>
              <li><a href="#">Switch from Asana</a></li>
              <li><a href="#">Switch from Evernote</a></li>
            </ul>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Media kit</a></li>
              <li><a href="#">Email us</a></li>
              <li><a href="#">Cookie settings</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Tasker, Designed By Mihir</p>
      </div>
    </footer>
    
    </div>
  );
};

export default Landingpage;
