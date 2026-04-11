import React, { useState } from 'react';
import GitHubModal from '../ui/GitHubModal';
import aboutImg from '../../assets/images/john-doe-about.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const skills = [
    { label: 'HTML5', percent: 90, color: 'bg-danger' },
    { label: 'CSS3', percent: 80, color: 'bg-info' },
    { label: 'JAVASCRIPT', percent: 70, color: 'bg-warning' },
    { label: 'PHP', percent: 60, color: 'bg-success' },
    { label: 'REACT', percent: 50, color: 'bg-primary' },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" aria-label="Présentation de John Doe">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            className="btn btn-danger px-4 py-2"
            onClick={() => setShowModal(true)}
            aria-haspopup="dialog"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* ===== ABOUT + SKILLS SECTION ===== */}
      <section className="about-section" aria-label="À propos et compétences">
        <div className="container">
          <div className="row g-4">

            {/* About */}
            <div className="col-md-6">
              <h2 className="mb-3">A propos</h2>
              <hr className="section-divider text-start ms-0" style={{ margin: '0 0 1.5rem 0' }} />
              <img
                src={aboutImg}
                alt="Photo de John Doe, développeur web"
                className="mb-3"
                style={{ borderRadius: '4px', maxWidth: '100%' }}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
              </p>
            </div>

            {/* Skills */}
            <div className="col-md-6">
              <h2 className="mb-3">Mes compétences</h2>
              <hr className="section-divider text-start ms-0" style={{ margin: '0 0 1.5rem 0' }} />
              <div className="skills-section">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <p className="skill-label">
                      {skill.label} {skill.percent}%
                    </p>
                    <div className="progress mb-3" role="progressbar" aria-label={skill.label} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100">
                      <div
                        className={`progress-bar ${skill.color}`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== GITHUB MODAL ===== */}
      <GitHubModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;
