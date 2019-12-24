// AuthRoute를 거친 라우터를 정의하고 component를 지정합니다.
// 지정된 route는 @/App.js에서 사용됩니다.
// refs = https://reacttraining.com/react-router/web/guides/static-routes

// 하위 route는 routes의 배열로 작성합니다.
import { lazy } from 'react';
import { NotFound } from '@/pages';

const routes = [
  {
    path: '/',
    name: 'root',
    exact: true,
    component: lazy(() => import('@/components/home/Container')),
    meta: {
      navigation: {
        show: false,
      },
    },
  },
  {
    path: '/home',
    name: 'home',
    component: lazy(() => {
      return new Promise(resolve => {
        setTimeout(() => resolve(import('@/components/home/Container')), 1000);
      });
    }),
    meta: {
      navigation: {
        show: true,
      },
    },
  },
  {
    path: '/example',
    name: 'example (use Layout)',
    component: lazy(() => {
      return new Promise(resolve => {
        setTimeout(
          () => resolve(import('@/components/example/Container')),
          1000,
        );
      });
    }),
    meta: {
      navigation: {
        show: true,
      },
    },
    routes: [
      {
        path: '/example/list/:category?',
        name: 'List(Tile and Content)',
        component: lazy(() => import('@/components/example/list/Container')),
        meta: {
          navigation: {
            show: true,
          },
        },
      },
      {
        path: '/example/local',
        name: 'Local State',
        component: lazy(() => import('@/components/example/local/Container')),
        meta: {
          navigation: {
            show: true,
          },
        },
      },
      {
        path: '/example/user/:id?',
        name: 'user',
        component: lazy(() => import('@/components/example/user/Container')),
        meta: {
          navigation: {
            show: false,
          },
        },
      },
    ],
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
