import React, { Component } from 'react'
import {
    Card,
    Button,
    Table,
    Tag
} from 'antd'
import moment from 'moment'
import { getArticles } from '../../requests'
window.moment = moment
const displayTitle = {
    id: 'id',
    title: '标题',
    author: '作者',
    amount: '阅读量',
    createAt: '创建时间'
}
export default class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            columns: [],
            total: 0,
            isLoading: false
        }
    }

    createColumns = (columnsKys) => {
        const columns =  columnsKys.map(item => {
            if (item === 'amount') {
                return {
                    title: displayTitle[item],
                    key: item,
                    render: (text, record, index) => {
                        const { amount } = record;
                        // 这是通过数字大小进行判断渲染，同理可以做职级别不同的颜色
                        return <Tag color={amount > 200 ? 'red' : 'cyan'}>{amount}</Tag>
                    }
                }
            } else if (item === 'createAt') {
                return {
                    title: displayTitle[item],
                    key: item,
                    render: (text, record, index) => {
                        const { createAt } = record;
                        return moment(createAt).format('YYYY年 MM月 DD日 hh:mm:ss')
                    }
                }
            }
            return {
                title: displayTitle[item],
                dataIndex: item,
                key: item
            }
        })
        columns.push({
            title: '操作',
            key: 'action',
            render: () => {
                return <>
                        <Button type="dashed">编辑</Button>
                        <Button type="link" danger>删除</Button>
                    </>
            }
        })
        return columns;
    }

    getData = () => {
        this.setState({
            isLoading: true
        })
        getArticles().then(resp => {
            const columns = this.createColumns(Object.keys(resp.list[0]));
            this.setState({
                total: resp.total,
                columns,
                dataSource: resp.list
            })
        }).catch(err => {
            // 错误处理
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <Card
                    title="文章列表"
                    extra={<Button type="primary">导出Excel</Button>}
                >
                    <Table
                        // record表示每条数据对象
                        rowKey={record => record.id}
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                        loading={this.state.isLoading}
                        pagination={{
                            total: this.state.total,
                            hideOnSinglePage: true
                        }}
                    />
                </Card>
            </div>
        )
    }
}
