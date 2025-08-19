# Kazuki's Homepage

Personal portfolio website built with Next.js and Chakra UI.

## Stack

- [Next.js](https://nextjs.org/) - React framework
- [Chakra UI](https://chakra-ui.com/) - Component library
- [TypeScript](https://typescriptlang.org/) - Type safety
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── app
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── providers.tsx       # App providers
│   │
│   │   # UI components
│   ├── components
│   │   ├── shared          # Shared components
│   │   ├── HeroSection.tsx
│   │   ├── WorkSection.tsx
│   │   └── ...
│   │
│   │   # Non-page modules
│   ├── lib                 # Configuration & utilities
│   ├── types               # TypeScript definitions
│   └── constants           # App constants
│
│   # Static files
└── public
    └── images
```

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project under the following conditions:

- Add a link to my homepage
- Check out [LICENSE](LICENSE) for more detail.
