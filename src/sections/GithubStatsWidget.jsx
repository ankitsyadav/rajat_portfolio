import { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import '../styles/github-stats.css';

const API_USER = 'https://api.github.com/users/rajatydv001';
const API_REPOS = 'https://api.github.com/users/rajatydv001/repos?sort=updated&per_page=1';

export function GithubStatsWidget() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(API_USER, { signal: ac.signal }),
          fetch(API_REPOS, { signal: ac.signal }),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error(`GitHub API responded with ${userRes.status}`);
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setData({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          latestRepo: reposData[0] || null,
        });
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Failed to load GitHub stats');
      } finally {
        if (!ac.signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => ac.abort();
  }, []);

  return (
    <section className="github-stats" id="github-stats">
      <div className="container">
        <SectionHeader
          label="GitHub"
          title="Open source pulse."
          subtitle=""
        />

        <div className="github-stats__card">
          {loading && (
            <div className="github-stats__loading" aria-label="Loading GitHub stats">
              <div className="github-stats__skeleton github-stats__skeleton--short" />
              <div className="github-stats__skeleton" />
              <div className="github-stats__skeleton github-stats__skeleton--med" />
            </div>
          )}

          {error && (
            <p className="github-stats__error">
              Unable to load GitHub data. {error}
              <br />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Try again later — API may be rate-limited.
              </span>
            </p>
          )}

          {data && !error && (
            <>
              <div className="github-stats__grid">
                <div className="github-stats__stat">
                  <span className="github-stats__stat-value">{data.publicRepos}</span>
                  <span className="github-stats__stat-label">Public Repos</span>
                </div>
                <div className="github-stats__stat">
                  <span className="github-stats__stat-value">{data.followers}</span>
                  <span className="github-stats__stat-label">Followers</span>
                </div>
                <div className="github-stats__stat">
                  <span className="github-stats__stat-value">{data.latestRepo ? data.latestRepo.stargazers_count : 0}</span>
                  <span className="github-stats__stat-label">Stars</span>
                </div>
              </div>

              {data.latestRepo && (
                <div className="github-stats__latest">
                  <span className="github-stats__latest-label">Latest update</span>
                  <a
                    href={data.latestRepo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-stats__latest-link"
                  >
                    {data.latestRepo.name}
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
