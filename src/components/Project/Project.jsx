import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';
import './Project.css';
import PersonalPortfolioImage from '../../assets/project1.png'

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // {
    //   title: "E-commerce Platform",
    //   description: "A full-stack e-commerce solution with React and Node.js",
    //   image: "/images/projects/ecommerce.jpg",
    //   tags: ["React", "Node.js", "MongoDB"],
    //   category: "fullstack",
    //   github: "https://github.com/username/ecommerce",
    //   demo: "https://demo-ecommerce.com",
    //   featured: true
    // },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with React and Framer Motion",
      image: PersonalPortfolioImage,
      tags: ["React", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.com",
      featured: true
    },
    // Add more projects as needed
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    // { label: 'Fullstack', value: 'fullstack' },
    // { label: 'Mobile', value: 'mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id='projects'>
      <div className="projects__background">
        <div className="projects__gradient-blob" />
        <div className="projects__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="projects__grid-item" />
          ))}
        </div>
      </div>

      <div className="projects__container">
        <motion.div 
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="projects__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Recent Work
          </motion.span>
          <motion.h2 
            className="projects__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <motion.div 
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              className={`projects__filter ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects__grid-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <motion.div 
                    className="projects__card-links"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  </motion.div>
                </div>
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;