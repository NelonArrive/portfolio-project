import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	trailingSlash: true,
	
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'icons8.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'seeklogo.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'images.seeklogo.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'img.icons8.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn-icons-png.flaticon.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'fakeimg.pl',
				port: '',
				pathname: '/**'
			}
		]
	}
}

export default nextConfig
