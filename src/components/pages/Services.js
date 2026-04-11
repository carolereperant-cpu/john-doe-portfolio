import React from 'react';

function Services() {
  const services = [
    {
      icon: 'bi-pen',
      title: 'UX Design',
      description:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      description:
        'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      description:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="page-banner" role="img" aria-label="Bannière Services"></div>

      {/* Content */}
      <section className="py-5" aria-label="Offre de services">
        <div className="container">

          {/* Title */}
          <div className="section-title">
            <h1>Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <hr className="section-divider" />
          </div>

          {/* Cards */}
          <div className="row g-4 justify-content-center">
            {services.map((service) => (
              <div className="col-12 col-md-4" key={service.title}>
                <div className="card service-card h-100">
                  <i className={`bi ${service.icon}`} aria-hidden="true"></i>
                  <h2 className="h5">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;
