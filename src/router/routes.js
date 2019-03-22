import { NotFound } from '@/layouts'
import { DashBoard, TradeContainer } from '@/pages'

import { TradeManage, TradeBid } from '@/components/trade'
import HelloWorld from '@/components/HelloWorld'
import ApolloExample from '@/components/ApolloExample'

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/helloworld',
        meta: {
            breadTitle: 'Home'
        }
    },
    {
        path: '/dashborad',
        name: 'dashborad',
        component: DashBoard,
        meta: {
            breadTitle: '대시보드'
        }
    },
    {
        path: '/helloworld',
        name: 'helloworld',
        component: HelloWorld,
        meta: {
            breadTitle: '헬로월드'
        }
    },
    {
        path: '/about',
        name: 'apollo',
        component: ApolloExample,
        meta: {
            breadTitle: 'apollo'
        }
    },
    {
        path: '/trade',
        name: 'trade',
        redirect: '/trade/manage/:id/:mode',
        component: TradeContainer,
        meta: {
            breadTitle: '전력중개'
        },
        children: [
            {
                path: 'manage/:id/:mode',
                name: 'tradeManage',
                component: TradeManage,
                meta: {
                    breadTitle: '집합전력자원관리'
                }
            },
            {
                path: 'bid',
                name: 'tradeBid',
                component: TradeBid,
                meta: {
                    breadTitle: '입찰현황'
                }
            }
        ]
    },
    {
        path: '/logout',
        meta: {
            breadTitle: '로그아웃',
            isGlobalMenu: true,
            hook: ''
        }
    },
    {
        path: '*',
        meta: {
            breadTitle: '오류'
        },
        component: NotFound
    }
]

export default routes
