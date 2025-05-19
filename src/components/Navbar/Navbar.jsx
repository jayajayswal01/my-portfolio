import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Handle active section detection
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust this value based on your navbar height
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="highlight">J</span>aya
        </a>
      </div>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {[
          { id: 'home', icon: '🏠', label: 'Home' },
          { id: 'about', icon: '👨‍💻', label: 'About' },
          { id: 'projects', icon: '🚀', label: 'Projects' },
          { id: 'skills', icon: '⚡', label: 'Skills' },
          { id: 'education', icon: '🎓', label: 'Education' },
          { id: 'contact', icon: '📫', label: 'Contact' }
        ].map(({ id, icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-item ${activeSection === id ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, id)}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </a>
        ))}
      </div>

      <div 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;