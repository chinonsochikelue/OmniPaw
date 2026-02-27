export default defineNuxtConfig({
  extends: ['./layer'],
  $production: {
    studio: false,
  },
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'OmniPaw',
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  compatibilityDate: '2026-02-26',
  vite: {
    build: {
      sourcemap: false,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'ig',
      name: 'Igbo',
    }],
  },
  llms: {
    domain: 'https://omnipaw.vercel.app',
    title: 'OmniPaw',
    description: 'The most secure and reliable AI agent kernel for building production-ready AI applications.',
    full: {
      title: 'OmniPaw',
      description: 'The most secure and reliable AI agent kernel for building production-ready AI applications.',
    },
  },
  mcp: {
    name: 'OmniPaw documentation',
    browserRedirect: '/en/ai/mcp',
  },
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'OmniPaw',
      repo: 'OmniPaw',
      rootDir: 'docs',
    },
  },
})
