import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'jayajayswal49@gmail.com',
      link: 'mailto:jayajayswal49@gmail.com',
      color: '#6366f1'
    },
    // {
    //   icon: <FiPhone />,
    //   title: 'Phone',
    //   value: '+1 234 567 890',
    //   link: 'tel:+1234567890',
    //   color: '#ec4899'
    // },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Indore, MP, India',
      link: 'https://maps.google.com',
      color: '#8b5cf6'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/jayajayswal01', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/jayajayswal01', label: 'LinkedIn' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section className="contact" id='contact'>
      <div className="contact__background">
        <div className="contact__gradient-blob" />
        <div className="contact__grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="contact__grid-item" />
          ))}
        </div>
      </div>

      <div className="contact__container">
        <motion.div 
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="contact__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="contact__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contact Me
          </motion.h2>
        </motion.div>

        <div className="contact__content">
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="contact__cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="contact__card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__card-icon" style={{ color: info.color }}>
                    {info.icon}
                  </span>
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="contact__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="contact__social-link"
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

          <motion.form 
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="contact__form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="contact__form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="contact__form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div 
              className="contact__form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </motion.div>

            <motion.button
              className={`contact__submit ${isSubmitting ? 'submitting' : ''} ${submitStatus ? submitStatus : ''}`}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;