/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
