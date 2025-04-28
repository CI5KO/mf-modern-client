import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";
import { bffPlugin } from "@modern-js/plugin-bff";
import { expressPlugin } from "@modern-js/plugin-express";
import { GenerateSW } from "workbox-webpack-plugin";
import * as WebpackPwaManifest from "webpack-pwa-manifest";
import path from "path";

export default defineConfig({
  source: { globalVars: { "process.env.API": process.env.API } },
  runtime: {
    router: true,
  },
  tools: {
    webpack: (config) => {
      config.plugins?.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          swDest: "service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /\.(?:js|css|html|json|png|jpg|jpeg|svg|gif)$/,
              handler: "NetworkFirst",
            },
          ],
        }),
        new WebpackPwaManifest.default({
          filename: "manifest.json",
          name: "Modern PWA App",
          short_name: "ModernApp",
          description: "Modern.js Progressive Web Application",
          start_url: "/",
          publicPath: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#1890ff",
          icons: [
            {
              src: path.resolve("public/icons/icon-192x192.png"),
              sizes: [192, 256],
              destination: path.join("icons"),
            },
          ],
          inject: true,
        }) as any
      );

      return config;
    },
  },
  plugins: [
    appTools({
      bundler: "webpack",
    }),
    moduleFederationPlugin(),
    tailwindcssPlugin(),
    bffPlugin(),
    expressPlugin(),
  ],
});
