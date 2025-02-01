import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import logo from './assets/logo.png';
import leaf from './assets/leaf.png';
import mobileDuo from './assets/mobile_duo1.png';

function App() {
  const handleRequestDemoClick = () => {
    console.log("Request Demo clicked!");
  };

  return (
    <div className="app">
      <section className="hero-section">
        <div className="header">
          <img src={logo} alt="Pigeon Post Logo" className="logo" />
          <button className="demo-button" onClick={handleRequestDemoClick}>
            Request Demo
          </button>
        </div>

        <div className="hero-content">
          {/* Fade out the text container after the mobile image appears */}
          <motion.div
            className="hero-leaf-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6, duration: 1 }}  // Fades out after 6 seconds
          >
            <img src={leaf} alt="Leaf" className="hero-leaf" />
            <h1 className="hero-title">
              Creativity
              <br />
              <span className="hero-subtitle">Beyond Limits</span>
            </h1>
          </motion.div>

          {/* Mobile image animates into view after a 5-second delay */}
          <motion.img
            src={mobileDuo}
            alt="Mobile Duo"
            className="mobile-image"
            initial={{ y: 100, opacity: 0 }}  // Starts off-screen below and hidden
            animate={{ y: 0, opacity: 1 }}     // Animates upward into its final position with full opacity
            transition={{ delay: 5, duration: 1 }}  // Delay of 5 seconds before animating over 1 second
            style={{
              position: 'absolute',
              left: '-20%',  // Adjusted further to the left
              top: '-40%',   // Adjusted further to the top
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
