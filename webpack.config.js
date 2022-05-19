import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  stats: "errors-only",
  entry: join(__dirname, "server", "index.js"),
  mode: "production",
  target: "node",
  output: {
    path: join(__dirname, "dist"),
    filename: "main.js",
    chunkFormat: "module",
  },
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
  externalsType: "module",
  externalsPresets: { node: true },
  module: {
    parser: {
      javascript: { importMeta: false },
    },
  },
  optimization: {
    minimize: false,
    nodeEnv: false,
  },
  plugins: [],
};

export default config;
