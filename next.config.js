/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    { source: '/', destination: '/2023/days', permanent: false },
  ],
};

module.exports = nextConfig;
