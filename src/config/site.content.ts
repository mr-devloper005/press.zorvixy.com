import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media release newsroom',
  },
  footer: {
    tagline: 'Distribution, visibility, and newsroom credibility',
  },
  hero: {
    badge: 'Live Media Release Network',
    title: ['Amplify every announcement', 'with trusted press distribution.'],
    description:
      'Press Zorvixy helps teams publish editorial-quality releases, reach journalists across 120+ channels, and monitor campaign performance from one modern workflow.',
    primaryCta: {
      label: 'Browse Releases',
      href: '/directory-press',
    },
    secondaryCta: {
      label: 'Submit a Release',
      href: '/register',
    },
    searchPlaceholder: 'Search press releases…',
    focusLabel: 'Featured',
    featureCardBadge: 'Newsroom',
    featureCardTitle: 'Launch campaigns with editorial-grade formatting and faster distribution.',
    featureCardDescription:
      'Use a modern media workflow to move from draft to publication while keeping every release discoverable and shareable.',
  },
  home: {
    metadata: {
      title: 'Press Release Distribution & Media Newsroom — Press Zorvixy',
      description:
        'Explore the latest press releases, media announcements, and business updates published on Press Zorvixy.',
      openGraphTitle: 'Press Release Distribution & Media Newsroom',
      openGraphDescription:
        'A modern media publishing experience for announcements, company updates, and distributed press releases.',
      keywords: ['press release distribution', 'media newsroom', 'business announcements', 'PR distribution', 'media outreach'],
    },
    introBadge: 'Platform',
    introTitle: 'A media-first workflow for publishing and distribution.',
    introParagraphs: [
      'Press Zorvixy is built for founders, PR teams, and agencies that need to publish releases quickly without sacrificing editorial presentation.',
      'Every release page balances readability, trust signals, and search discoverability so visitors can scan and share updates faster.',
      'The interface keeps publishing workflows straightforward while still looking like a polished SaaS media product.',
    ],
    sideBadge: 'Core outcomes',
    sidePoints: [
      'Faster distribution of release content.',
      'Clear analytics and performance visibility.',
      'Scannable newsroom archive and search.',
      'Trust-first editorial presentation for every release.',
    ],
    primaryLink: {
      label: 'Browse Latest Releases',
      href: '/directory-press',
    },
    secondaryLink: {
      label: 'Talk to our team',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get Started',
    title: 'Choose a press release plan that matches your distribution goals.',
    description:
      'From startup announcements to enterprise campaigns, our platform supports publication, distribution, and reporting in one place.',
    primaryCta: {
      label: 'Compare Pricing',
      href: '/pricing',
    },
    secondaryCta: {
      label: 'View Latest Releases',
      href: '/directory-press',
    },
  },
  taskSectionHeading: 'Latest Press Releases',
  taskSectionDescriptionSuffix: 'Read the newest stories from the media desk.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest news',
    description: 'Read recent press media, product launches, and media updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest news',
    paragraphs: [
      'Browse fresh press media, campaign announcements, and editorial updates from companies and communication teams.',
      'Use category, date, and keyword filters to scan the archive quickly and open any release in a full editorial view.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
