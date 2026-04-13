import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">

          {/* Colonne 1 : Coordonnées + réseaux sociaux */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>John Doe</h3>
            <address>
              <p>
                40 rue Laure Diebold<br />
                69009 Lyon, France<br />
                10 20 30 40 50<br />
                john.doe@gmail.com
              </p>
            </address>
            <div className="footer-social">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub de John Doe"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Twitter de John Doe"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://linkedin.com/in/john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn de John Doe"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>Liens utiles</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Dernières réalisations */}
          <div className="col-md-4">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d'une API</Link></li>
              <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
