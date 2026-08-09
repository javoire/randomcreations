# Random Creations

A small portfolio built with [Hugo](https://gohugo.io) and deployed to Firebase Hosting.

## Local dev

- **Hugo**: install the extended edition (0.162.0 or newer).
- **Node.js**: install `fnm` and run `fnm use`; the version is pinned in `.node-version`.
- **Package manager**: pnpm via Corepack; the version is pinned in `package.json`.

```sh
brew install fnm
brew install hugo
fnm use
corepack enable
pnpm dev
```

## Checks

```sh
pnpm test
```

This creates a production build with warnings treated as errors.
