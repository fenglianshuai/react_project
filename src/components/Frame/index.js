import React, { Component } from 'react'
import {
    Layout,
    Menu,
    Breadcrumb
} from 'antd'
import { withRouter } from 'react-router-dom'

import logo from './logo.png'
import './style.less'

const { Header, Content, Sider } = Layout;
@withRouter
class Frame extends Component {
    render() {
        const { menus } = this.props
        return (
            <Layout style={{ height: '100%' }}>
                <Header className="header qf-header" style={{ background: '#fff' }}>
                    <div className="qf-logo">
                        <img src={logo} />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.onMenuClick}
                        >
                            {
                                menus.map(route => {
                                    return (
                                        <Menu.Item key={route.pathname}>
                                            {route.icon}
                                            {route.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: '#fff'
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }
}
export default Frame
