# 🧩 Micro Frontend Base Project

This is a **base project setup for micro frontends** using **React**, **Redux**, and **Webpack Module Federation**.

---

## ⚙️ Getting Started

After copying this project for a new micro frontend:

1. **Update component file prefixes**  
   Rename component files to use a new prefix (default is `Mfe`) to match your project.  
   Update the prefix in `.env`:

   ```
   REACT_APP_COMPONENT_PREFIX=YourPrefix
   ```

2. **Update CSS class selector prefix**  
   All root-level CSS class selectors should follow your project-specific prefix (default is `.mfe-`).  
   Update this in `.env`:
   ```
   REACT_APP_CSS_CLASS_SELECTOR_PREFIX=.your-prefix-
   ```

---

## 📦 Module Federation Exports

```js
exposes: {
  "./MicrofrontendRoutes": "./src/components/routes/MfeRouter.tsx",
  "./MicrofrontendReducers": "./src/store/slices"
}
```

### `./MicrofrontendRoutes`

- Central file to register all micro frontend components via routing.
- Simply add your components inside the `MfeRoute.tsx` file.

> If you want to expose a component **without routing**, add its path directly inside the `exposes` block of the federation config.

### `./MicrofrontendReducers`

- Central place to register Redux reducers.
- Add your slice inside `src/store/slices`.

---

## 🧪 Linting & Prefix Checks

- File name prefixes and CSS class prefixes are **automatically checked** during development.
- You’ll receive errors if naming conventions are violated.
- Ignore specific files in `.stylelintignore` for **Linting** or the `filesToExclude` array inside `checkComponentPrefix.js` for **Prefix Checks**.

---

## 🚀 Deployment

Make sure to modify the GitHub Actions deployment workflow.
