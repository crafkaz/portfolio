FROM node:26.13.1-alpine

WORKDIR /app

RUN npm install --global yarn@1.22.22

COPY package*.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

RUN mkdir -p /host/node_modules

EXPOSE 3000

CMD ["yarn", "dev"]
