// webpack.config.js
const path = require("path");

module.exports = {
  // other webpack configuration options...

  module: {
    rules: [
      {
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
      },
    ],
  },
};
