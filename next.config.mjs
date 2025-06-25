/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        // Apply PostCSS to all CSS files
        '*.{css,scss,sass}': {
          loaders: ['postcss-loader'],
        },
      },
    },
  },
};

export default nextConfig;