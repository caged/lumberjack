import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/dist",
    public: "/",
    /* ... */
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-svelte",
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    bundle: true,
    minify: true,
    target: "es2018",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
    /* ... */
  },
  buildOptions: {
    baseUrl: "./",
    /* ... */
  },
};
