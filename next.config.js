const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withSentryConfig(
  withBundleAnalyzer({
    sentry: {
      disableServerWebpackPlugin: process.env["NEXT_PUBLIC_ENV"] === "dev",
      disableClientWebpackPlugin: process.env["NEXT_PUBLIC_ENV"] === "dev",
    },
    output: "standalone",
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        "abs.twimg.com",
        "assets.coingecko.com",
        "lh3.googleusercontent.com",
        "openseauserdata.com",
        "pbs.twimg.com",
      ],
    },
    rewrites: async () => [
      {
        source: "/api/:path*",
        has: [{ type: "host", value: "localhost" }],
        destination:
          process.env["NEXT_PUBLIC_ENV"] === "stag"
            ? "https://usm-i7x0.ultrasound.money/api/:path*"
            : "https://ultrasound.money/api/:path*",
      },
      // To test locally with the fam-analysis api running and a local tunnel to receive the oauth2 callback, use the below rewrite.
      // {
      //   source: "/api/auth/:path*",
      //   has: [
      //     {
      //       type: "host",
      //       value: "oyfy.tunnelto.dev",
      //     },
      //   ],
      //   destination: "http://127.0.0.1:3001/api/auth/:path*",
      // },
      // {
      //   source: "/api/fam/queue-for-discord",
      //   has: [
      //     {
      //       type: "host",
      //       value: "oyfy.tunnelto.dev",
      //     },
      //   ],
      //   destination: "http://127.0.0.1:3001/api/fam/queue-for-discord",
      // },
    ],
  }),
);

module.exports = nextConfig;
