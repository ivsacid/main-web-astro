// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en', 'zh', 'de', 'ja', 'ko'],
    routing: {
      // Jika false: Bahasa Indonesia ada di root (misal: /about), bahasa lain pakai prefiks (misal: /en/about)
      // Jika true: Semua bahasa pakai prefiks (misal: /id/about, /en/about)
      prefixDefaultLocale: false, 
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});