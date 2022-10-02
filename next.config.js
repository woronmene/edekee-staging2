/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'imgix',
		path: '',
		domains: ['d3t7szus8c85is.cloudfront.net'],
		unoptimized : false,

	},


	trailingSlash: true
}

module.exports = nextConfig
