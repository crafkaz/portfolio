import { PersonalInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Kazuki Nagasawa",
  title: "Software Engineer | Osaka",
  description: "Software Engineer in Osaka. developer.",
  intro: "Hello, I'm a developer based in Osaka!",
  heroSubtitle: "Software Engineer / Drummer / Father",
  work: {
    title: "Work",
    description: "Software Engineer | Osaka",
    experience:
      "Web application design, development, and maintenance at a company in Osaka.",
    techStacksTitle: "Tech stack",
    techStacks: {
      backend: {
        title: "Backend",
        items: [
          "Ruby on Rails",
          "Laravel",
          "CodeIgniter",
          "Django",
          "Ruby",
          "PHP",
          "Python",
        ],
      },
      frontend: {
        title: "Frontend",
        items: [
          "HTML5",
          "JavaScript",
          "Next.js",
          "Nuxt.js",
          "React",
          "Vue.js",
          "TypeScript",
        ],
      },
      mobile: {
        title: "Mobile",
        items: ["Flutter", "Dart", "Kotlin"],
      },
      infrastructure: {
        title: "Infrastructure",
        items: ["Docker", "AWS", "MySQL", "PostgreSQL"],
      },
      tools: {
        title: "Tools & Others",
        items: ["Git", "Vim", "Linux"],
      },
    },
  },
  hobbies: {
    title: "Hobby",
    items: [
      {
        title: "Drums",
        subtitle: "Music",
      },
      {
        title: "Family time",
        subtitle: "Playing with my daughter",
      },
    ],
  },
  socials: {
    title: "On the web",
    items: [
      {
        platform: "twitter",
        url: "https://twitter.com/crafkaz",
        username: "@crafkaz",
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
