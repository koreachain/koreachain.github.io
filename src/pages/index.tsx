import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ background: '#161d2b' }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.tensor.trade/trade/plushylilpenguins"
            style={{
              background: '#161d2b',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 3px 16px white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              padding: '0.75em 1.5em',
              borderRadius: '2em',
              transition: 'transform 0.2s',
              transform: 'scale(1)',
              marginTop: '1rem',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.07)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Buy NFT for Airdrop ✨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Open Source AI Blockchain`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
