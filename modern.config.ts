import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";
import { GenerateSW } from "workbox-webpack-plugin";
import * as WebpackPwaManifest from "webpack-pwa-manifest";
import path from "path";

export default defineConfig({
  runtime: {
    router: true,
  },
  tools: {
    webpack: (config) => {
      config.plugins?.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:js|css|html|json|png|jpg|jpeg|svg|gif)$/,
              handler: "CacheFirst",
            },
          ],
        }),
        new WebpackPwaManifest.default({
          name: "Modern PWA App",
          short_name: "ModernApp",
          description: "Modern.js Progressive Web Application",
          start_url: "/",
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
  ],
});
