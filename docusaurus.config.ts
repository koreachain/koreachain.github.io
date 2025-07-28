import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Korea Chain',
  tagline: 'Speed. Security. AI. Korea Chain: For the People of the World.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://koreachain.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'koreachain', // Usually your GitHub org/user name.
  projectName: 'koreachain.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Korea Chain',
      logo: {
        alt: 'Korea Chain Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://korea-chain.com/',
          label: 'Korea Chain',
          position: 'left',
        },
        {
          href: 'https://www.tensor.trade/trade/plushylilpenguins',
          label: 'Buy NFT for Airdrop ✨',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Open Source',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/koreachain',
            },
          ],
        },
        // { title: 'Centered', items: [] }, // Uncomment for a centered section
        {
          title: 'External Links',
          items: [
            {
              label: 'Korea Chain',
              to: 'https://korea-chain.com/',
            },
            {
              label: 'Buy NFT for Airdrop ✨',
              to: 'https://www.tensor.trade/trade/plushylilpenguins',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {name: 'keywords', content: 'blockchain, AI, privacy, crypto, Korea Chain, scalability, interoperability, security'},
      {name: 'description', content: 'Korea Chain: Ultra-scalable AI blockchains, privacy-first, and future-ready.'},
      {property: 'og:title', content: 'Korea Chain - Ultra-scalable AI Blockchains'},
      {property: 'og:description', content: 'Discover Korea Chain: AI-native, privacy-first, hyper-scalable blockchains.'},
      {property: 'og:image', content: 'img/social-card.jpg'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Korea Chain - Ultra-scalable AI Blockchains'},
      {name: 'twitter:description', content: 'Discover Korea Chain: AI-native, privacy-first, hyper-scalable blockchains.'},
      {name: 'twitter:image', content: 'img/social-card.jpg'},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
