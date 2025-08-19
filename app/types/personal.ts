export interface TechStack {
  title: string;
  items: string[];
}

export interface HobbyItem {
  title: string;
  subtitle: string;
}

export interface SocialItem {
  platform: string;
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
  heroSubtitle: string;
  work: {
    title: string;
    description: string;
    experience: string;
    techStacksTitle: string;
    techStacks: {
      backend: TechStack;
      frontend: TechStack;
      mobile: TechStack;
      infrastructure: TechStack;
      tools: TechStack;
    };
  };
  hobbies: {
    title: string;
    items: HobbyItem[];
  };
  socials: {
    title: string;
    items: SocialItem[];
  };
  navigation: {
    sourceLabel: string;
    themeToggleLabel: string;
  };
  sourceRepo: string;
  copyright: string;
}
