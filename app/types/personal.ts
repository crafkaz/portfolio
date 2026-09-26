export interface TechStack {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  summary?: string;
}

export interface HobbyItem {
  title: string;
  subtitle: string;
}

export interface SocialItem {
  platform: string;
  label: string;
  url: string;
  username: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage: string;
  twitterHandle: string;
  lang: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  intro: string;
  summary: string;
  heroSubtitle: string;
  location: {
    label: string;
    timeZone: string;
    timeZoneLabel: string;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  stack: {
    title: string;
    groups: TechStack[];
  };
  hobbies: {
    title: string;
    items: HobbyItem[];
  };
  socials: {
    title: string;
    newTabLabel: string;
    items: SocialItem[];
  };
  navigation: {
    sourceLabel: string;
    themeToggleLabel: string;
    backToTopLabel: string;
  };
  sourceRepo: string;
  copyrightHolder: string;
}
