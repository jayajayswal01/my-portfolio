import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiGlobe, FiArrowRight, FiCoffee, FiAward, FiGitBranch } from 'react-icons/fi';
import './About.css';

const About = () => {
  const stats = [
    { count: '1+', label: 'Years Experience', icon: <FiCode />, color: '#6366f1' },
    { count: '2+', label: 'Projects Completed', icon: <FiLayout />, color: '#ec4899' },
    { count: '10+', label: 'Happy Clients', icon: <FiGlobe />, color: '#8b5cf6' },
    { count: '5+', label: 'Tech Stack', icon: <FiDatabase />, color: '#10b981' }
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: <FiLayout />,
      color: '#6366f1',
      items: ['HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Backend',
      icon: <FiDatabase />,
      color: '#ec4899',
      items: ['Java', 'C++', 'C']
    },
    {
      category: 'Tools',
      icon: <FiGitBranch />,
      color: '#8b5cf6',
      items: ['Git','Figma']
    }
  ];

  return (
    <section className="about" id='about'>
      <div className="about__background">
        <div className="about__gradient-blob" />
        <div className="about__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="about__grid-item" />
          ))}
        </div>
      </div>

      <div className="about__container">
        <motion.div 
          className="about__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="about__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover My Story
          </motion.span>
          <motion.h2 
            className="about__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="about__content">
          <motion.div 
            className="about__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="about__stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="about__stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </span>
                <h3 className="about__stat-count">{stat.count}</h3>
                <p className="about__stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="about__info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="about__description">
              I am a passionate Full Stack Developer with expertise in creating exceptional 
              digital experiences. My journey in web development has been driven by a 
              desire to build innovative solutions that make a difference. I specialize 
              in modern web technologies and believe in writing clean, efficient code 
              that scales.
            </p>

            <div className="about__skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="about__skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about__skill-header" style={{ color: skill.color }}>
                    {skill.icon}
                    <h3>{skill.category}</h3>
                  </div>
                  <div className="about__skill-list">
                    {skill.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        className="about__skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + (idx * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <motion.button
              className="about__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
              <FiArrowRight className="about__cta-icon" />
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;