# eslint-config-xerox
[![npm package](https://img.shields.io/npm/v/eslint-config-xerox.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-xerox) [![License MIT](https://img.shields.io/npm/l/eslint-config-xerox.svg?style=flat-square)](./LICENSE) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

ESLint shareable configuration for Xerox projects.

## Usage
1. Install this config and eslint as a `devDependency`:
```bash
yarn add eslint@5.12.1 eslint-config-xerox --dev
# or
npm install eslint@5.12.1 eslint-config-xerox --save-dev
```
2. Extend the base and any additional configs in your `.eslintrc` file (or just add an `eslintConfig` entry to your `package.json`):
```jsonc
{
  "extends": [
    "xerox",
    "xerox/typescript", // Optional
    "xerox/react" // Optional
  ]
}
```

## Configurations
### xerox (base)
The base eslint configuration i.e. `"extends": ["xerox"]` includes rules for Jest and Prettier, and some general preferences like linebreak-style.
### xerox/typescript
The typescript eslint configuration i.e. `"extends": ["xerox/typescript"]` includes various TypeScript related rules, as well as swapping the default parser in order for eslint to work with TypeScript. You should call eslint using `--ext .js,.ts`, add `.jsx` and/or `.tsx` if necessary. This also adds a JSDoc requirement for only TypeScript files, `.js` and `test.{js,ts}` files are excluded, this allows you to progressively convert from TS to JS without having to add JSdoc to all the old JS source. These JSDoc rules are setup to mimick TSDoc, eslint-plugin-tsdoc doesn't yet exist, so this is a workaround, try to follow the example set out [here](https://github.com/Microsoft/tsdoc).
### xerox/react
The react eslint configuration i.e. `"extends": ["xerox/react"]` enables jsx and includes the react reccomended settings from eslint-plugin-react, this sub-config needs some fleshing out.

# LICENSE
[MIT](./LICENSE)
