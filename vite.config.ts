import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePluginForArco } from '@arco-plugins/vite-react';
import { viteExternalsPlugin as externals } from 'vite-plugin-externals';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './config/config.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // const isBuild = mode !== 'dev';
  console.log(command, 'commandcommand');

  const VitePlugins = [
    // react({
    //   babel: {
    //     plugins: ['@babel/plugin-proposal-optional-chaining'],
    //   },
    // }),
    // arco-design 按需引入
    vitePluginForArco({ style: true }),
    createHtmlPlugin({
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: {
        data: { config },
      },
    }),
    ...[
      command === 'serve'
        ? react()
        : externals({
            react: 'React',
            'react-dom': 'ReactDOM',
          }),
    ],
  ];

  return {
    base: '/awei',
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        {
          find: 'config',
          replacement: path.resolve(__dirname, 'config'),
        },
      ],
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
