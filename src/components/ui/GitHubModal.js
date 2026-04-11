import React, { useEffect, useState } from 'react';

function GitHubModal({ show, onClose }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch GitHub profile only once on mount
  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors du chargement du profil GitHub');
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="githubModalLabel"
        aria-modal="true"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="githubModalLabel">
                Mon profil GitHub
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Fermer"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {loading && (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="alert alert-danger">{error}</div>
              )}

              {profile && (
                <div className="row align-items-start">
                  {/* Avatar */}
                  <div className="col-md-5 mb-3 mb-md-0">
                    <img
                      src={profile.avatar_url}
                      alt={`Avatar GitHub de ${profile.name || profile.login}`}
                      className="github-modal-avatar img-fluid"
                    />
                  </div>

                  {/* Info */}
                  <div className="col-md-7">
                    <div className="github-info-item">
                      <i className="bi bi-person"></i>
                      <span>
                        <a
                          href={profile.html_url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          {profile.name || profile.login}
                        </a>
                      </span>
                    </div>

                    {profile.location && (
                      <div className="github-info-item">
                        <i className="bi bi-geo-alt"></i>
                        <span>{profile.location}</span>
                      </div>
                    )}

                    {profile.bio && (
                      <div className="github-info-item">
                        <i className="bi bi-journal-text"></i>
                        <span>{profile.bio}</span>
                      </div>
                    )}

                    <div className="github-info-item">
                      <i className="bi bi-folder2"></i>
                      <span>Repositories : {profile.public_repos}</span>
                    </div>

                    <div className="github-info-item">
                      <i className="bi bi-people"></i>
                      <span>Followers : {profile.followers}</span>
                    </div>

                    <div className="github-info-item">
                      <i className="bi bi-people"></i>
                      <span>Following : {profile.following}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default GitHubModal;
