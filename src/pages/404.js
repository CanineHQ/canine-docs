import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem',
        }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.7 }}>
          This page doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/">
            Get Started
          </Link>
          <Link className="button button--outline button--lg" to="/">
            Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
