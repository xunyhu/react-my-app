import Loadable from 'react-loadable'
import LoadingComponent from '@common/Loading'

//事件绑定
const ClickComponent = Loadable({
    loader: () => import('../01-05-basic/onclick'),
    loading: LoadingComponent
})

//react-context
const ContextComponent = Loadable({
    loader: () => import('../12-context/index'),
    loading: LoadingComponent
})

//react-router
const RouterComponent = Loadable({
    loader: () => import('../16-router/index'),
    loading: LoadingComponent
})

//redux目录
const ReduxComponent = Loadable({
    loader: () => import('../15-redux'),
    loading: LoadingComponent
})

//self-redux
const SelfReduxComponent = Loadable({
    loader: () => import('../15-redux/01-self-redux/App'),
    loading: LoadingComponent
})

//redux
const ReduxDomeComponent = Loadable({
    loader: () => import('../15-redux/02-redux/redux/App'),
    loading: LoadingComponent
})

//react-redux
const ReactreduxComponent = Loadable({
    loader: () => import('../15-redux/03-todolist/TodoList'),
    loading: LoadingComponent
})

//hook
const HookComponent = Loadable({
    loader: () => import('../hook/index'),
    loading: LoadingComponent
})

const routers = [
    {
        path: '/react/click',
        exact: true,
        component: ClickComponent
    },
    {
        path: '/react/context',
        exact: true,
        component: ContextComponent
    },
    {
        path: '/react/router',
        exact: true,
        component: RouterComponent
    },
    {
        path: '/react/redux',
        exact: true,
        component: ReduxComponent
    },
    {
        path: '/react/redux/self',
        exact: true,
        component: SelfReduxComponent
    },
    {
        path: '/react/redux/redux',
        exact: true,
        component: ReduxDomeComponent
    },
    {
        path: '/react/redux/react-redux',
        exact: true,
        component: ReactreduxComponent
    },
    {
        path: '/react/hook',
        exact: true,
        component: HookComponent
    },
]

export default routers