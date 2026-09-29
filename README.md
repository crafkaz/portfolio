# Kazuki's Homepage

Personal portfolio website built with Next.js and Chakra UI.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) - React framework
- [React](https://react.dev/) 19
- [Chakra UI](https://chakra-ui.com/) v3 - Component library
- [Tailwind CSS](https://tailwindcss.com/) v4
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Vitest](https://vitest.dev/) + Testing Library - Tests
- Node.js 24 / Yarn

## Project structure

```
$PROJECT_ROOT
├── app
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── providers.tsx       # App providers
│   ├── globals.css         # Global styles
│   │
│   ├── components          # Page sections
│   │   ├── shared          # Navigation, Footer, Section, ProfilePhoto,
│   │   │                   # LocalTime, ColorSchemeScript
│   │   ├── Home.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── StackSection.tsx
│   │   ├── HobbySection.tsx
│   │   └── SocialsSection.tsx
│   │
│   ├── config
│   │   ├── metadata.ts     # Site metadata config
│   │   └── profile.ts      # Profile content
│   │
│   ├── lib                 # metadata, theme / colorScheme (CSS light-dark()),
│   │                       # motion, system helpers
│   ├── context             # ThemeContext
│   ├── types               # Type definitions
│   └── constants           # App constants
│
├── components/ui           # Chakra UI snippets (toaster, tooltip)
├── public/images           # Profile image, logos, OG image
├── test                    # Vitest tests (a11y, footer, security, theme)
├── next.config.ts          # Security headers (CSP etc.)
├── Dockerfile
└── compose.yaml
```

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project under the following conditions:

- Add a link to my homepage
- Check out [LICENSE](LICENSE) for more detail.
