/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3000/api/:path*', // Replace with your proxy server URL
          },
        ];
      },
};

export default nextConfig;
