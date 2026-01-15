import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	trailingSlash: true,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'developers.elementor.com',
				port: '',
				pathname: '/**'
			}
		]
	}
}

export default nextConfig
