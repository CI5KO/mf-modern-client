import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3051/static/mf-manifest.json",
    Components: "components@http://localhost:3050/static/mf-manifest.json",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
