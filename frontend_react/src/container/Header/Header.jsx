import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text typing-effect">Hello, I am</p>
            <h1 className="head-text">Shamin Yasar</h1>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="about__personal"
        >
          <div className="about__content">
            <h2>About Me</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Hi, I'm Shamin Yasar, a fourth-year Computer Science student at Memorial University,
              with a Mathematics minor. I am a passionate full-stack developer with a deep enthusiasm for machine learning. I thrive at the intersection of technology and
              problem-solving, coding solutions that make a difference. Beyond programming, I balance
              my passion for tech with soccer, travel, and experimenting with new recipes. I’m driven
              by curiosity, creativity, and a commitment to continuous growth.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');