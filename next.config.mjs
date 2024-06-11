/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  assetPrefix: './',
}

export default nextConfig
