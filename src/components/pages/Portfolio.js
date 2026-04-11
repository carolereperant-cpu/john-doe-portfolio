import React from 'react';
import freshFood from '../../assets/images/fresh-food.jpg';
import restaurant from '../../assets/images/restaurant-japonais.jpg';
import espaceBienEtre from '../../assets/images/espace-bien-etre.jpg';
import seo from '../../assets/images/seo.jpg';
import coder from '../../assets/images/coder.jpg';
import screens from '../../assets/images/screens.jpg';

function Portfolio() {
  const projects = [
    {
      image: freshFood,
      alt: 'Fresh Food - Site de vente de produits frais',
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec PHP et MySQL',
      link: '#',
    },
    {
      image: restaurant,
      alt: 'Restaurant Akira - Site de restaurant japonais',
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec WordPress',
      link: '#',
    },
    {
      image: espaceBienEtre,
      alt: 'Espace bien-être - Site de bien-être',
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne',
      tech: 'Site réalisé avec LARAVEL',
      link: '#',
    },
    {
      image: seo,
      alt: "SEO - Amélioration du référencement",
      title: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce",
      tech: 'Utilisation des outils SEO',
      link: '#',
    },
    {
      image: coder,
      alt: "Création d'une API - Développement backend",
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      tech: 'PHP - SYMFONY',
      link: '#',
    },
    {
      image: screens,
      alt: "Maquette d'un site web - Prototypage UI",
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      tech: 'Réalisé avec FIGMA',
      link: '#',
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="page-banner" role="img" aria-label="Bannière Portfolio"></div>

      {/* Content */}
      <section className="py-5" aria-label="Portfolio de John Doe">
        <div className="container">

          {/* Title */}
          <div className="section-title">
            <h1>Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p>
            <hr className="section-divider" />
          </div>

          {/* Cards */}
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-12 col-md-4" key={project.title}>
                <div className="card portfolio-card h-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title h5">{project.title}</h2>
                    <p className="card-text text-muted flex-grow-1">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="btn btn-primary mx-auto mt-2"
                      aria-label={`Voir le site ${project.title}`}
                    >
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer text-muted">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Portfolio;
