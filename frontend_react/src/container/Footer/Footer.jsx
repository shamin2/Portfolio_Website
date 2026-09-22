import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiArrowRight,
  HiExternalLink,
} from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const contactItems = [
  {
    title: 'Email',
    value: 'shaminyasar2001@gmail.com',
    href: 'mailto:shaminyasar2001@gmail.com',
    icon: HiOutlineMail,
  },
  {
    title: 'Phone',
    value: '+1 (709) 219-2179',
    href: 'tel:+17092192179',
    icon: HiOutlinePhone,
  },
  {
    title: 'Location',
    value: "St. John's, NL, Canada",
    href: null,
    icon: HiOutlineLocationMarker,
  },
];

const Footer = () => {
  return (
    <section className="contact">
      <div className="contact__header">
        <motion.div
          className="contact__heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="contact__label">
            <span />
            Get In Touch
          </div>

          <h2>
            Let&apos;s Build Something <span>Together.</span>
          </h2>

          <p>
            Have an opportunity, project, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="contact__statement"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>Good ideas always</span>
          <strong>start with a conversation.</strong>
        </motion.div>
      </div>

      <motion.div
        className="contact__panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact__decoration">
          <span className="contact__orbit contact__orbit--one" />
          <span className="contact__orbit contact__orbit--two" />
          <span className="contact__glow" />
        </div>

        <div className="contact__panel-heading">
          <span>Let&apos;s Connect</span>
          <h3>Get In Touch</h3>
          <p>
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <motion.div
          className="contact__methods"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <>
                <div className="contact__method-icon">
                  <Icon />
                </div>

                <div className="contact__method-info">
                  <span>{item.title}</span>
                  <p>{item.value}</p>
                </div>

                {item.href && (
                  <HiExternalLink className="contact__method-arrow" />
                )}
              </>
            );

            return (
              <motion.div
                className="contact__method"
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    scale: 0.97,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {item.href ? (
                  <a href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div className="contact__method-static">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="contact__bottom">
          <div className="contact__social-section">
            <span className="contact__social-label">Find Me Online</span>

            <div className="contact__socials">
              <motion.a
                href="https://github.com/shamin2"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <AiFillGithub />
                <span>GitHub</span>
                <HiExternalLink />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/shamin-yasar-768a322a5"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <AiFillLinkedin />
                <span>LinkedIn</span>
                <HiExternalLink />
              </motion.a>
            </div>
          </div>

          <motion.a
            className="contact__email-button"
            href="mailto:shaminyasar2001@gmail.com?subject=Portfolio Contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineMail />
            <span>Send Me an Email</span>
            <HiArrowRight />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="contact__availability"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span />
        Available to connect
      </motion.div>

      <footer className="contact__footer">
        <p>
          © {new Date().getFullYear()} Shamin Yasar. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);