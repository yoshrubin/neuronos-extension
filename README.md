# Vue 3 + TypeScript + Vite Chrome Extension

This project is a Chrome extension built with Vue 3, TypeScript, and Vite. It provides a foundation for developing modern, performant Chrome extensions using the Vue.js framework.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Google Chrome browser

## Setup Instructions

1. Clone the repository:
   ```
   git clone yoshrubin/neuronos-extension
   cd yoshrubin/neuronos-extension
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `dist` folder in your project directory


## Assumptions

- only need messages for first load but the get messages runs periodically
- Getting HMR working was not a priority and using prod build was key to loading extension
- This project uses Vue 3 with the Composition API and `<script setup>` syntax
- TypeScript is used for type checking and improved developer experience
- Vite is used as the build tool for fast development and optimized production builds
- The extension is designed for the latest version of Google Chrome
- The project structure follows Vue 3 best practices and Chrome extension guidelines

## Learn More

- [Vue 3 Documentation](https://v3.vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Chrome Extension Development](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

