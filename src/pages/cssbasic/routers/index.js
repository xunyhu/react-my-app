import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

//flex布局
const FlexComponent = Loadable({
    loader: () => import('../flex/flex'),
    loading: LoadingComponent
})

//网格布局
const GridComponent = Loadable({
    loader: () => import('../grid/index'),
    loading: LoadingComponent
})

//px2rem
const px2remComponent = Loadable({
    loader: () => import('../px2rem/px2rem'),
    loading: LoadingComponent
})

//viewport
const viewportComponent = Loadable({
    loader: () => import('../viewport/viewport'),
    loading: LoadingComponent
})

const routers = [
    {
        path: '/css/flex',
        exact: true,
        component: FlexComponent
    },
    {
        path: '/css/grid',
        exact: true,
        component: GridComponent
    },
    {
        path: '/css/px2rem',
        exact: true,
        component: px2remComponent
    },
    {
        path: '/css/viewport',
        exact: true,
        component: viewportComponent
    }
]

export default routers