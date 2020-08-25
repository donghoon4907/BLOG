const Dotenv = require("dotenv-webpack");

module.exports = {
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
};

// const withCSS = require("@zeit/next-css");
// const path = require("path");
// const Dotenv = require("dotenv-webpack");
// const withImages = require("next-images");
// const withTypescript = require("@zeit/next-typescript");
// const withOffline = require("next-offline");
// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD
// } = require("next/constants");

// /* Without CSS Modules, with PostCSS */
// module.exports = phase => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
//   const isProd = phase === PHASE_PRODUCTION_BUILD;
//   return withTypescript(
//     withCSS(
//       withImages(
//         withOffline({
//           //assetPrefix: isProd ? 'http://d30k733rzexkhf.cloudfront.net' : '',
//           inlineImageLimit: 16384,
//           serverRuntimeConfig: {
//             // Will only be available on the server side
//           },
//           publicRuntimeConfig: {
//             // will only be abailable on the client side
//           },
//           webpack(config, options) {
//             config.plugins = [
//               ...config.plugins,
//               new Dotenv({
//                 path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
//                 systemvars: true
//               })
//             ];
//             return config;
//           }
//         })
//       )
//     )
//   );
// };
