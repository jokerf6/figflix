// const { i18n } = require("./next-i18next.config.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  debug: process.env.NODE_ENV === "development",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"], // Add any other supported languages here
  },
};

module.exports = nextConfig;
