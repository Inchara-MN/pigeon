import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import './App.css';
import logo from './assets/logo.png';
import leaf from './assets/leaf.png';
import mobileDuo from './assets/mobile_duo1.png';
import mobileDuo2 from './assets/mobile_duo2.png';
import mobileDuo3 from './assets/mobile_duo3.png'; // Stage 3 Image

function App() {
  const scrollValue = useMotionValue(0);

  const handleWheel = (e) => {
    e.preventDefault();
    const newVal = scrollValue.get() + e.deltaY / 3; // Slow down the scroll speed
    scrollValue.set(Math.min(1500, Math.max(0, newVal))); // Adjusted scroll range for Stage 4
  };

  const handleRequestDemoClick = () => {
    animate(scrollValue, 1200, {
      duration: 2, // Increased duration for a slower, smoother scroll
      ease: [0.42, 0, 0.58, 1], // EaseInOut cubic-bezier for smooth animation
    });
  };

  /* ====================
     Transform Variables
     ==================== */

  // Request Demo Button Opacity
  const requestDemoOpacity = useTransform(scrollValue, [0, 1100, 1200], [1, 1, 0]); // Fade out at Stage 4

  // Stage 1 Variables
  const mobileY = useTransform(scrollValue, [0, 200, 350], [100, 0, -100]);
  const mobileOpacity = useTransform(scrollValue, [0, 200], [0, 1]);
  const textOpacity = useTransform(scrollValue, [0, 180, 200], [1, 1, 0]);
  const newTextOpacity = useTransform(scrollValue, [200, 300], [0, 1]);
  const newTextY = useTransform(scrollValue, [200, 350], [50, -100]);
  const stage1WrapY = useTransform(scrollValue, [300, 350], [0, -100]);
  const stage1WrapOpacity = useTransform(scrollValue, [300, 350], [1, 0]);

  // Stage 2 Variables
  const stage2MobileY = useTransform(scrollValue, [400, 500, 650], [100, 0, -100]);
  const stage2MobileOpacity = useTransform(scrollValue, [400, 500], [0, 1]);
  const stage2TextOpacity = useTransform(scrollValue, [350, 400, 500], [0, 1, 0]);
  const stage2NewTextOpacity = useTransform(scrollValue, [500, 600], [0, 1]);
  const stage2NewTextY = useTransform(scrollValue, [500, 650], [50, -100]);
  const stage2WrapY = useTransform(scrollValue, [600, 650], [0, -100]);
  const stage2WrapOpacity = useTransform(scrollValue, [600, 650], [1, 0]);

  // Stage 3 Variables
  const stage3MobileY = useTransform(scrollValue, [750, 850, 1000], [100, 0, -100]);
  const stage3MobileOpacity = useTransform(scrollValue, [750, 850], [0, 1]);
  const stage3TextOpacity = useTransform(scrollValue, [700, 750, 850], [0, 1, 0]);
  const stage3NewTextOpacity = useTransform(scrollValue, [850, 950], [0, 1]);
  const stage3NewTextY = useTransform(scrollValue, [850, 1000], [50, -100]);
  const stage3WrapY = useTransform(scrollValue, [1000, 1050], [0, -100]);
  const stage3WrapOpacity = useTransform(scrollValue, [1000, 1050], [1, 0]);

  // Stage 4 Variables
  const stage4Opacity = useTransform(scrollValue, [1100, 1200], [0, 1]); // Fade-in effect
  const stage4Y = useTransform(scrollValue, [1200, 1400], [50, 0]); // Moves up on scroll

  return (
    <div className="app">
      <section className="hero-section" onWheel={handleWheel}>
        {/* Header with higher z-index so it's clickable */}
        <div className="header" style={{ zIndex: 100 }}>
          <img src={logo} alt="Pigeon Post Logo" className="logo" />
          <motion.button
            className="demo-button"
            style={{ opacity: requestDemoOpacity, pointerEvents: 'auto' }}
            onClick={handleRequestDemoClick}
          >
            Request Demo
          </motion.button>
        </div>

        <div className="hero-content">
          {/* Stage 1 Content */}
          <motion.div style={{ y: stage1WrapY, opacity: stage1WrapOpacity }}>
            <motion.div
              className="hero-leaf-container"
              style={{ opacity: textOpacity }}
            >
              <img src={leaf} alt="Leaf" className="hero-leaf" />
              <h1 className="hero-title">
                Creativity
                <br />
                <span className="hero-subtitle">Beyond Limits</span>
              </h1>
            </motion.div>

            <motion.img
              src={mobileDuo}
              alt="Mobile Duo"
              className="mobile-image"
              style={{
                position: 'absolute',
                left: '35%',
                top: '10%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                y: mobileY,
                opacity: mobileOpacity,
              }}
            />

            <motion.div
              className="new-text-container"
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                x: '-50%',
                zIndex: 1,
                opacity: newTextOpacity,
                y: newTextY,
              }}
            >
              <p className="new-text">
                Pigeon Post is built for boundless. For creators who want to break through barriers.
              </p>
            </motion.div>
          </motion.div>

          {/* Stage 2 Content */}
          <motion.div style={{ y: stage2WrapY, opacity: stage2WrapOpacity }}>
            <motion.div
              className="stage2-text-container"
              style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                x: '-50%',
                textAlign: 'center',
                zIndex: 2,
                opacity: stage2TextOpacity,
              }}
            >
              <h1 className="stage2-title">
                One Platform
                <br />
                <span className="stage2-subtitle">Infinite Potential</span>
              </h1>
            </motion.div>

            <motion.img
              src={mobileDuo2}
              alt="Mobile Duo 2"
              className="mobile-image"
              style={{
                position: 'absolute',
                left: '35%',
                top: '10%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                y: stage2MobileY,
                opacity: stage2MobileOpacity,
              }}
            />

            <motion.div
              className="new-text-container"
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                x: '-50%',
                zIndex: 1,
                opacity: stage2NewTextOpacity,
                y: stage2NewTextY,
              }}
            >
              <p className="new-text">
                Everything you need, together in one place. No friction, no barriers—just the space to create your best work.
              </p>
            </motion.div>
          </motion.div>

          {/* Stage 3 Content */}
          <motion.div style={{ y: stage3WrapY, opacity: stage3WrapOpacity }}>
            <motion.div
              className="stage3-text-container"
              style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                x: '-50%',
                textAlign: 'center',
                zIndex: 3,
                opacity: stage3TextOpacity,
              }}
            >
              <h1 className="stage3-title">
                Not Just a Platform
                <br />
                <span className="stage3-subtitle">A New Era</span>
              </h1>
            </motion.div>

            <motion.img
              src={mobileDuo3}
              alt="Mobile Duo 3"
              className="mobile-image"
              style={{
                position: 'absolute',
                left: '35%',
                top: '10%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                y: stage3MobileY,
                opacity: stage3MobileOpacity,
              }}
            />

            <motion.div
              className="new-text-container"
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                x: '-50%',
                zIndex: 1,
                opacity: stage3NewTextOpacity,
                y: stage3NewTextY,
              }}
            >
              <p className="new-text">
                A place where creators write the future, together;
                Welcome to the next generation of creativity.
              </p>
            </motion.div>
          </motion.div>

          {/* Stage 4 Content */}
          <motion.div
            className="sign-in"
            style={{
              y: stage4Y,
              opacity: stage4Opacity,
            }}
          >
            <h2 className="stay-up-to-date">Stay up-to-date with updates</h2>
            <section className="content">
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="email-input"
                />
              </div>
              <div className="button-container">
                <button className="subscribe">Subscribe</button>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
