import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Img?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ultra-scalable AI Blockchains',
    Img: require('@site/static/img/left.jpg').default,
    description: (
      <>
        AI-native architecture powering our sovereign Korea Chain and NFT·Chain.
        A future-ready network of parallel RollApps, each AI-optimized and governed by intelligent agents.
      </>
    ),
  },
  {
    title: 'The Royale Society of Iceberg NFT',
    Img: require('@site/static/img/center.jpg').default,
    description: (
      <>
        Buyers get a slice of the <a href="https://nft-chain.org/collection/iceberg" target="_blank" rel="noopener noreferrer">Korea Chain Airdrop + Lifetime Revenue Share + Rewards Forever</a>!
        Uniquely lovable heart-stealers made to melt hearts and spark imaginations.
        Get yours before they’re gone!
      </>
    ),
  },
  {
    title: 'Supercharged Speed Transactions',
    Img: require('@site/static/img/right.jpg').default,
    description: (
      <>
        Blazing-fast, ultra-secure, eco-friendly blockchain: 20K TPS, 200ms finality,
        military-grade security, national-scale ready, privacy-first,
        and 6x more efficient than other solutions.
      </>
    ),
  },
];

function Feature({title, Svg, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} className={styles.featureSvg} role="img" alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {title === 'The Royale Society of Iceberg NFT' ? (
            <a href="https://nft-chain.org/collection/iceberg" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>
              {title}
            </a>
          ) : title === 'Ultra-scalable AI Blockchains' ? (
            <a href="/docs/our-products/ai-chains" style={{color: 'inherit', textDecoration: 'underline'}}>
              {title}
            </a>
          ) : title === 'Supercharged Speed Transactions' ? (
            <a href="/docs/our-products/ai-chains" style={{color: 'inherit', textDecoration: 'underline'}}>
              {title}
            </a>
          ) : (
            title
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
