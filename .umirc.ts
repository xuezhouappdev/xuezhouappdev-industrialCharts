import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/echart', component: '@/pages/echart' },
  ],
});
