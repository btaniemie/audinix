/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'honorable-jay-774.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
            {
                protocol: 'https',
                hostname: 'dashboard.clerk.com'
            },
        ]
    }
};

export default nextConfig;
