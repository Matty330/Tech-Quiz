const { defineConfig } = require('cypress')

module.exports = defineConfig({
    component: {
    devServer: {
        framework: 'react',
        bundler: 'vite',
    },
    supportFile: 'cypress/support/component.js',
    indexHtmlFile: 'cypress/support/component-index.html'
    },
    e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: 'cypress/support/e2e.js',
    },
})