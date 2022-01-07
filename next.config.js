/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wp.rauldediego.com", "www.rauldediego.es"],
  },
  i18n: {
    locales: ["en", "sp"],
    defaultLocale: "en",
    localeDetection: false,
  },
  trailingSlash: true,
};
