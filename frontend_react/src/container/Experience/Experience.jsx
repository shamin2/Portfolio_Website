import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineBriefcase,
  HiOutlineExternalLink,
} from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Experience.scss';

const formatDate = (date) => {
  if (!date) return '';

  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == "experience"] | order(order asc) {
        _id,
        company,
        role,
        logo,
        location,
        startDate,
        endDate,
        current,
        description,
        highlights,
        technologies,
        order
      }
    `;

    client
      .fetch(query)
      .then((data) => {
        setExperiences(data);
      })
      .catch((error) => {
        console.error('Failed to fetch experience data:', error);
      });
  }, []);

  return (
    <div className="experience">
      <div className="experience__header">
        <motion.div
          className="experience__heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="experience__label">
            <span />
            Experience
          </div>

          <h2>
            Work <span>Experience</span>
          </h2>

          <p>
            I’ve had the opportunity to work on real-world projects, collaborate with talented teams,
             and gain hands-on experience across full-stack development, cloud technologies, and data.
          </p>
        </motion.div>

        <motion.a
          className="experience__resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <HiOutlineBriefcase />

          <span>View My Resume</span>

          <HiOutlineExternalLink />
        </motion.a>
      </div>

      <div className="experience__timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="experience__item"
            key={item._id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.08, 0.24),
            }}
          >
            <div className="experience__meta">
              <p>
                {formatDate(item.startDate)} —{' '}
                {item.current ? 'Present' : formatDate(item.endDate)}
              </p>

              {item.location && <span>{item.location}</span>}
            </div>

            <div className="experience__marker">
              <span />
            </div>

            <div className="experience__card">
              <div
                className={`experience__card-main ${
                  !item.logo ? 'experience__card-main--no-logo' : ''
                }`}
              >
                {item.logo && (
                  <div className="experience__logo">
                    <img
                      src={urlFor(item.logo).width(300).url()}
                      alt={`${item.company} logo`}
                    />
                  </div>
                )}

                <div className="experience__content">
                  <div className="experience__title">
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  {item.description && (
                    <p className="experience__description">
                      {item.description}
                    </p>
                  )}

                  {item.highlights?.length > 0 && (
                    <ul className="experience__highlights">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <li key={`${item._id}-${highlightIndex}`}>
                          <span />
                          <p>{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {item.technologies?.length > 0 && (
                <div className="experience__technologies">
                  {item.technologies.map((technology, technologyIndex) => (
                    <span
                      key={`${item._id}-${technology}-${technologyIndex}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__primarybg'
);