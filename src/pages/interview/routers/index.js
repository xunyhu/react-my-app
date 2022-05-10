import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

//MVC、MVP模式
const MvcComponent = Loadable({
    loader: () => import('../mvc/index'),
    loading: LoadingComponent
})

//css
const CssComponent = Loadable({
    loader: () => import('../css/index'),
    loading: LoadingComponent
})

//js
const JsComponent = Loadable({
    loader: () => import('../js/index'),
    loading: LoadingComponent
})

const routers = [
    {
        path: '/interview/mvc',
        exact: true,
        component: MvcComponent
    },
    {
        path: '/interview/css',
        exact: true,
        component: CssComponent
    },
    {
        path: '/interview/js',
        exact: true,
        component: JsComponent
    }
]

export default routers