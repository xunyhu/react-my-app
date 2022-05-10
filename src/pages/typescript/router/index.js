import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

const Es5Component = Loadable({
    loader: () => import('../index'),
    loading: LoadingComponent
})
const routers = [
    {
        path: '/typescript',
        exact: true,
        component: Es5Component
    }
]

export default routers