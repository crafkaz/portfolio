# Development guide

## Local development

Run these commands from the repository root. Start the development server with Docker Compose and open <http://localhost:3000>.

```sh
docker compose up --build
```

Compose installs dependencies from `bun.lock` into a Docker volume. To add a package, run `docker compose run --rm app bun add <package>`. Add `-d` after `bun add` for a development dependency. Commit the resulting `package.json` and `bun.lock` together.

## Verification

```sh
docker compose run --build --rm app sh -c 'bun install --frozen-lockfile && bun run lint && bun run typecheck && bun run test:run && bun run build'
docker compose run --build --rm e2e
```

The browser checks build the production app and run headless Chromium. GitHub Actions runs the same checks using Bun.

When updating Bun, keep the version in `package.json`, `Dockerfile`, and `test/e2e/Dockerfile` in sync.
