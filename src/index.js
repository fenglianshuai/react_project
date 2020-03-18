import React from 'react';
import { render } from 'react-dom'
import App from './App'
import './style.less'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRouter } from './routers'

render(
    <Router>
        <Switch>
            {/* 添加外层路由 */}
            <Route path='/admin' render={(routerProps) => {
                // 后期这里要做权限认证,需要登录才能访问/admin
                return <App {...routerProps} />
            }} />
            {
                mainRouter.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component}></Route>
                })
            }
            <Redirect to='/admin' from='/' exact />
            <Redirect to='/404' />
        </Switch>
    </Router>,
    document.querySelector('#root')
)