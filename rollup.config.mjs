import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import bundleSize from 'rollup-plugin-bundle-size';

import packageJson from "./package.json" assert { type: "json" };


export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [],
      minimize:true
    }),
    terser(),
    bundleSize()
  ]
};
