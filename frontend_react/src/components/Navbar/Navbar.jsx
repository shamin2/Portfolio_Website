import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX, HiOutlineArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import './Navbar.scss';

const navItems = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'certifications',
  'contact',
];

// Handling Navbar
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item))
        .filter(Boolean);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [toggle]);

  const handleNavClick = (item) => {
    setActiveSection(item);
    setToggle(false);
  };

  return (
    <nav
      className={`app__navbar ${
        scrolled ? 'app__navbar--scrolled' : ''
      }`}
    >
      <div className="app__navbar-inner">
        <a
          href="#home"
          className="app__navbar-logo"
          onClick={() => handleNavClick('home')}
        >
          <span className="logo-dot" />
          <span className="logo-text">SHAMIN</span>
        </a>

        <ul className="app__navbar-links">
          {navItems.map((item) => (
            <li
              key={item}
              className={activeSection === item ? 'active' : ''}
            >
              <a
                href={`#${item}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                <span className="nav-underline" />
              </a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-actions">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="navbar-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="navbar-social"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar-resume"
          >
            <span>Resume</span>
            <HiOutlineArrowRight />
          </a>
        </div>

        <button
          type="button"
          className="app__navbar-menu-button"
          onClick={() => setToggle(true)}
          aria-label="Open navigation menu"
          aria-expanded={toggle}
        >
          <HiMenuAlt4 />
        </button>

        <AnimatePresence>
          {toggle && (
            <>
              <motion.div
                className="navbar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setToggle(false)}
              />

              <motion.div
                className="app__navbar-mobile"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mobile-menu-header">
                  <div className="mobile-logo">
                    <span className="logo-dot" />
                    <span>SHAMIN</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setToggle(false)}
                    aria-label="Close navigation menu"
                  >
                    <HiX />
                  </button>
                </div>

                <ul>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.05,
                      }}
                    >
                      <a
                        href={`#${item}`}
                        onClick={() => handleNavClick(item)}
                      >
                        <span>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-menu-bottom">
                  <div className="mobile-socials">
                    <a
                      href="https://github.com/shamin2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/shamin-yasar-768a322a5"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-resume"
                  >
                    <span>Download Resume</span>
                    <HiOutlineArrowRight />
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;