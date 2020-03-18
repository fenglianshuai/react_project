/**
 * 手动封装react-loadable
 * import 返回的是promise
 */
import React, { Component } from 'react'

const CustomLoadable = ({
    loader,
    loading: Loading
}) => {
    return class LoadableComponent extends Component {
        state = {
            LoadableComponent: null
        }
        componentDidMount() {
            loader().then(resp => {
                this.setState({
                    LoadableComponent: resp.default
                })
            })
        }
        render() {
            const { LoadableComponent } = this.state
            return (
                <div>
                    {
                        LoadableComponent
                            ?
                            <LoadableComponent />
                            :
                            <Loading></Loading>

                    }
                </div>
            )
        }
    }
}
export default CustomLoadable