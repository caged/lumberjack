import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/dist",
    public: "/",
    // src: { url: "/dist" },
    // public: { url: "/", static: true },
    /* ... */
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-typescript",

    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    // bundle: true,
    // minify: true,
    // target: "es2018",
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
