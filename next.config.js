const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.BUNDLE_ANALYZE === "true",
});

const env = {
	API_URL: process.env.IS_DEV
		? "https://dev.example.com"
		: "https://staging.example.com",
};

const nextConfig = {
	// Availabe at build
	env: {
		...env,
	},
	serverRuntimeConfig: {
		...env,
	},
	publicRuntimeConfig: {
		...env,
	},
};

module.exports = withPlugins([[withCSS], [withSass], [withBundleAnalyzer]], nextConfig);
