/*
 * @Description: file content
 * @Author: cg
 * @Date: 2023-09-16 19:34:11
 * @LastEditors: cg
 * @LastEditTime: 2024-12-26 16:55:56
 */
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      entry: ["src/index.tsx"],
      formats: ["es"],
      cssFileName: "index",
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // 确保外部化处理那些不会被打包的依赖
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [cssInjectedByJsPlugin(), dts({ tsconfigPath: "tsconfig.json" })],

  // build: {
  //   lib: {
  //     name: "index",
  //     entry: ["index.tsx"],
  //     formats: ["es"],
  //     cssFileName: "index",
  //   },
  //   outDir: "dist",
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     external: ["react"],
  //   },
  // },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       api: "modern-compiler",
  //       silenceDeprecations: ["legacy-js-api"],
  //     },
  //   },
  // },
  // plugins: [react()],
  // optimizeDeps: {
  //   exclude: ["react"],
  // },
});
