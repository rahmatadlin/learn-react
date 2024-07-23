/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "kr", "id-ID"],
    defaultLocale: "en-US",
  },
};

export default nextConfig;
