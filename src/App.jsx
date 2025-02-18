import React, { useState } from 'react';
import './App.css';
import heroImage from '/assets/hero-background.jpg'; // Placeholder for hero image

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#resources" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
              <li><a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
              <li><a href="#join" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            </ul>
            <a href="mailto:balaramakrishnasaikarumanchi0@gmail.com" className="contact-button">Contact Me</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Driving Impact Through Strategic Leadership, Client Satisfaction, and Data-Driven Innovation</h1>
            <p className="hero-subheader">Program Manager | Cybersecurity Expert | Change Management Leader | Digital Transformation Enabler</p>
            <a href="https://drive.google.com/file/d/1lhR9eox_IcAf-49cRmcdxzX-qvsYfIfz/view?usp=sharing" className="hero-button">
              Download Resume <span className="arrow">→</span>
            </a>
          </div>
          
        </div>
      </section>

      <section className="sso-section">
      <div className="container">
          <h2>About</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>"Let's connect and explore how we can drive success together!"</h3>
              <p>With a strong foundation in program management, cybersecurity, and digital transformation, I specialize in leading complex projects across global teams to deliver measurable results. Certified in Cybersecurity (ISC2 CC) and skilled in leveraging tools like SharePoint, Power BI, and Power Apps, I am passionate about driving efficiency, enhancing client satisfaction, and enabling data-driven decision-making.</p>
              <ul></ul>
                <ul>
              <a href="mailto:balaramakrishnasaikarumanchi0@gmail.com" className="contact-button about-contact">
            Contact Me
          </a>
              </ul>
            </div>
            <div className="resource-item">
            <div className="sso-features">
            <div className="sso-feature">
            <h3>Education</h3>
              <h4>PGDM, Marketing & Strategy</h4>
              <p className="date">NMIMS, Bangalore (2017-2019)</p>
              <ul>
                <li>Consistent top 5 in strategy courses</li>
                <li>Design Head for the Public Relations Committee</li>
              </ul>
            </div>
            <div className="sso-feature">
              <h4>B.Tech, Electronics and Communication Engineering</h4>
              <p className="date">GITAM University, Visakhapatnam (2011-2015)</p>
              <ul>
                <li>Graduated in the top 10% with distinction</li>
                <li>Recognized as a Microsoft Student Partner for excellence in technology and leadership</li>
                </ul>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>Project and Program Management</li>
            <li>Change Management</li>
            <li>Data-Driven Decision-Making</li>
            <li>Customer Relationship Management</li>
            <li>Consultative Mindset</li>
            <li>Leadership and Team Management</li>
            <li>Digital Tools and Technology</li>
            <li>SharePoint & Power BI</li>
            <li>Stakeholder Communication</li>
            <li>Marketing and Strategy</li>
          </ul>
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>Atos</h3>
              <p>Program Manager, Bangalore (Aug 2022 - Present)</p>
              <ul>
                <li>Led complex cybersecurity projects across APAC, MEA, Europe & US, ensuring on-time delivery.</li>
                <li>Built data-driven dashboards, reducing top management efforts by 40%.</li>
                <li>Drove Service Improvement Plans, boosting client satisfaction by 30%.</li>
                <li>Streamlined project tracking for improved efficiency.</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>PwC</h3>
              <p>Manager - Change Management, Bangalore (Nov 2021 – July 2022)</p>
              <ul>
                <li>Led firm-wide change management initiatives for seamless transitions.</li>
                <li>Collaborated cross-functionally to drive effective change strategies.</li>
                <li>Leveraged digital tools to enhance impact assessment and efficiency.</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>QNu Labs</h3>
              <p>Consultant – Pre Sales & Customer Success, Bangalore & Dubai (May 2019 – Nov 2021)</p>
              <ul>
                <li>First Pre-Sales & Techno-Business hire, contributing to company growth.</li>
                <li>Consulted across six global teams, driving a $5M Pre-Sales funnel.</li>
                <li>Innovated solutions, achieving a 75% PoC conversion probability.</li>
                <li>Fast-tracked promotion, expanding QNu Labs into the USA market.</li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>Tata Consultancy Services</h3>
              <p>Embedded Systems Analyst, Hyderabad (Aug 2015 – May 2017)</p>
              <ul>
                <li>Specialized in automotive safety, cutting analysis time by 50% and testing time by 70%.</li>
                <li>Trained new team members and represented the team in client interactions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="achievements">
        <div className="container">
          <h2>Achievements & Recognition</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <h3>Certifications</h3>
                <p>ISC2 Certified in Cybersecurity - Demonstrated expertise in foundational cybersecurity concepts and best practices</p>
                <p>Microsoft Power BI - Advanced data visualization and analytics certification showcasing expertise in creating impactful business intelligence solutions</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <h3>Corporate Awards</h3>
                <p>PwC - Multiple recognitions within 3 months of joining</p>
                <p>TCS - </p><p>Star of the Month: Acknowledged as an inspiring role model to colleagues for consistently maintaining excellence </p>
                  <p>Star Team: Commended for dedication and commitment to delivering exceptional results</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <h3>Top Performer</h3>
                <p>Atos - Promoted within 2 years of joining</p>
                <p>QNu Labs - Promoted to head business directly from Dubai within 6 months of joining</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <h3>Educational Achievements</h3>
                <h4>PGDM</h4>
                <p>Consistent top 5 of the class in strategy courses</p>
                <p>Served as the Design Head for the Public Relations committee, responsible for branding and design efforts for the institution</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <h3>Educational Achievements</h3>
                <h4>B.Tech</h4>
                <p>Top 10% of the class with distinction degree</p>
                <p>Below 2000 Rank in the Entrance test</p>
                <p>Recognized as a Microsoft Student Partner for excellence in technology and leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="container join-container">
          <div className="join-left">
            <h2>Case Study</h2>
            <p>Streamlining Operations and Enabling Data-Driven Decision-Making</p>
            <a href="https://drive.google.com/file/d/1Il6BhCHWKomunBpWj_aRCyzzVPOWVJRO/view" className="read-button join-button">Continue Reading <span className="arrow">→</span></a>
          </div>
          <div className="join-right">
          <h2>Case Study</h2>
            <p>Transforming Data Security with Quantum Technology</p>
            <a href="https://drive.google.com/file/d/1m9bFFITs3ou0oWoj-PXO4mymISnlNF44/view" className="read-button join-button">Continue Reading <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:balaramakrishnasaikarumanchi0@gmail.com">balaramakrishnasaikarumanchi0@gmail.com</a> <br />
            LinkedIn: <a href="https://www.linkedin.com/in/balak-73368253/">Bala Karumanchi</a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bala Karumanchi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
