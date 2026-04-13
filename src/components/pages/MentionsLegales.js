import React, { useEffect } from 'react';

function MentionsLegales() {
  // Add noindex meta tag for this page
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="mentions-section" aria-label="Mentions légales">
      <div className="container">

        {/* Title */}
        <div className="section-title">
          <h1>Mentions légales</h1>
          <hr className="section-divider" />
        </div>

        {/* Accordion */}
        <div className="accordion" id="mentionsAccordion">

          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEditeur">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEditeur"
                aria-expanded="true"
                aria-controls="collapseEditeur"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseEditeur"
              className="accordion-collapse collapse show"
              role="region"  
              aria-labelledby="headingEditeur"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5">John Doe</h3>
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
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHebergeur">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHebergeur"
                aria-expanded="false"
                aria-controls="collapseHebergeur"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseHebergeur"
              className="accordion-collapse collapse"
              role="region"  
              aria-labelledby="headingHebergeur"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5">alwaysdata</h3>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <i className="bi bi-globe me-2" aria-hidden="true"></i>
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCredits">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCredits"
                aria-expanded="false"
                aria-controls="collapseCredits"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseCredits"
              className="accordion-collapse collapse"
              role="region"  
              aria-labelledby="headingCredits"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h3 className="h5">Crédits</h3>
                <p>
                  Ce site a été réalisé par John Doe, étudiant au{' '}
                  <a
                    href="https://www.cef.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de formation
                  </a>
                  .
                </p>
                <p>
                  <em>
                    Les images utilisées sur ce site sont libres de droits et
                    ont été obtenues sur le site{' '}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>
                  </em>
                </p>
                <p>
                  <em>
                    La favicon de ce site a été fournie par{' '}
                    <a
                      href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                  </em>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;
