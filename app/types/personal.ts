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
