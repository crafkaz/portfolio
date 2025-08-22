FROM node:23-alpine

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

RUN mkdir -p /host/node_modules

EXPOSE 3000

CMD ["yarn", "dev"]
