// next.config.mjs
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Merge custom webpack configuration
    config.module.rules.push({
      test: /\.(mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/direction.mp4", // Output path for the videos
            publicPath: "/_next/images/direction.mp4", // Public path for the videos
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
