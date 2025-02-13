import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    moduleResolution: "node",
    esModuleInterop: true,
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "ta", "hi"],
    defaultLocale: "en",
  },
};

export default nextConfig;
