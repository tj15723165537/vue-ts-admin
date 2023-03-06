import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
