import { PersonalInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Kazuki Nagasawa",
  title: "Software Engineer | Osaka",
  description: "Software Engineer in Osaka. developer.",
  intro: "I build web applications.",
  summary: "Currently at a data and AI company, working fully remote.",
  heroSubtitle: "Software Engineer / Drummer / Father",
  location: {
    label: "Osaka, Japan",
    timeZone: "Asia/Tokyo",
    timeZoneLabel: "JST",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Feb 2026 — Present",
        role: "Software Engineer",
        organization: "Data & AI company",
        summary:
          "Web applications on FastAPI, React, and Cloud Run, plus Rails apps on AWS.",
      },
      {
        period: "Dec 2024 — Jan 2026",
        role: "Software Engineer",
        organization: "Web service company",
        summary:
          "Social media analytics and matching services, from design and infrastructure to deployment and operations.",
      },
      {
        period: "Dec 2023 — Nov 2024",
        role: "Software Engineer",
        organization: "Web system development company",
        summary:
          "A reservation and customer management system and a payment system, including deployment and operations on AWS.",
      },
      {
        period: "Earlier",
        role: "Sound engineer (PA)",
        organization: "5 years",
      },
    ],
  },
  stack: {
    title: "Stack",
    groups: [
      {
        title: "Languages",
        items: ["TypeScript", "PHP", "Ruby", "Python", "Dart", "Kotlin"],
      },
      {
        title: "Frameworks",
        items: [
          "Next.js",
          "React",
          "Vue.js",
          "Nuxt.js",
          "Laravel",
          "Ruby on Rails",
          "CodeIgniter",
          "Django",
          "FastAPI",
          "Flutter",
        ],
      },
      {
        title: "Infra & data",
        items: ["AWS", "GCP", "Firebase", "Docker", "MySQL", "PostgreSQL"],
      },
      {
        title: "Tools",
        items: ["Git", "Linux", "Vim"],
      },
    ],
  },
  hobbies: {
    title: "Off the clock",
    items: [
      {
        title: "Drums",
        subtitle: "21 years behind the kit · certified instructor",
      },
      {
        title: "Family time",
        subtitle: "Playing with my daughter",
      },
    ],
  },
  socials: {
    title: "On the web",
    newTabLabel: "(opens in a new tab)",
    items: [
      {
        platform: "twitter",
        label: "X",
        url: "https://x.com/crafkaz",
        username: "@crafkaz",
      },
      {
        platform: "github",
        label: "GitHub",
        url: "https://github.com/crafkaz",
        username: "@crafkaz",
      },
      {
        platform: "zenn",
        label: "Zenn",
        url: "https://zenn.dev/crafkaz",
        username: "@crafkaz",
      },
    ],
  },
  navigation: {
    sourceLabel: "Source",
    themeToggleLabel: "Toggle color mode",
    backToTopLabel: "Back to top",
  },
  sourceRepo: "https://github.com/crafkaz/portfolio",
  copyrightHolder: "Kazuki Nagasawa",
};
