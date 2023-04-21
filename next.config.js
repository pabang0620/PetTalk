/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

const nextConfig = {
	// ...options
};

module.exports = removeImports({
    ...nextConfig,
});