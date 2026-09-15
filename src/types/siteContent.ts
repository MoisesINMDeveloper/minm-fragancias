export interface LinkContent {
  label: string;
  href: string;
}

export interface StatContent {
  value: string;
  label: string;
}

export interface SiteContent {
  brand: {
    shortName: string;
    logo1: string;
    eyebrow: string;
    name: string;
    fullName: string;
  };
  navigation: LinkContent[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: LinkContent;
    secondaryCta: LinkContent;
    featuredLabel: string;
    stats: StatContent[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryDescription: string;
    stats: StatContent[];
  };
  catalog: {
    eyebrow: string;
    title: string;
    searchPlaceholder: string;
    searchLabel: string;
    categoryLabel: string;
    allCategoriesLabel: string;
    segmentLabel: string;
    allSegmentsLabel: string;
    emptyMessage: string;
    availabilityLabel: string;
    detailLabel: string;
  };
  modal: {
    closeLabel: string;
    notesLabel: string;
    notes: string;
    durationLabel: string;
    duration: string;
    formatLabel: string;
    format: string;
    continueLabel: string;
  };
  footer: {
    description: string;
    navigationTitle: string;
    socialTitle: string;
    socialLinks: LinkContent[];
    copyright: string;
    tagline: string;
  };
  metadata: {
    title: string;
    description: string;
    language: string;
  };
  currency: string;
}
