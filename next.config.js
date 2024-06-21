/**
 * @type {import('next').NextConfig}
 */

const nextBuildId = require("next-build-id")

// next.config.js
module.exports = {
    distDir: "build",
    generateBuildId: async () => {
        return nextBuildId({ dir: __dirname })
    },
}
