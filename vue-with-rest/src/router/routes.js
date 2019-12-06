import { NotFound, Layout, Login } from '@/pages';

import { Container as HomeContainer } from '@/components/home';

// https://router.vuejs.org/kr/guide/advanced/meta.html
// 라우터를 정의하고 component 속성을 지정합니다.
// UI가 Layout을 사용할 때는 route의 path는 최소 2depth 이상으로 지정합니다.

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login',
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
        redirect: { name: 'list' },
        // 컴포넌트 그룹화 https://router.vuejs.org/kr/guide/advanced/lazy-loading.html#%EC%A7%80%EC%97%B0%EB%90%9C-%EB%A1%9C%EB%94%A9
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/Container.vue'),
        children: [
          {
            path: 'list/:category?',
            name: 'list',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/list/Container.vue'),
          },
          {
            path: 'local',
            name: 'local',
            component: () => import(/* webpackChunkName: "layout" */ '@/components/example/layout/local/Container.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/user/:id?',
    name: 'user',
    component: () => import('@/components/example/layout/user/Container.vue'),
    meta: {
      navigation: {
        show: false,
      },
    },
  },
  {
    path: '/login',
    name: 'login (Don\'t use Layout)',
    component: Login,
    meta: {
      navigation: {
        show: false,
      },
    },
  },
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
