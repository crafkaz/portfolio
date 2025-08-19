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
│   │   # Configuration files
│   ├── config
│   │   ├── metadata.ts     # Site metadata config
│   │   └── profile.ts      # Profile configuration
│   │
│   │   # Utilities & context
│   ├── lib
│   │   ├── metadata.ts     # SEO metadata
│   │   ├── theme.ts        # Theme utilities
│   │   └── themeUtils.ts   # Additional theme helpers
│   │
│   ├── context
│   │   └── ThemeContext.tsx # Theme context provider
│   │
│   │   # TypeScript definitions
│   ├── types
│   │   ├── personal.ts     # Personal info types
│   │   ├── theme.ts        # Theme types
│   │   └── index.ts        # Type exports
│   │
│   │   # App constants
│   └── constants
│       └── theme.ts        # Theme constants
│
│   # Static files
├── public
│   ├── images
│   │   └── og-image.png    # Social sharing image
│   └── favicon.ico         # Site favicon
│
└── components/ui           # External UI components
```

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project under the following conditions:

- Add a link to my homepage
- Check out [LICENSE](LICENSE) for more detail.
