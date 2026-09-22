import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiFillGithub,
  AiOutlineLink,
} from 'react-icons/ai';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == "works"] | order(order asc) {
        _id,
        title,
        description,
        imgUrl,
        technologies,
        codeLink,
        projectLink,
        order
      }
    `;

    client
      .fetch(query)
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Failed to fetch projects:', error);
      });
  }, []);

  return (
    <section className="projects">
      <div className="projects__header">
        <motion.div
          className="projects__heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="projects__label">
            <span />
            Projects
          </div>

          <h2>
            Things I&apos;ve <span>Built</span>
          </h2>

          <p>
            A selection of projects where I&apos;ve explored different
            technologies, solved practical problems, and turned ideas into
            working software.
          </p>
        </motion.div>

        <motion.div
          className="projects__statement"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>Turning ideas into</span>
          <strong>real solutions.</strong>
        </motion.div>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.article
            className="projects__card"
            key={project._id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: Math.min(index * 0.08, 0.24),
            }}
          >
            <div className="projects__image">
              {project.imgUrl ? (
                <img
                  src={urlFor(project.imgUrl).width(900).url()}
                  alt={`${project.title} project`}
                />
              ) : (
                <div className="projects__image-placeholder">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              )}

              <div className="projects__number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="projects__content">
              <h3>{project.title}</h3>

              {project.description && (
                <p className="projects__description">
                  {project.description}
                </p>
              )}

              {project.technologies?.length > 0 && (
                <div className="projects__technologies">
                  {project.technologies.map((technology, technologyIndex) => (
                    <span
                      key={`${project._id}-${technology}-${technologyIndex}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {(project.codeLink || project.projectLink) && (
                <div className="projects__actions">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                      <span>View Code</span>
                    </a>
                  )}

                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__demo"
                    >
                      <AiOutlineLink />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg'
);