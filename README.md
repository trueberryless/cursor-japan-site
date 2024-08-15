# Cursor Japan Communityのウェブサイト

[![Starlightで構築](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```bash
bun install
bun dev
```

```
bun create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **熟練の宇宙飛行士?** このファイルを削除してください。楽しんでください!

## 🚀 プロジェクト構成

Astro + Starlight プロジェクト内には、以下のフォルダーとファイルが含まれています:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight は、`src/content/docs/` ディレクトリ内の `.md` または `.mdx` ファイルを探します。各ファイルは、ファイル名に基づいてルートとして公開されます。

画像は `src/assets/` に追加でき、相対リンクで Markdown に埋め込むことができます。

静的アセット、例えばファビコンは、`public/` ディレクトリに配置できます。

## 🧞 コマンド

すべてのコマンドは、プロジェクトのルートから実行されます:

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 依存関係をインストール                            |
| `npm run dev`             | ローカル開発サーバーを `localhost:4321` で起動      |
| `npm run build`           | プロダクションサイトを `./dist/` にビルド          |
| `npm run preview`         | デプロイ前にローカルでビルドをプレビュー         |
| `npm run astro ...`       | CLI コマンド `astro add`、`astro check` を実行 |
| `npm run astro -- --help` | Astro CLI の使用方法を取得                     |

## 👀 もっと学習したい?

[Starlight のドキュメント](https://starlight.astro.build/)を確認、[Astro のドキュメント](https://docs.astro.build)を読み、[Astro Discord サーバー](https://astro.build/chat)に参加してください。