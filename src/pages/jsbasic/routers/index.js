import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

//es5
const Es5Component = Loadable({
    loader: () => import('../es2011'),
    loading: LoadingComponent
})

//es6
const Es6Component = Loadable({
    loader: () => import('../es2015'),
    loading: LoadingComponent
})

const routers = [
    {
        path: '/js/es5',
        exact: true,
        component: Es5Component
    },
    {
        path: '/js/es6',
        exact: true,
        component: Es6Component
    }
]

export default routers