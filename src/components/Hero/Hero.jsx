import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import HeroImage from  '../../assets/hero.svg'
import { 
  FiGithub, FiLinkedin, FiTwitter, 
  FiArrowRight,
   FiDownload, 
  FiMail
} from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  // State management
  const [isHovered, setIsHovered] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Data
  const roles = [
    { text: 'Frontend Developer', icon: '💻', color: '#6366f1' },
    { text: 'UI/UX Designer', icon: '🎨', color: '#ec4899' },
    { text: 'Problem Solver', icon: '🧩', color: '#8b5cf6' },
    { text: 'Tech Enthusiast', icon: '⚡', color: '#10b981' }
  ];

  const skills = [
    { name: 'React', progress: 90, color: '#61DAFB', icon: '/icons/react.svg' },
    { name: 'TypeScript', progress: 85, color: '#3178C6', icon: '/icons/typescript.svg' },
    { name: 'Node.js', progress: 80, color: '#339933', icon: '/icons/nodejs.svg' },
    { name: 'UI Design', progress: 88, color: '#ec4899', icon: '/icons/figma.svg' }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/jayajayswal01', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/jayajayswal01', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:jayajayswal49@gmail.com', label: 'Email' }
  ];

  // Mouse movement effect
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    setMousePosition({ 
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D hover effect
  const springProps = useSpring({
    transform: isHovered 
      ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <section className="hero" id='home'>
      {/* Background Elements */}
      <div className="hero__background">
        <div 
          className="hero__gradient-blob"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div className="hero__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="hero__grid-item" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <animated.div 
        className="hero__container"
        style={springProps}
      >
        {/* Left Side - Image & Skills */}
        <div className="hero__left">
          <motion.div 
            className="hero__image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="hero__image-wrapper">
              <img 
                src={HeroImage}
                alt="Profile" 
                className="hero__image"
              />
              <div className="hero__image-overlay" />
              
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="hero__skill-badge"
                  style={{
                    '--rotation': `${index * 90}deg`,
                    '--color': skill.color
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="hero__skill-progress">
                    <svg viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="3"
                        strokeDasharray={`${skill.progress}, 100`}
                      />
                    </svg>
                    <span>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="hero__right">
          <motion.div 
            className="hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero__greeting">
              <motion.span 
                className="hero__emoji"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                👋
              </motion.span>
              <span>Welcome, I'm</span>
            </div>

            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Jaya Jayswal
              <motion.div 
                className="hero__title-decoration"
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h1>

            <motion.div className="hero__roles">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  className="hero__role"
                  style={{ color: roles[currentRole].color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {roles[currentRole].icon}
                  <span style={{color: 'white'}}>{roles[currentRole].text}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p 
              className="hero__description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I craft exceptional digital experiences that combine cutting-edge 
              technology with stunning design. Let's build something amazing together.
            </motion.p>

            <motion.div 
              className="hero__cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="hero__button hero__button--primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <FiArrowRight className="hero__button-icon" />
              </motion.button>

              {/* <motion.button 
                className="hero__button hero__button--secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <FiDownload className="hero__button-icon" />
              </motion.button> */}
            </motion.div>

            <motion.div 
              className="hero__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="hero__social-link"
                  whileHover={{ scale: 1.2, rotate: 10, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </animated.div>
    </section>
  );
};

export default Hero;