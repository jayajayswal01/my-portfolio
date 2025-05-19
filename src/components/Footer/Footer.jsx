import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/jayajayswal01', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/jayajayswal01', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:jayajayswal49@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <motion.div 
          className="footer__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer__left">
            <h3 className="footer__logo">Jaya Jayswal</h3>
            <p className="footer__tagline">
              Full Stack Developer crafting digital experiences
            </p>
          </div>

          <div className="footer__center">
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer__right">
            <motion.p 
              className="footer__quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              "Turning ideas into reality through code"
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="footer__copyright">
            <p>
              © {currentYear} Jaya Jayswal. Made with{' Jaya  '}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#6366f1', '#ec4899', '#6366f1'] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity 
                }}
              >
                <FiHeart />
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;