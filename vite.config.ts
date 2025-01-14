import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePluginForArco } from '@arco-plugins/vite-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // const isBuild = mode !== 'dev';

  const VitePlugins = [
    react({
      babel: {
        plugins: ['@babel/plugin-proposal-optional-chaining'],
      },
    }),
    // arco-design 按需引入
    vitePluginForArco({ style: true }),
  ];

  return {
    base: '/awei',
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    preview: {
      port: 3100,
    },
    server: {
      host: true,
    },
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       additionalData: '@import "./src/style/global.less";',
    //     },
    //   },
    // },
    plugins: VitePlugins,
    build: {
      minify: false,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: mode === 'prod', // 正式环境打包删除 console
        },
      },
    },
  };
});
