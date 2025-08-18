# Next.js Blog用 Dockerfile
FROM node:23-alpine

# 作業ディレクトリ設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json yarn.lock* ./

# yarnをインストールして依存関係をインストール
RUN yarn install --frozen-lockfile

# ソースコードをコピー
COPY . .

# Next.js開発サーバー用ポート
EXPOSE 3000

# 開発サーバー起動
CMD ["yarn", "dev"]
