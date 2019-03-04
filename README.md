# eslint-config-xerox
ESLint shareable configuration for Xerox projects.

## Usage
1. Install this config and eslint as a `devDependency`:
```bash
yarn add eslint eslint-config-xerox --dev
# or
npm install eslint eslint-config-xerox --save-dev
```
2. Extend the base and any additional configs in your `.eslintrc` file (or just add an `eslintConfig` entry to your `package.json`):
```jsonc
{
  "extends": [
    "xerox",
    "xerox/typescript", // Optional
    "xerox/documentation", // Optional
    "xerox/react" // Optional
  ]
}
```

# LICENSE
[MIT](./LICENSE)
