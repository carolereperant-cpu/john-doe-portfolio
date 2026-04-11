import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  return (
    <>
      {/* Content */}
      <section className="contact-section" aria-label="Contactez John Doe">
        <div className="container">

          {/* Title */}
          <div className="section-title">
            <h1>Contact</h1>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <hr className="section-divider" />
          </div>

          {/* Card */}
          <div className="contact-card">
            <div className="row g-4">

              {/* Contact Form */}
              <div className="col-md-6">
                <h2 className="h4 mb-3">Formulaire de contact</h2>
                <hr className="section-divider ms-0 text-start" style={{ margin: '0 0 1.5rem 0' }} />

                {submitted ? (
                  <div className="alert alert-success" role="alert">
                    Votre message a bien été envoyé. Merci !
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="nom" className="visually-hidden">Votre nom</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        className="form-control"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="visually-hidden">Votre adresse email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Votre adresse email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telephone" className="visually-hidden">Votre numéro de téléphone</label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="form-control"
                        placeholder="Votre numéro de téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sujet" className="visually-hidden">Sujet</label>
                      <input
                        type="text"
                        id="sujet"
                        name="sujet"
                        className="form-control"
                        placeholder="Sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="visually-hidden">Votre message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Votre message"
                        rows="8"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary px-4">
                        Envoyer
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Info + Map */}
              <div className="col-md-6">
                <h2 className="h4 mb-3">Mes coordonnées</h2>
                <hr className="section-divider ms-0 text-start" style={{ margin: '0 0 1.5rem 0' }} />

                <div className="contact-info mb-3">
                  <p className="fw-semibold mb-2">John Doe</p>
                  <p>
                    <i className="bi bi-building me-2" aria-hidden="true"></i>
                    40 rue Laure Diebold
                  </p>
                  <p>
                    <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
                    69009 Lyon, France
                  </p>
                  <p>
                    <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                    10 20 30 40 50
                  </p>
                  <p>
                    <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                    john.doe@gmail.com
                  </p>
                </div>

                {/* Google Map embed */}
                <iframe
                  title="Localisation de John Doe - 40 rue Laure Diebold, Lyon"
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3!2d4.8087!3d45.7737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb8c4a9b0001%3A0x1234567890abcdef!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Carte Google Maps : 40 rue Laure Diebold, 69009 Lyon"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
