import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

import './Header.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-content">
        <motion.div
          className="app__header-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <motion.div
            className="header-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="header-intro-line" />
            <span>Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shamin <span>Yasar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Computer Science Student
            <span className="header-title-dot"> & </span>
            Software Developer
          </motion.h2>

          <motion.p
            className="header-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Computer Science student with hands-on experience building and
            supporting modern software applications. I enjoy solving technical
            problems, learning new technologies, and creating reliable,
            user-focused solutions.
          </motion.p>

          <motion.div
            className="header-details"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <HiOutlineLocationMarker />
              <span>St. John's, Newfoundland & Labrador</span>
            </div>

            <div>
              <HiOutlineAcademicCap />
              <span>
                B.Sc. Computer Science · Mathematics Minor · Graduating Dec 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            className="header-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#projects"
              className="header-button header-button-primary"
            >
              View My Work
              <HiOutlineArrowRight />
            </a>

            <a
              href="#contact"
              className="header-button header-button-secondary"
            >
              <HiOutlineMail />
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            className="header-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="header-stat">
              <strong>3+</strong>
              <span>Professional Roles</span>
            </div>

            <div className="header-stat-divider" />

            <div className="header-stat">
              <strong>5+</strong>
              <span>Projects Built</span>
            </div>

            <div className="header-stat-divider" />

            <div className="header-stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="app__header-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          <div className="header-glow" />

          <motion.div
            className="header-ring header-ring-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div
            className="header-ring header-ring-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="header-image-container">
            <div className="header-image-bg" />

            <img
              src={images.profile}
              alt="Shamin Yasar"
              className="header-profile"
            />
          </div>

          <motion.div
            className="header-floating-card header-code-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="floating-icon">
              <FaReact />
            </div>

            <div>
              <span>Currently building</span>
              <strong>Software Projects</strong>
            </div>
          </motion.div>

          <motion.div
            className="header-floating-card header-tech-card"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="floating-icon">
              <SiTypescript />
            </div>

            <div>
              <span>Working with</span>
              <strong>Modern Tech</strong>
            </div>
          </motion.div>

          <motion.div
            className="header-availability"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="availability-dot" />
            Open to opportunities
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="header-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>

        <div className="scroll-line">
          <span />
        </div>
      </motion.a>
    </div>
  );
};

export default AppWrap(Header, 'home');