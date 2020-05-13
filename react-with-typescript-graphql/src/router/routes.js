// AuthRoute를 거친 라우터를 정의하고 component를 지정합니다.
// 지정된 route는 @/App.js에서 사용됩니다.
// refs = https://reacttraining.com/react-router/web/guides/static-routes

// 하위 route는 routes의 배열로 작성합니다.
import { lazy } from 'react';
import { NotFound, Login } from '@/pages';

const routes = [
  {
    path: '/',
    name: 'root',
    exact: true,
    component: lazy(() => import('@/components/home/Container.tsx')),
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
        setTimeout(() => resolve(import('@/components/home/Container.tsx')), 1000);
      });
    }),
    meta: {
      navigation: {
        show: true,
      },
    },
  },
  {
    path: '/exampleHOC',
    name: 'example HOC',
    component: lazy(() => import('@/components/example/ContainerHOC.tsx')),
    meta: {
      navigation: {
        show: true,
      },
    }
  },
  {
    path: '/exampleHook',
    name: 'example Hook',
    component: lazy(() => import('@/components/example/ContainerHook.tsx')),
    meta: {
      navigation: {
        show: true,
      },
    }
  },
  {
    path: '/login',
    name: "login (Don't use Layout)",
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
