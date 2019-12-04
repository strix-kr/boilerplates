import { NotFound, Layout, Login } from '@/pages';

import { Container as HomeContainer } from '@/components/home'

// https://router.vuejs.org/kr/guide/advanced/meta.html
// 라우터를 정의하고 component 속성을 지정합니다.
// UI가 Layout을 사용할 때는 route의 path는 최소 2depth 이상으로 지정합니다.

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    meta: {
      navigation: {
        show: false,
      },
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/contents',
    meta: {
      navigation: {
        show: true,
      },
    },
    children: [
      {
        path: 'contents',
        name: 'HomeContents',
        // static component를 사용하는 경우
        component: HomeContainer,
      },
    ],
  },
  {
    path: '/example',
    name: 'example (use Layout)',
    redirect: '/example/layout',
    component: Layout,
    meta: {
      navigation: {
        show: true,
      },
    },
    children: [
      {
        path: 'layout',
        name: 'layout',
        redirect: { name: 'full' },
        // 컴포넌트 그룹화 https://router.vuejs.org/kr/guide/advanced/lazy-loading.html#%EC%A7%80%EC%97%B0%EB%90%9C-%EB%A1%9C%EB%94%A9
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/Container.vue'),
        children: [
          {
            path: 'full',
            name: 'full',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/full/Container.vue'),
          },
          {
            path: 'content',
            name: 'content',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/content/Container.vue'),
          },
          {
            path: 'tile',
            name: 'tile',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/tile/Container.vue'),
          },
          {
            path: 'mix',
            name: 'mix',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/mix/Container.vue'),
          },
          {
            path: 'list/:type?',
            name: 'list',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/list/Container.vue'),
          },
          {
            path: 'form',
            name: 'form',
            redirect: '/example/layout/form/menu',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/form/Container.vue'),
            children: [
              {
                path: 'menu',
                component: () => import( /* webpackChunkName: "form" */ '@/components/example/layout/form/menu/Container.vue'),
              },
              {
                path:'user/:id?',
                name: 'user',
                component: () => import(/* webpackChunkName: "form" */ '@/components/example/layout/form/user/Container.vue'),
              },
            ]
          },
        ]
      },
    ],
  },
  {
    path: '/login',
    name: `login (Don't use Layout)`,
    component: Login,
    meta: {
      navigation: {
        show: true,
      },
    },
  },
  // {
  //   path: '/about',
  //   name: 'about',

  // },
  {
    path: '*',
    component: NotFound,
    meta: {
      navigation: {
        show: false,
      },
    },
  },
];

export default routes;
