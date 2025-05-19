import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiTool, FiGlobe, FiServer } from 'react-icons/fi';
import './Skill.css';

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skills = {
    frontend: {
      icon: <FiLayout />,
      color: '#6366f1',
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
      ]
    },
    backend: {
      icon: <FiServer />,
      color: '#ec4899',
      title: 'Backend Development',
      description: 'Building scalable server-side applications',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'C++', level: 82 },
        { name: 'C', level: 78 },
      ]
    },
    tools: {
      icon: <FiTool />,
      color: '#8b5cf6',
      title: 'Tools',
      description: 'Utilizing modern development tools and practices',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 80 },
      ]
    }
  };

  return (
    <section className="skills" id='skills'>
      <div className="skills__background">
        <div className="skills__gradient-blob" />
        <div className="skills__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="skills__grid-item" />
          ))}
        </div>
      </div>

      <div className="skills__container">
        <motion.div 
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="skills__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            What I Do Best
          </motion.span>
          <motion.h2 
            className="skills__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            My Skills
          </motion.h2>
        </motion.div>

        <motion.div 
          className="skills__categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {Object.entries(skills).map(([key, value]) => (
            <motion.button
              key={key}
              className={`skills__category ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--accent-color': value.color }}
            >
              {value.icon}
              <span>{value.title}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="skills__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="skills__info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="skills__icon" style={{ color: skills[activeCategory].color }}>
              {skills[activeCategory].icon}
            </div>
            <h3 className="skills__category-title">{skills[activeCategory].title}</h3>
            <p className="skills__category-description">
              {skills[activeCategory].description}
            </p>
          </motion.div>

          <motion.div 
            className="skills__list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            {skills[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skills__item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="skills__item-header">
                  <span className="skills__item-name">{skill.name}</span>
                  <span className="skills__item-level">{skill.level}%</span>
                </div>
                <div className="skills__item-bar">
                  <motion.div
                    className="skills__item-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    style={{ backgroundColor: skills[activeCategory].color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;