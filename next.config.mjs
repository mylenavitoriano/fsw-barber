/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [{
            hostname: 'utfs.io'
        }]
    }
};

export default nextConfig;
