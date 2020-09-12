const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

/**
 * Next 환경 설정
 *
 * 1. next-images
 * - 로컬 환경에서 이미지 로드 활성화
 * - base64로 인코딩
 * - 이미지 캐싱
 *
 * 2. next-offline 서비스 워커
 */
module.exports = withImages({
  webpack: (config, { dev }) => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: `./.env.${dev ? "development" : "production"}`,
        systemvars: true
      })
    ];
    return config;
  }
});
