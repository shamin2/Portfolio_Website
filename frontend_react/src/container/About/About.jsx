import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineLightningBolt,
} from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="about">
      <div className="about__main">
        <motion.div
          className="about__intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__label">
            <span />
            About Me
          </div>

          <h2>
            More Than
            <br />
            Just <span>Code.</span>
          </h2>

          <p>
            I'm a Computer Science student at Memorial University of
            Newfoundland, with a Minor in Mathematics, graduating in December
            2026.
          </p>

          <p>
            I enjoy building software, solving technical problems, and
            continuously expanding my skills across different areas of
            technology.
          </p>

          <p>
            When I'm not coding, you'll probably find me playing soccer,
            travelling, gaming, or trying out new recipes.
          </p>
        </motion.div>

        <motion.div
          className="about__info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="about__info-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="about__info-icon">
              <HiOutlineAcademicCap />
            </div>

            <div className="about__info-content">
              <h3>Education</h3>

              <p>B.Sc. in Computer Science</p>
              <p>Minor in Mathematics</p>
              <p>Memorial University of Newfoundland</p>

              <span>Graduating December 2026</span>
            </div>
          </motion.div>

          <motion.div
            className="about__info-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="about__info-icon">
              <HiOutlineHeart />
            </div>

            <div className="about__info-content">
              <h3>Interests</h3>

              <div className="about__interests">
                <span>Soccer</span>
                <span>Travel</span>
                <span>Gaming</span>
                <span>Cooking</span>
                <span>Tech</span>
                <span>Exploring</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__info-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="about__info-icon">
              <HiOutlineLightningBolt />
            </div>

            <div className="about__info-content">
              <h3>Currently</h3>

              <p>Building & polishing projects</p>
              <p>Expanding cloud, data & AI skills</p>
              <p>Preparing for full-time opportunities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="about__specialties">
        <motion.div
          className="about__specialties-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="about__label">
            <span />
            What I Work With
          </div>

          <h3>
            Exploring Different Areas of <span>Technology</span>
          </h3>
        </motion.div>

        <div className="about__specialties-grid">
          {abouts.map((about, index) => (
            <motion.div
              className="about__specialty-card"
              key={about._id || `${about.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="about__specialty-top">
                <span className="about__specialty-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {about.imgUrl && (
                  <div className="about__specialty-image">
                    <img
                      src={urlFor(about.imgUrl).width(500).url()}
                      alt={about.title}
                    />
                  </div>
                )}
              </div>

              <div className="about__specialty-content">
                <h4>{about.title}</h4>
                <p>{about.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__primarybg',
);