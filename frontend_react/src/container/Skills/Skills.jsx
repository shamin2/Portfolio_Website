import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client
      .fetch(query)
      .then((data) => setSkills(data))
      .catch((error) => {
        console.error('Failed to fetch skills:', error);
      });
  }, []);

  return (
    <section className="skills">
      <div className="skills__header">
        <motion.div
          className="skills__heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="skills__label">
            <span />
            Skills & Technologies
          </div>

          <h2>
            Tools I <span>Work With</span>
          </h2>

          <p>
            Technologies and tools I&apos;ve worked with across software
            development, cloud, databases, testing, and data.
          </p>
        </motion.div>

        <motion.div
          className="skills__statement"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>Always learning.</span>
          <strong>Always building.</strong>
        </motion.div>
      </div>

      <motion.div
        className="skills__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.045,
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            className="skills__item"
            key={skill._id || skill.name}
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
                scale: 0.95,
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
              y: -6,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <motion.div
              className="skills__icon"
              style={{
                '--skill-color': skill.bgColor || '#c72f58',
              }}
              whileHover={{
                rotate: 360,
                scale: 1.08,
              }}
              transition={{
                duration: 0.55,
                ease: 'easeInOut',
              }}
            >
              {skill.icon && (
                <img
                  src={urlFor(skill.icon).width(160).url()}
                  alt={skill.name}
                />
              )}
            </motion.div>

            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg'
);