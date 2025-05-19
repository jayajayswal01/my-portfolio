import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const [activeEdu, setActiveEdu] = useState('btech');

  const education = {
    btech: {
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institute: 'Malwa Institute of Technology',
      duration: '2023 - 2027',
      location: 'Indore, MP',
      cgpa: '7.5',
      status: 'Pursuing',
      color: '#6366f1',
      highlights: [
        'Perfect Attendance',
      ]
    },
    twelve: {
      degree: 'Higher Secondary (XII)',
      field: 'Science with Computer Science',
      institute: 'CBSE',
      duration: '2021 - 2023',
      location: 'Bhopal, MP',
      percentage: '92%',
      status: 'Completed',
      color: '#ec4899',
      highlights: [
        'School topper in Computer Science',
        'Participated in Science Olympiad',
        'Member of School Tech Club',
        'Perfect attendance award'
      ]
    },
    ten: {
      degree: 'Secondary School (X)',
      field: 'General Studies',
      institute: 'CBSE',
      duration: '2020 - 2021',
      location: 'Bhopal, MP',
      percentage: '95%',
      status: 'Completed',
      color: '#8b5cf6',
      highlights: [
        'School rank holder',
        'Best student award',
        'Won mathematics competition',
        'Active participant in school activities'
      ]
    }
  };

  return (
    <section className="education" id='education'>
      <div className="education__background">
        <div className="education__gradient-blob" />
        <div className="education__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="education__grid-item" />
          ))}
        </div>
      </div>

      <div className="education__container">
        <motion.div 
          className="education__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="education__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Academic Journey
          </motion.span>
          <motion.h2 
            className="education__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Education & Qualifications
          </motion.h2>
        </motion.div>

        <div className="education__content">
          <motion.div 
            className="education__timeline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {Object.entries(education).reverse().map(([key, value], index) => (
              <motion.div
                key={key}
                className={`education__timeline-item ${activeEdu === key ? 'active' : ''}`}
                onClick={() => setActiveEdu(key)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ '--accent-color': value.color }}
              >
                <div className="education__timeline-dot" />
                <div className="education__timeline-content">
                  <h3>{value.degree}</h3>
                  <p>{value.institute}</p>
                  <span>
                    <FiCalendar /> {value.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="education__details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="education__card"
              key={activeEdu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="education__card-header" style={{ background: education[activeEdu].color }}>
                <FiBook className="education__card-icon" />
                <h3>{education[activeEdu].degree}</h3>
                <span className="education__card-status">{education[activeEdu].status}</span>
              </div>

              <div className="education__card-body">
                <div className="education__card-info">
                  <p><FiMapPin /> {education[activeEdu].location}</p>
                  <p><FiAward /> {education[activeEdu].field}</p>
                  <p><FiCalendar /> {education[activeEdu].duration}</p>
                  {education[activeEdu].cgpa && 
                    <p className="education__card-grade">CGPA: {education[activeEdu].cgpa}</p>
                  }
                  {education[activeEdu].percentage && 
                    <p className="education__card-grade">Percentage: {education[activeEdu].percentage}</p>
                  }
                </div>

                <div className="education__card-highlights">
                  <h4>Key Highlights</h4>
                  <ul>
                    {education[activeEdu].highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <FiCheck /> {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;