import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineExternalLink,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Certifications.scss';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certification"] | order(order asc)';

    client
      .fetch(query)
      .then((data) => {
        setCertifications(data);
      })
      .catch((error) => {
        console.error('Failed to fetch certifications:', error);
      });
  }, []);

  return (
    <section className="certifications">
      <div className="certifications__header">
        <motion.div
          className="certifications__heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="certifications__label">
            <span />
            Certifications
          </div>

          <h2>
            Credentials &amp; <span>Continuous Learning.</span>
          </h2>

          <p>
            Industry certifications that complement my academic and
            professional experience.
          </p>
        </motion.div>

        <motion.div
          className="certifications__statement"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>Always learning.</span>
          <strong>Always improving.</strong>
        </motion.div>
      </div>

      <motion.div
        className="certifications__list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {certifications.map((certification, index) => (
          <motion.article
            className="certifications__item"
            key={certification._id}
            variants={{
              hidden: {
                opacity: 0,
                y: 28,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
            }}
          >
            <div className="certifications__number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="certifications__image">
              {certification.image ? (
                <img
                  src={urlFor(certification.image)
                    .width(500)
                    .quality(90)
                    .url()}
                  alt={`${certification.title} credential`}
                />
              ) : (
                <HiOutlineBadgeCheck />
              )}
            </div>

            <div className="certifications__content">
              <div className="certifications__info">
                <span className="certifications__issuer">
                  {certification.issuer}
                </span>

                <h3>{certification.title}</h3>

                <div className="certifications__meta">
                  <span>Issued {certification.year}</span>
                </div>
              </div>

              <div className="certifications__action">
                <span className="certifications__year">
                  {certification.year}
                </span>

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Credential
                    <HiOutlineExternalLink />
                  </a>
                )}
              </div>
            </div>

            <div className="certifications__hover-line" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'),
  'certifications',
  'app__primarybg'
);