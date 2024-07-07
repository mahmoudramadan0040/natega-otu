/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      API_URL_Natega: process.env.API_URL_Natega,
      },
      reactStrictMode: false
};

export default nextConfig;
