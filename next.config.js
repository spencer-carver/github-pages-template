/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
    output: "export",
    distDir: "docs",
    basePath: "/github-pages-template",
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
