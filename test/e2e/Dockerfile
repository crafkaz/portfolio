FROM oven/bun:1.4.5

WORKDIR /app

COPY package.json bun.lock bunfig.toml ./

RUN bun install --frozen-lockfile
RUN bun run playwright install --with-deps --only-shell chromium

COPY . .

CMD ["sh", "-c", "bun run build && exec bun run test:e2e"]
