const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
};

module.exports = nextConfig;