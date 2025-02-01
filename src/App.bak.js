import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import logo from './assets/logo.png';
import leaf from './assets/leaf.png';
import mobileDuo from './assets/mobile_duo1.png';

function App() {
  const section2Ref = useRef(null);
  const section6Ref = useRef(null);

  // Scroll progress for Section 2 animation
  const { scrollYProgress } = useScroll();

  // Image animation logic (appear in Section 2)
  const phoneImageY = useTransform(scrollYProgress, [0.8, 1], ["100%", "0%"]); // Adjusted to bring it higher
  const phoneImageOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const handleRequestDemoClick = () => {
    section6Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Section 1 */}
      <section className="hero-section">
        <div className="header">
          <img src={logo} alt="Pigeon Post Logo" className="logo" />
          <button className="demo-button" onClick={handleRequestDemoClick}>
            Request Demo
          </button>
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
          Pigeon Post is built for boundless. For creators who want to break
          through barriers.
        </motion.p>
      </section>

      {/* Section 2 */}
      <section className="platform-section" ref={section2Ref}>
        {/* Image appears here */}
        <motion.div
          className="image-container"
          style={{
            y: phoneImageY,
            opacity: phoneImageOpacity,
            position: 'absolute',
            top: '-50px', // Moves image above the text
            left: '50%',
            transform: 'translateX(-50%)', // Centers the image horizontally
            zIndex: 2,
          }}
        >
          <img src={mobileDuo} alt="Mobile Duo" className="mobile-image" />
        </motion.div>

        <div className="text-container">
          <h1>
            Platform of <span>Possibilities</span>
          </h1>
          <p>Everything you need to create, connect, and thrive.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
