# Vue Dev Server

[![GitHub](https://img.shields.io/github/license/gluons/vue-dev-server?style=flat-square)](./LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/gluons/vue-dev-server?style=flat-square)
[![Codacy branch grade](https://img.shields.io/codacy/grade/29cc5dc9c8ac4f5ca3ded76a0feda5ae/master?style=flat-square)](https://www.codacy.com/manual/gluons/vue-dev-server)

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
