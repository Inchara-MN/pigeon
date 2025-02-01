import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Add this import
import './App.css';
import logo from './assets/logo.png';
import leaf from './assets/leaf.png';
import mobileDuo from './assets/mobile_duo1.png';
import mobileDuo2 from './assets/mobile_duo2.png';
import mobileDuo3 from './assets/mobile_duo3.png';

function App() {
  // Create a reference to Section 6
  const section6Ref = useRef(null);
  const section2Ref = useRef(null);  // Define section2Ref
  const section4Ref = useRef(null);  // Define section4Ref
  const isInViewSection2 = useInView(section2Ref, { threshold: 0.2 });
  const isInViewSection4 = useInView(section4Ref, { threshold: 0.2 });

  // Smooth scroll function for the Request Demo button
  const handleRequestDemoClick = () => {
    section6Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Section 1 */}
      <section className="hero-section">
        <div className="header">
          <img src={logo} alt="Pigeon Post Logo" className="logo" />
          <button className="demo-button" onClick={handleRequestDemoClick}>Request Demo</button>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-leaf-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <img src={leaf} alt="Leaf" className="hero-leaf" />
            <h1 className="hero-title">
              Creativity
              <br />
              <span className="hero-subtitle">Beyond Limits</span>
            </h1>
          </motion.div>
        </div>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Pigeon Post is built for boundless. For creators who want to break through barriers
        </motion.p>
      </section>

      {/* Section 2 */}
      <section className="platform-section" ref={section2Ref}>
        <div className="text-container">
          <h1 className="platform-heading">
            One Platform
            <br />
            <span>Infinite Potential</span>
          </h1>
          <p className="platform-description">
            Everything you need, together in one place. No friction, no barriers—just the space to <span className="highlight">create</span> your best work.
          </p>
        </div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, y: 200 }}
          animate={isInViewSection2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
        >
          <img src={mobileDuo} alt="Mobile Duo" className="mobile-image" />
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="new-era-section">
        <h1 className="new-era-heading">
          <span className="small-text">Not Just a Platform</span>
          <br />
          A New Era
        </h1>
        <p className="new-era-description">
          A place where creators write the future, together;
          <br />
          Welcome to the next generation of creativity
        </p>
      </section>

      {/* Section 4 */}
      <section className="platform-section" ref={section4Ref}>
        <div className="text-container">
          <h1 className="platform-heading">
           
            <br />
           
          </h1>
          
        </div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, y: 200 }}
          animate={isInViewSection4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
        >
          <img src={mobileDuo2} alt="Mobile Duo 2" className="mobile-image" />
        </motion.div>
      </section>

      {/* Section 5 */}
      <section className="image-only-section">
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <img src={mobileDuo3} alt="Mobile Duo 3" className="mobile-image" />
        </motion.div>
      </section>

      {/* Section 6 */}
      <section className="subscribe-section" ref={section6Ref}>
        <motion.div
          className="subscribe-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <p className="subscribe-text">Stay up-to date with updates</p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter Email"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
