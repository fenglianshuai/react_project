import Loadable from 'react-loadable'
// Loadable 的原理手动封装
import CustomLoadable from './Loadable'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'
// import Dashboard from './Dashboard'
// import Login from './Login'
// import NotFount from './NotFount'
// import Settings from './Settings'

import {
    Loading
} from '../components'
// 路由懒加载
const ArticleList = Loadable({
    loader: () => import('./Article'),
    loading: Loading
})
const ArticleEdit = Loadable({
    loader: () => import('./Article/Edit'),
    loading: Loading
})
const Dashboard = Loadable({
    loader: () => import('./Dashboard'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})
const NotFount = Loadable({
    loader: () => import('./NotFount'),
    loading: Loading
})
const Settings = Loadable({
    loader: () => import('./Settings'),
    loading: Loading
})

export {
    ArticleList,
    ArticleEdit,
    Dashboard,
    Login,
    NotFount,
    Settings
}