import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

const routers = [
    {
        path: '/html',
        exact: true,
        component: Loadable({
            loader: () => import('./index'),
            loading: LoadingComponent
        })
    }
]

export default routers