
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash',
  routes: [
    {
      path: '/',
      component: '../layouts/index', ///layouts/index
      routes: [
        { path: '/', component: '../pages/flyLine/index' }, ///pages/index
        { path: '/x6', component: '../pages/Index/index' },
        { path: '/ehcarts', component: '../pages/ehcarts/index'},
        { path: '/gdMap', component: '../pages/gdMap/index'},
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'myapp',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
