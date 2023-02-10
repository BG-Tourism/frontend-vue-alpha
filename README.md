### Including

-   Server: [Vite](https://vitejs.dev/)
-   Framework and plugins: [Vue 3](https://v3.vuejs.org/) with [Pinia 2](https://pinia.vuejs.org/), [Vue Router 4](https://next.router.vuejs.org/), [Vue I18n 9](https://vue-i18n.intlify.dev/), and [VeeValidate 4](https://vee-validate.logaretm.com/v4/)
-   Style: [Sass](https://sass-lang.com/) with [PostCSS](https://postcss.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer) enabled
-   Linters: [ESlint](https://eslint.org/) for `.json`, `.js` & `.vue` files, [Stylelint](https://stylelint.io/) for `.scss` files
-   Pre-commit hooks: [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged)

---

### Installation

Download and install the required packages and dependencies defined in the `package.json` file.

```bash
npm install
cp .env.example .env
```

Peek inside the `.env` file and make changes if needed.

---

### Starting the Vite dev server

```bash
npm run dev
```

---

### Creating a production build

```bash
npm run build
```

---

### Linting code

```bash
npm run lint
npm run lint:fix
npm run lint:eslint
npm run lint:eslint:fix
npm run lint:stylelint
npm run lint:stylelint:fix
```

---

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with installed [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions.

<details>
<summary>Click here for more details.</summary>

Open your VSCode `settings.json` file (`CTRL` + `SHIFT` + `P` and `Preferences: Open Settings (JSON)`) and make sure to have these settings:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "css.lint.duplicateProperties": "warning",
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "html.format.enable": false,
  "html.format.endWithNewline": true,
  "html.format.wrapLineLength": 0,
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 120,
  "prettier.singleQuote": true,
  "prettier.tabWidth": 4,
  "stylelint.snippet": ["css", "less", "postcss", "scss"],
  "stylelint.validate": ["css", "less", "postcss", "scss"],
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vetur.experimental.templateInterpolationService": true,
  "vetur.format.options.tabSize": 4,
  "vetur.format.scriptInitialIndent": true,
  "vetur.format.styleInitialIndent": true,
  "vetur.validation.template": false
}
```

</details>

---

### Upgrading npm dependencies

1. `npx taze` to see if some package has a new version.
1. `npx taze minor -w` to upgrade to minor versions.
1. `npx taze major -w` to upgrade to major versions.
1. `npm install` to install the upgraded versions.
