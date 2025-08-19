import { PersonalInfo, SiteMetadata } from "../types";

export const siteMetadata: SiteMetadata = {
  title: "Kazuki Nagasawa - Software Engineer",
  description: "大阪を拠点にWeb開発を行うソフトウェアエンジニア。",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Kazuki",
    "Nagasawa",
    "大阪",
  ],
  author: "Kazuki Nagasawa",
  ogImage: "images/og-image.png",
  twitterHandle: "@k_nagasawa_",
  lang: "ja",
};

export const personalInfo: PersonalInfo = {
  name: "Kazuki Nagasawa",
  title: "Software Engineer | Osaka",
  description: "仕事でコード書いてます",
  intro: "Hello, I'm a developer based in Osaka!",
  heroSubtitle: "Software Engineer / Drummer / Father",
  work: {
    title: "Work",
    description: "大阪を拠点にWeb開発を行っています。",
    experience:
      "企業での開発経験2年。Webアプリケーションの設計から開発、保守など全般担当。",
    techStacksTitle: "技術スタック",
    techStacks: {
      backend: {
        title: "Backend",
        items: ["Laravel", "Rails", "Django", "PHP", "Ruby", "Python"],
      },
      frontend: {
        title: "Frontend",
        items: ["Next.js", "Nuxt.js", "React", "Vue.js", "TypeScript"],
      },
      tools: {
        title: "Tools & Others",
        items: ["Docker", "AWS", "MySQL", "PostgreSQL", "Git", "Vim"],
      },
    },
  },
  hobbies: {
    title: "Hobby",
    items: [
      {
        title: "ドラム",
        subtitle: "音楽",
      },
      {
        title: "娘と遊ぶ",
        subtitle: "family",
      },
    ],
  },
  socials: {
    title: "On the web",
    items: [
      {
        platform: "twitter",
        url: "https://twitter.com/k_nagasawa_",
        username: "@k_nagasawa_",
      },
      {
        platform: "github",
        url: "https://github.com/18kazee",
        username: "@18kazee",
      },
    ],
  },
  navigation: {
    sourceLabel: "Source",
    themeToggleLabel: "Toggle color mode",
  },
  sourceRepo: "https://github.com/18kazee/portfolio",
  copyright: "© 2025 Kazuki Nagasawa. All Rights Reserved.",
};
