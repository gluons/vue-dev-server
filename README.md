# Vue Dev Server

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/258ad2d46d7d423da814890713e8fa7c)](https://app.codacy.com/manual/gluons/vue-dev-server?utm_source=github.com&utm_medium=referral&utm_content=gluons/vue-dev-server&utm_campaign=Badge_Grade_Dashboard)

A simple dev server for [Vue.js](https://vuejs.org/).

## Installation

**Via [npm](https://www.npmjs.com/):**
```bash
npm install -D @gluons/vue-dev-server
```

**Via [pnpm](https://pnpm.js.org/):**
```bash
pnpm install -D @gluons/vue-dev-server
```

**Via [Yarn](https://yarnpkg.com/):**
```basn
yarn add -D @gluons/vue-dev-server
```

## Usage

**CLI:**
```bash
vue-dev-server main.ts
```

Use `vue-dev-server -h` for help.

## Config

Config file will be loaded by [Cosmiconfig](https://github.com/davidtheclark/cosmiconfig).

Config file can be the file below:
- `vue-dev-server.config.js`
- `vue-dev-server.config.json`
- `vue-dev-server.config.yaml`
- `vue-dev-server.config.yml`
- `vue-dev-server.config.ts`

---

### entry
**Type:** `string`  
**Required:** ✔

Path to entry file.

### alias
**Type:** `Record<string, string>`

Path aliases.

### define
**Type:** `Record<string, unknown>`  
**Default:** `{ 'process.env.NODE_ENV': 'development' }`

Define global constants which can be configured at compile time.

### port
**Type:** `number`  
**Default:** `8080`

Port of development server.

### open
**Type:** `boolean`  
**Default:** `true`

Open webpage in browser when server start.

### clipboard
**Type:** `boolean`  
**Default:** `false`

Copy dev server URL to clipboard.

### htmlTitle
**Type:** `string`  
**Default:** `'Vue Dev Server'`

Title of development webpage.
