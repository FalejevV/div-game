/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    customKey: 'Kafdj@1(^+S_XCZas',
  },
}

module.exports = nextConfig
