import React, { component, Component } from 'react'
import {
    Button
} from "antd"

const testHOC = (WrappedComponent) => {
    return class HOCComponent extends Component {
        render() {
            return (
                <>
                    <WrappedComponent></WrappedComponent>
                    <div>这是高阶组件的信息</div>
                </>
            )
        }
    }
}
// 配置装饰器之后的写法
@testHOC
class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}

export default App;
// 未安装装饰器的写法
// export default testHOC(App)