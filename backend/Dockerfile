# Node.jsの公式イメージを使用
FROM node:21-bullseye-slim

# アプリケーションディレクトリを作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# TypeScriptのグローバルインストール
RUN npm install -g typescript

# アプリケーションのソースコードをコピー
COPY . .

# TypeScriptコードのコンパイル
RUN npm run build

# アプリケーションの起動
CMD ["node", "dist/index.js"]
